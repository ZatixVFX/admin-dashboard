import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

import { toast, ToastContainer } from "react-toastify";

import {
  GearIcon,
  NotificationIcon,
  DevicesIcon,
  SmartphoneIcon,
  PCIcon,
} from "../Icons";

const AccountSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [del, setDel] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);

  const [show, setShow] = useState(undefined);
  const handleClose = () => setShow(undefined);
  const handleShow = (id) => setShow(id);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const updatedUserInfo = {
    id: userInfo._id,
    name,
    email,
  };
  const updatePWDHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords does not match");
    } else {
      try {
        const res = await updateProfile({
          ...updatedUserInfo,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        setPassword("");
        setConfirmPassword("");
        toast.success("Password updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  let notifications = [
    "Recommendations and news",
    "Upcoming events",
    "Features and updates",
    "Message or mention",
    "Direct message",
    "Mention in post",
    "New Follower",
  ];
  let emailNotifications = [...notifications.slice(0, 4)];

  const devices = [
    {
      type: "PC",
      lastLogin: "21.09.2023",
      OS: "Windows",
      user: "Jessica Sanders",
    },
    {
      type: "Smartphone",
      lastLogin: "09.10.2023",
      OS: "IOS",
      user: "Joseph Doe",
    },
    {
      type: "PC",
      lastLogin: "20.12.2023",
      OS: "MacOS",
      user: "John Smith",
    },
    {
      type: "Smartphone",
      lastLogin: "24.11.2023",
      OS: "Android",
      user: "David Williams",
    },
  ];

  return (
    <section>
      <ToastContainer />
      <Container
        className="py-4 px-0"
        fluid
        style={{ maxHeight: "94vh", overflowY: "scroll" }}
      >
        <h1 className="px-sm-5 mx-sm-0 mx-4 pb-4">Account Settings</h1>
        <Tabs
          defaultActiveKey="General"
          id="uncontrolled-tab-example"
          variant="underline"
          className="mb-3 mt-4 px-sm-5 px-4 dashboard-nav"
        >
          <Tab
            eventKey="General"
            title={
              <h6 className="d-flex">
                <GearIcon className="me-2 fs-5" />
                General
              </h6>
            }
          >
            <Container
              fluid
              className="p-3 px-lg-5 pt-4"
              style={{ backgroundColor: "var(--bs-gray-200)" }}
            >
              <Row md={2} xs={1} className="gap-md-0 gap-4">
                <Col>
                  <div className="dashboard-card p-4 h-100">
                    <h4 className="pb-2">Subscription</h4>
                    <div className="d-flex justify-content-between">
                      <p className="my-auto">R100 per month</p>
                      <Button className="btn-gray fw-medium">Change</Button>
                    </div>
                    <div className="d-flex mt-3 justify-content-between">
                      <p className="my-auto">Family monthly subscription</p>
                      <Button className="btn-gray fw-medium">Manage</Button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="dashboard-card p-4">
                    <h4 className="pb-2">Delete Account</h4>
                    <p className="text-grey w-sm-75">
                      Before deleting your account, you need to cancel your
                      subscription
                    </p>
                    <Button
                      className="btn-light fw-medium border w-50"
                      size="md"
                      style={{ color: "var(--bs-gray-800)" }}
                      onClick={() => setDel(true)}
                    >
                      Delete
                    </Button>
                    <Modal show={del} onHide={() => setDel(false)} centered>
                      <Modal.Header
                        style={{ borderBottom: "0px" }}
                        closeButton
                      ></Modal.Header>
                      <Modal.Body className="text-center pt-0 pb-4">
                        <h1>Delete Account</h1>
                        <p className="text-grey">
                          Are you sure you want to delete your account?
                        </p>
                        <div
                          className="mx-auto pt-3 pb-3"
                          style={{ width: "70%" }}
                        >
                          <Button
                            variant="primary"
                            className="w-100 mb-2 fw-medium"
                            onClick={() => setDel(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="light"
                            className="fw-medium border w-100"
                            size="md"
                            style={{ color: "var(--bs-gray-800)" }}
                          >
                            Delete Account
                          </Button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </Col>
                <Col>
                  <div className="dashboard-card p-4 pb-md-0 h-100 mt-md-4">
                    <h4 className="pb-2">Personal Settings</h4>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-0">Email</h6>
                        <p className="text-grey">{userInfo.email}</p>
                      </div>
                      <Button
                        className="btn-gray fw-medium h-50 my-auto"
                        onClick={() => setChangeEmail(true)}
                      >
                        Change
                      </Button>
                      <Modal
                        show={changeEmail}
                        onHide={() => setChangeEmail(false)}
                        centered
                      >
                        <Modal.Header
                          style={{ borderBottom: "0px" }}
                          closeButton
                        ></Modal.Header>
                        <Modal.Body className="pt-0 pb-4 ">
                          <h1 className="text-center">Change Email</h1>
                          <Form noValidate className="px-4">
                            <Row xs={1} className="gap-3">
                              <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="Enter your new email"
                                />
                              </Form.Group>
                              <Form.Group as={Col}>
                                <Form.Label>Confirm Email</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="Confirm your new email"
                                />
                              </Form.Group>
                            </Row>
                            <Button
                              variant="primary"
                              className="mb-2 mt-3 w-100 fw-medium"
                              onClick={() => setChangeEmail(false)}
                            >
                              Update Email
                            </Button>
                          </Form>
                        </Modal.Body>
                      </Modal>
                    </div>
                    <Form noValidate>
                      <Row xs={1} className="gap-3">
                        <Form.Group as={Col}>
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={userInfo.name}
                          />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Language</Form.Label>
                          <Form.Select>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Chinese (Traditional)</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Check
                            className="text-grey"
                            label="Subscribe to newsletters"
                            name="subscribe"
                            type="checkbox"
                            id="subscribe"
                          />
                        </Form.Group>
                      </Row>
                      <Button variant="primary" className="w-25 mt-3">
                        Save
                      </Button>
                    </Form>
                  </div>
                </Col>
                <Col>
                  <div className="dashboard-card p-4 pb-md-0 mt-md-4 h-100">
                    <h4 className="pb-2">Change Password</h4>
                    <Form onSubmit={updatePWDHandler}>
                      <Row xs={1} className="gap-3">
                        <Form.Group as={Col}>
                          <Form.Label>Current Password</Form.Label>
                          <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>New Password</Form.Label>
                          <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </Form.Group>
                      </Row>
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-sm-50 mt-3"
                      >
                        Update Password
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
              <br />
            </Container>
          </Tab>
          <Tab
            eventKey="Notifications"
            title={
              <h6 className="d-flex">
                <NotificationIcon className="me-2 fs-5" />
                Notifications
              </h6>
            }
          >
            <Container
              fluid
              className="p-3 px-lg-5 pt-4"
              style={{ backgroundColor: "var(--bs-gray-200)" }}
            >
              <div className="p-1">
                <h4>Emails</h4>
                <div className="dashboard-card">
                  <Form noValidate>
                    <Row xs={1}>
                      {emailNotifications.map((data, index) => (
                        <Form.Group
                          key={`item-${index}`}
                          as={Col}
                          className="d-flex justify-content-between border-bottom "
                        >
                          <Form.Label className="fw-normal my-auto fs-6 ps-3 py-2 text-grey">
                            {data}
                          </Form.Label>
                          <Form.Check
                            className="fs-5 pe-3 py-2"
                            type="switch"
                          />
                        </Form.Group>
                      ))}
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="p-1 mt-4">
                <h4>Notifications</h4>
                <div className="dashboard-card">
                  <Form noValidate>
                    <Row xs={1}>
                      {notifications.map((data, index) => (
                        <Form.Group
                          key={`item-${index}`}
                          as={Col}
                          className="d-flex justify-content-between border-bottom "
                        >
                          <Form.Label className="fw-normal my-auto fs-6 ps-3 py-2 text-grey">
                            {data}
                          </Form.Label>
                          <Form.Check
                            className="fs-5 pe-3 py-2"
                            type="switch"
                          />
                        </Form.Group>
                      ))}
                    </Row>
                  </Form>
                </div>
              </div>
            </Container>
          </Tab>
          <Tab
            eventKey="Devices"
            title={
              <h6 className="d-flex">
                <DevicesIcon className="me-2 fs-5" />
                Devices
              </h6>
            }
          >
            <Container
              fluid
              className="p-3 px-lg-5 pt-4"
              style={{
                backgroundColor: "var(--bs-gray-200)",
                minHeight: "69.5vh",
              }}
            >
              <Row md={2} xs={1} className="gap-md-0 gap-3">
                {devices.map((device, index) => (
                  <Col key={`item-${index}`}>
                    <div
                      className={`dashboard-card p-md-5 p-4 h-100 mt-0 ${
                        index >= 2 ? "mt-md-4" : ""
                      }`}
                    >
                      <div className="d-flex">
                        <span
                          className="text-primary"
                          style={{ fontSize: "3.5rem" }}
                        >
                          {device.type === "PC" ? (
                            <PCIcon />
                          ) : (
                            <SmartphoneIcon />
                          )}
                        </span>
                        <div className="ps-4">
                          <h6 className="my-1">
                            {device.user} - {device.OS}
                          </h6>
                          <p className="text-grey my-1">
                            Last login {device.lastLogin}
                          </p>
                          <Button
                            className="btn-gray"
                            onClick={() => handleShow(index)}
                          >
                            Unlink
                          </Button>
                          <Modal
                            show={show === index}
                            onHide={handleClose}
                            centered
                          >
                            <Modal.Header
                              style={{ borderBottom: "0px" }}
                              closeButton
                            ></Modal.Header>
                            <Modal.Body className="pt-0 pb-4">
                              <h3 className="text-center px-5">
                                Are you sure you want to unlink this device?
                              </h3>
                              <div
                                className="mx-auto pt-3 pb-3"
                                style={{ width: "70%" }}
                              >
                                <Button
                                  variant="primary"
                                  className="w-100 mb-2 fw-medium"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  variant="light"
                                  className="fw-medium border w-100"
                                  size="md"
                                  style={{ color: "var(--bs-gray-800)" }}
                                >
                                  Unlink device
                                </Button>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <br />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default AccountSettings;
