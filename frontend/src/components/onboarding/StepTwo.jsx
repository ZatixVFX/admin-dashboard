import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { toast } from "react-toastify";

import LogoDark from "../../assets/ArtboardDark.svg";

import { UserIcon, TeamIcon } from "../Icons";

const StepTwo = ({ setStep, setActiveKey }) => {
  const [accType, setAccType] = useState("");
  return (
    <Container
      className="text-center p-lg-5 py-5 px-4 h-100 d-flex flex-column"
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
          <h2>Account type</h2>
          <p className="text-grey mb-5">
            Please select personal or business account
          </p>
          <div className="account-type mb-4">
            <Button
              style={{ width: "170px" }}
              active={accType === "personal" ? true : false}
              variant="white"
              id="personal"
              onClick={(e) => setAccType(e.target.id)}
              className="btn p-3"
            >
              <div>
                <UserIcon className="fs-1 text-primary" />
                <h5>Personal</h5>
                <p className="text-grey">1 personal project is available</p>
              </div>
            </Button>
            <Button
              active={accType === "business" ? true : false}
              id="business"
              onClick={(e) => setAccType(e.target.id)}
              style={{ width: "170px" }}
              variant="white"
              className="btn p-3"
            >
              <div>
                <TeamIcon className="fs-1 text-primary" />
                <h5>Business</h5>
                <p className="text-grey">10 projects with team access</p>
              </div>
            </Button>
          </div>
          <Button
            variant="primary"
            className="w-100"
            onClick={() => {
              if (accType) {
                setStep(3);
                setActiveKey("step-3");
              } else {
                toast.error("Select an account type");
              }
            }}
          >
            Continue
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default StepTwo;
