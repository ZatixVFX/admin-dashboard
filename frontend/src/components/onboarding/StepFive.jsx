import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import LogoDark from "../../assets/ArtboardDark.svg";

const StepFive = ({ setStep, setActiveKey }) => {
  return (
    <Container
      className="text-center p-lg-5 py-5 px-4 vh-100 d-flex flex-column"
      style={{ backgroundColor: "var(--bs-gray-200)" }}
    >
      <div className="my-5">
        <Image
          className="my-4"
          src={LogoDark}
          height="25px"
          width="auto"
          alt="Artboard logo"
        />
        <Container className="bg-white p-5 py-4" style={{ width: "470px" }}>
          <h2 className="mb-4">Your project setup successfully!</h2>
          <p className="text-grey mb-4">
            Now let's start using our amazing product
          </p>
          <Button as={Link} to="/" variant="primary" className="w-100">
            Get started!
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default StepFive;
