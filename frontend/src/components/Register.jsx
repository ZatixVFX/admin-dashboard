import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import { toast, ToastContainer } from "react-toastify";

import LogoLight from "../assets/ArtboardLight.svg";
import LogoDark from "../assets/ArtboardDark.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedTCS, setAgreedTCS] = useState(false);

  const [showAlert, setShowAlert] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please fill in your name");
    } else if (!email) {
      toast.error("Please fill in your email");
    } else if (!password) {
      toast.error("Please fill in your password");
    } else if (!confirmPassword) {
      toast.error("Confirm your password");
    } else if (password !== confirmPassword) {
      toast.error("Passwords does not match");
    } else if (agreedTCS === false) {
      setShowAlert(true);
      setAgreedTCS(false);
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        console.error(err?.data?.message || err.error);
      }
    }
  };

  const TermsConditions = () => (
    <span>
      I agree to{" "}
      <Link to="/" className="hyperlink text-primary fw-medium">
        Artboard terms & conditions
      </Link>
    </span>
  );
  return (
    <>
      <section>
        <ToastContainer />
        <Container fluid>
          <Row>
            <Col lg={4} className="bg-secondary d-lg-block d-none">
              <Row
                lg={1}
                className="text-white py-4 "
                style={{ height: "100vh" }}
              >
                <Col className="px-5">
                  <Image
                    src={LogoLight}
                    alt="Logo"
                    style={{ width: "auto", height: "20px" }}
                  />
                </Col>
                <Col className="p-5">
                  <h2>Welcome onboard!</h2>
                  <div className="">
                    <p className="pt-3">
                      A few clicks from creating your personal or admin
                      dashboard
                    </p>
                    <p className="py-1"> Save your time and money!</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="text-center">
              <Row xs={1} style={{ minHeight: "650px" }}>
                <Col className="text-end p-4 px-sm-5 px-4">
                  <p>
                    {"Already have an account? "}
                    <Link
                      to="/login"
                      className="text-primary fw-bold hyperlink"
                    >
                      Sign In
                    </Link>
                  </p>
                </Col>
                <Col className="">
                  <Container className="form-section px-sm-2 px-0">
                    <Image
                      src={LogoDark}
                      alt="Logo"
                      style={{ width: "auto", height: "25px" }}
                    />
                    <h3 className="py-4">Sign up to Artboard</h3>
                    <Form onSubmit={submitHandler} className="pb-3 text-start">
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>What should we call you?</Form.Label>
                        <Form.Control
                          type="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>What is your email?</Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Create a password</Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm your password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 text-start"
                        controlId="checkbox"
                      >
                        <Form.Check
                          type="checkbox"
                          checked={agreedTCS}
                          onChange={(e) => setAgreedTCS(e.target.checked)}
                          label={<TermsConditions />}
                        />
                      </Form.Group>
                      {showAlert ? (
                        <Alert
                          style={{ height: "50px" }}
                          className="p-0 py-2"
                          variant="danger"
                          onClose={() => setShowAlert(false)}
                          dismissible
                        >
                          <p className="p-3 py-2">
                            You need to agree to the terms and conditions
                          </p>
                        </Alert>
                      ) : null}
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                      >
                        Create account
                      </Button>
                    </Form>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
