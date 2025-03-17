import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import LogoLight from "../../assets/ArtboardLight.svg";
import LogoDark from "../../assets/ArtboardDark.svg";

const OnBoarding = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} className="bg-secondary d-lg-block d-none">
          <Row lg={1} className="text-white py-4 " style={{ height: "100vh" }}>
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
                  A few clicks from creating your personal or admin dashboard
                </p>
                <p className="py-1"> Save your time and money!</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default OnBoarding;
