import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import LogoLight from "../assets/ArtboardLight.svg";
import LogoDark from "../assets/ArtboardDark.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboards");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      // console.log(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <section>
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
                    {"Don't have an account? "}
                    <Link
                      to="/register"
                      className="text-primary fw-bold hyperlink"
                    >
                      Sign Up
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
                    <h3 className="py-4">Sign into Artboard</h3>
                    <Form onSubmit={submitHandler} className="pb-3">
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 text-start"
                        controlId="checkbox"
                      >
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                      >
                        Login
                      </Button>
                    </Form>
                    <Link to="/" className="hyperlink text-primary fw-medium">
                      Forgot your password?
                    </Link>
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

export default Login;
