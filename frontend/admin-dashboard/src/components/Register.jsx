import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import LogoLight from "../assets/ArtboardLight.svg";
import LogoDark from "../assets/ArtboardDark.svg";

const Register = () => {
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
                    <Form className="pb-3 text-start">
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>What should we call you?</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>What is your email?</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Create a password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 text-start"
                        controlId="checkbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label={<TermsConditions />}
                        />
                      </Form.Group>
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
