import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { toast } from "react-toastify";

import LogoDark from "../../assets/ArtboardDark.svg";

import { TeamIcon, AdminIcon, GearIcon } from "../Icons";

const StepThree = ({ setStep, setActiveKey }) => {
  const [permission, setPermission] = useState("");
  return (
    <Container
      className="text-center p-lg-5 py-5 px-4 h-100 d-flex flex-column vh-100"
      style={{ backgroundColor: "var(--bs-gray-200)", overflowY: "scroll" }}
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
          <h2>Manage Permissions</h2>
          <p className="text-grey mb-5">Who can edit your project</p>
          <div className="account-type flex-column gap-4 mb-4">
            <Button
              active={permission === "everyone" ? true : false}
              variant="white"
              id="everyone"
              onClick={(e) => setPermission(e.target.id)}
              className="btn p-3 w-100"
            >
              <div className="d-flex">
                <TeamIcon className="fs-1 text-primary my-auto" />
                <div className="text-start ps-4">
                  <h5 className="mb-0">Everyone</h5>
                  <p className="text-grey">
                    All users can edit and manage your project
                  </p>
                </div>
              </div>
            </Button>
            <Button
              active={permission === "admin" ? true : false}
              id="admin"
              onClick={(e) => setPermission(e.target.id)}
              variant="white"
              className="btn p-3 w-100"
            >
              <div className="d-flex">
                <AdminIcon className="fs-1 text-primary my-auto" />
                <div className="text-start ps-4">
                  <h5 className="mb-0">Admin</h5>
                  <p className="text-grey">
                    Only users with admin role can edit your project
                  </p>
                </div>
              </div>
            </Button>
            <Button
              active={permission === "manager" ? true : false}
              id="manager"
              onClick={(e) => setPermission(e.target.id)}
              variant="white"
              className="btn p-3 w-100"
            >
              <div className="d-flex">
                <GearIcon className="fs-1 text-primary my-auto" />
                <div className="text-start ps-4">
                  <h5 className="mb-0">Manager role</h5>
                  <p className="text-grey">
                    Create a manager role for editing permissions
                  </p>
                </div>
              </div>
            </Button>
          </div>
          <Button
            variant="primary"
            className="w-100"
            onClick={() => {
              if (permission) {
                setStep(4);
                setActiveKey("step-4");
              } else {
                toast.error("Select permission");
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

export default StepThree;
