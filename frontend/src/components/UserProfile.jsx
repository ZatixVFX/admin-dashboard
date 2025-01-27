import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import {
  PencilIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LikeIcon,
  CommentIcon,
  RetweetIcon,
} from "./Icons";

const UserProfile = () => {
  const [month, setMonth] = useState(1);

  const { userInfo } = useSelector((state) => state.auth);

  const name = userInfo.name.split(" ");

  let days = [];
  const months = [];
  const daysCondition = () => {
    let conditions = [
      month == 1,
      month == 3,
      month == 5,
      month == 7,
      month == 8,
      month == 10,
      month == 12,
    ];
    if (conditions.some(Boolean)) {
      return 32;
    } else if (month == 2) {
      return 29;
    } else {
      return 31;
    }
  };

  for (let num = 1; num < daysCondition(); num++) {
    if (num >= 10) {
      days.push(num);
    } else {
      days.push(`0${num}`);
    }
  }

  for (let num = 1; num < 13; num++) {
    months.push(num);
  }

  return (
    <section>
      <Container
        className="py-4 px-0"
        fluid
        style={{ maxHeight: "94vh", overflowY: "scroll" }}
      >
        <div className="px-5">
          <h1>User Profile</h1>
          <p className="text-grey">
            Components for editing profile, friends list, public profile and
            post view.
          </p>
        </div>
        <Container
          fluid
          className="p-3 px-lg-5 pt-4"
          style={{ backgroundColor: "var(--bs-gray-200)" }}
        >
          <Row sm={2} xs={1}>
            <Col lg={8} className="">
              <div className="dashboard-card">
                <div className="bg-img">
                  <Button className="fs-5 p-1 pt-0 m-3">
                    <PencilIcon />
                  </Button>
                </div>
                <div className="px-4">
                  <div className="d-flex mb-lg-0 mb-4 flex-lg-row flex-column text-lg-start text-center ">
                    <div className="profile-pic">
                      <Image
                        className="me-lg-4 ms-lg-0  mx-auto"
                        src="https://xsgames.co/randomusers/avatar.php?g=male"
                        alt="profile pic"
                        roundedCircle
                      />
                    </div>
                    <div>
                      <h4 className="pt-lg-3 mb-lg-2 mb-0">{userInfo.name}</h4>
                      <span className="text-grey">
                        @{userInfo.name.toLowerCase().replaceAll(" ", "")}
                      </span>
                    </div>
                  </div>
                  <Tabs
                    defaultActiveKey="about"
                    id="uncontrolled-tab-example"
                    variant="underline"
                    className="my-4 dashboard-nav user-profile border-bottom gap-md-4 gap-3"
                  >
                    <Tab eventKey="about" title={<h6>About</h6>}>
                      <Container fluid className="px-0 pb-3">
                        <Row md={2} xs={1}>
                          <Col>
                            <h6 className="mb-0">Phone</h6>
                            <p className="text-grey">+27685193432</p>
                          </Col>
                          <Col>
                            <h6 className="mb-0">Date Of Birth</h6>
                            <p className="text-grey">13.08.1989</p>
                          </Col>
                          <Col>
                            <h6 className="mb-0">Email</h6>
                            <p className="text-grey">{userInfo.email}</p>
                          </Col>
                          <Col>
                            <h6 className="mb-0">Location</h6>
                            <p className="text-grey">South Africa, Cape Town</p>
                          </Col>
                        </Row>
                        <h6 className="mb-0">Position</h6>
                        <p className="text-grey">
                          Web Developer at{" "}
                          <span className="text-dark fw-medium">
                            Artboard Inc.
                          </span>
                        </p>
                        <h6 className="mb-0">Bio</h6>
                        <p className="text-grey">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Assumenda ipsa alias natus reiciendis voluptas
                          laboriosam, corrupti repellendus, eius pariatur
                          sapiente earum expedita ipsam incidunt aliquam
                          consectetur at quam voluptatem.
                        </p>
                      </Container>
                    </Tab>
                    <Tab eventKey="edit-profile" title={<h6>Edit Profile</h6>}>
                      <Form noValidate className="pb-3">
                        <Row xs={1} className="mb-3 gap-3">
                          <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder={name[0]}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder={name[1]}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Date Of Birth</Form.Label>
                            <InputGroup className="gap-3 dob flex-sm-row flex-column">
                              <Form.Select>
                                <option>Day</option>
                                {days.map((day, index) => (
                                  <option value={day} key={`item-${index}`}>
                                    {day}
                                  </option>
                                ))}
                              </Form.Select>
                              <Form.Select
                                onChange={(e) => setMonth(e.target.value)}
                              >
                                <option>Month</option>
                                {months.map((month, index) => (
                                  <option value={month} key={`item-${index}`}>
                                    {month}
                                  </option>
                                ))}
                              </Form.Select>
                              <Form.Select>
                                <option>Year</option>
                                {Array.from(
                                  { length: 51 },
                                  (_, i) => new Date().getFullYear() - i
                                ).map((year, index) => (
                                  <option value={year} key={`item-${index}`}>
                                    {year}
                                  </option>
                                ))}
                              </Form.Select>
                            </InputGroup>

                            <Form.Group
                              as={Col}
                              controlId="validationCustomUsername"
                              className="my-3 gender"
                            >
                              <Form.Label>Gender</Form.Label>
                              <Form.Check
                                label="Male"
                                name="gender"
                                type="radio"
                                id="male"
                              />
                              <Form.Check
                                label="Female"
                                name="gender"
                                type="radio"
                                id="female"
                              />
                            </Form.Group>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Artboard Inc."
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Contact Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder={userInfo.email}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="+27685193432"
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="South Africa, Cape Town"
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                              style={{ resize: "vertical", maxHeight: "70px" }}
                              as="textarea"
                              placeholder="Tell Us About Yourself"
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>

                        <Button>Submit form</Button>
                      </Form>
                    </Tab>
                    <Tab eventKey="friends" title={<h6>Friends</h6>}>
                      <Container fluid>
                        <Row md={2} xs={1}>
                          {[
                            {
                              name: "Jessica Sanders",
                              status: "Online",
                            },
                            {
                              name: "Anny Smith",
                              status: "Offline",
                            },
                            {
                              name: "Kyle Williams",
                              status: "Busy",
                            },
                            {
                              name: "Joseph Doe",
                              status: "Online",
                            },
                            {
                              name: "John Smith",
                              status: "Busy",
                            },
                            {
                              name: "David Williams",
                              status: "Offline",
                            },
                          ].map((acc, index) => (
                            <Col
                              key={`item-${index}`}
                              className="my-3 px-1 d-flex"
                            >
                              <div
                                className="friends-status"
                                style={{
                                  backgroundImage: `url(https://xsgames.co/randomusers/assets/avatars/${
                                    index >= 2 ? "male" : "female"
                                  }/${index}.jpg)`,
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: `var(--bs-${
                                      acc.status === "Offline"
                                        ? "gray-500"
                                        : acc.status === "Online"
                                        ? "success"
                                        : "danger"
                                    })`,
                                  }}
                                ></div>
                              </div>
                              <h6 className="text-grey my-auto ps-3">
                                {acc.name}
                              </h6>
                            </Col>
                          ))}
                        </Row>
                      </Container>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <Row xs={1} className="gap-3 mt-sm-0 mt-3">
                <Col className="px-lg-1">
                  <div className="dashboard-card text-center">
                    <div className="pt-4 pb-3">
                      <Image
                        className="profile-pic-socials mb-3"
                        src="https://xsgames.co/randomusers/avatar.php?g=male"
                        alt="profile-pic"
                        roundedCircle
                      />
                      <h4>Mark Rafael</h4>
                      <h5 className="text-grey fw-normal">Web Developer</h5>
                      <div className="socials fs-5">
                        <Link to="">
                          <FacebookIcon />
                        </Link>
                        <Link to="">
                          <TwitterIcon />
                        </Link>
                        <Link to="">
                          <InstagramIcon />
                        </Link>
                      </div>
                    </div>
                    <Row lg={3} className="social-footer">
                      <Col className="p-3 px-0">
                        <p>204</p>
                        <span>Following</span>
                      </Col>
                      <Col className="p-3 px-0">
                        <p>2300</p>
                        <span>Followers</span>
                      </Col>
                      <Col className="p-3 px-0">
                        <p>32</p>
                        <span>Posts</span>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="px-lg-1">
                  <div className="dashboard-card p-3 pb-1 px-0">
                    <div className="d-flex px-3">
                      <div
                        className="friends-status me-3"
                        style={{
                          backgroundImage:
                            "url(https://xsgames.co/randomusers/assets/avatars/female/0.jpg)",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "var(--bs-success)",
                          }}
                        ></div>
                      </div>
                      <div className="my-auto">
                        <h6 className="mb-0">Jessica Sanders</h6>
                        <span className="text-grey">16 days ago</span>
                      </div>
                    </div>
                    <div className="border-top border-bottom mt-2 mb-0 p-3">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum commodi quos sint, nemo eius est.
                      </p>
                    </div>
                    <Row lg={3} className="text-center border-bottom py-3">
                      <Col>
                        <Link to="">
                          <LikeIcon className="fs-4 text-primary me-2" />
                        </Link>
                        532
                      </Col>
                      <Col>
                        <Link to="">
                          <CommentIcon className="fs-4 text-primary me-2" />
                        </Link>
                        456
                      </Col>
                      <Col>
                        <Link to="">
                          <RetweetIcon className="fs-4 text-primary me-2" />
                        </Link>
                        45
                      </Col>
                    </Row>
                    <Form noValidate className="m-3">
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          placeholder="Reply"
                          style={{
                            resize: "vertical",
                            minHeight: "70px",
                            maxHeight: "70px",
                          }}
                        />
                      </Form.Group>
                      <Button className="mt-3">Post</Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default UserProfile;
