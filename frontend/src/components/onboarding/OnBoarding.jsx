import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

import LogoLight from "../../assets/ArtboardLight.svg";
import LogoDark from "../../assets/ArtboardDark.svg";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

import { CircleIcon, CheckCircleIcon } from "../Icons";

const OnBoarding = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [step, setStep] = useState(Number(searchParam.get("step") || 1));
  const [activeKey, setActiveKey] = useState(`step-${step}`);

  const onClickHandler = (num, e) => {
    setStep(num);
    setActiveKey(e.target.getAttribute("data-rr-ui-event-key"));
  };

  useEffect(() => {
    setSearchParam({ step: step });
    if (step > 5) {
      setStep(1);
      setActiveKey("step-1");
    }
  }, [setSearchParam, step]);
  const stepsArr = [
    {
      id: 1,
      Step: StepOne,
      description: "Welcome",
    },
    {
      id: 2,
      Step: StepTwo,
      description: "Account settings",
    },
    {
      id: 3,
      Step: StepThree,
      description: "Manage permissions",
    },
    {
      id: 4,
      Step: StepFour,
      description: "Project settings",
    },
    {
      id: 5,
      Step: StepFive,
      description: "Get started",
    },
  ];
  return (
    <Container fluid>
      <Row md={2}>
        <Col md={4} className="bg-secondary d-lg-block">
          <Row lg={1} className="text-white py-4 vh-md-100">
            <Col
              className="d-md-block d-none"
              style={{ paddingLeft: "2.3rem" }}
            >
              <Link to="/">
                <Image
                  src={LogoLight}
                  alt="Logo"
                  style={{ width: "auto", height: "20px" }}
                />
              </Link>
            </Col>
            <Col className="p-5 px-4 h-100">
              <Container className="mx-0">
                <Nav
                  className="flex-md-column flex-row steps gap-4"
                  activeKey={activeKey}
                  defaultActiveKey="step-1"
                >
                  {stepsArr.map((data, index) => (
                    <Nav.Item key={`item-${index}`}>
                      <Nav.Link
                        className={`d-flex px-0 ${step > data.id && "checked"}`}
                        eventKey={`step-${data.id}`}
                        onClick={(e) => onClickHandler(data.id, e)}
                      >
                        <div className="ps-2">
                          Step {data.id}
                          <div className="sub-header">{data.description}</div>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col md={8} className="px-0">
          {stepsArr.map(
            (Data, index) =>
              Data.id === step && (
                <Data.Step
                  setStep={setStep}
                  setActiveKey={setActiveKey}
                  key={`item-${index}`}
                />
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OnBoarding;
