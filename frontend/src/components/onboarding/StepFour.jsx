import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { toast } from "react-toastify";

import LogoDark from "../../assets/ArtboardDark.svg";

const StepFour = ({ setStep, setActiveKey }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [budget, setBudget] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!projectName) {
      toast.error("Enter project name");
    } else if (!projectDesc) {
      toast.error("Enter project description");
    } else if (!budget) {
      toast.error("Select a budget");
    } else {
      setStep(5);
      setActiveKey("step-5");
    }
  };

  return (
    <Container
      className="text-center p-lg-5 py-5 px-4  d-flex flex-column vh-100"
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
          <h2>Project settings</h2>
          <p className="text-grey mb-4">Setup project details</p>
          <Form
            noValidate
            onSubmit={(e) => submitHandler(e)}
            className="text-start"
          >
            <Row xs={1} className="mb-4 gy-4">
              <Form.Group as={Col} controlId="project-name">
                <Form.Label>Project name</Form.Label>
                <Form.Control
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter your project name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustomUsername">
                <Form.Label>Project description</Form.Label>
                <Form.Control
                  style={{
                    resize: "vertical",
                    minHeight: "70px",
                    maxHeight: "70px",
                  }}
                  as="textarea"
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                  placeholder="Enter project description"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Budget</Form.Label>
                <Form.Select onChange={(e) => setBudget(e.target.value)}>
                  <option value="">Select project budget</option>
                  <option value="R0 - 25000">R0 - 25000</option>
                  <option value="R30000 - 70000">R30000 - 70000</option>
                  <option value="Over R70000">Over R70000</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Check
                  className="text-grey"
                  label="Fixed price"
                  name="fixed-price"
                  type="checkbox"
                  id="fixed-price"
                />
                <Form.Check
                  className="text-grey"
                  label="Due date"
                  name="due-date"
                  type="checkbox"
                  id="due-date"
                />
              </Form.Group>
            </Row>
            <Button variant="primary" className="w-100" type="submit">
              Continue
            </Button>
          </Form>
        </Container>
      </div>
    </Container>
  );
};

export default StepFour;
