import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import LogoDark from "../../assets/ArtboardDark.svg";

const StepOne = ({ setStep, setActiveKey }) => {
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
          <h2 className="mb-4">Welcome onboard!</h2>
          <p className="text-grey mb-4">
            A few clicks from creating your personal admin dashboard <br /> Save
            your time and money
          </p>
          <Button
            variant="primary"
            className="w-100"
            onClick={() => {
              setStep(2);
              setActiveKey("step-2");
            }}
          >
            Continue
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default StepOne;
