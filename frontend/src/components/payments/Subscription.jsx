import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Subscription = () => {
  const [showPlan, setShowPlan] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);

  return (
    <Container
      fluid
      className="p-3 px-sm-5 pt-4"
      style={{
        backgroundColor: "var(--bs-gray-200)",
        minHeight: "69.4vh",
      }}
    >
      <Row md={2} xs={1} className="gy-4">
        <Col>
          <div className="dashboard-card p-4 h-100">
            <h4 className="pb-5">My Subscription</h4>
            <h4 className="text-primary">Family monthly - R150/month</h4>
            <p className="text-grey">You're a family user, since 09.11.2020</p>
            <Button
              onClick={() => setShowPlan(true)}
              className="btn-gray fw-medium p-2 px-4"
            >
              Change plan
            </Button>
            <Modal show={showPlan} onHide={() => setShowPlan(false)} centered>
              <Modal.Header
                style={{ borderBottom: "0px" }}
                closeButton
              ></Modal.Header>
              <Modal.Body className="text-center pt-0 pb-4">
                <h1>Select plan</h1>
                <p className="text-grey">
                  Please select price plan according to your needs
                </p>
                <div className="mx-sm-4 mx-1 py-0">
                  <Nav className="flex-column gap-2">
                    {[
                      {
                        planType: "Monthly",
                        price: 200,
                      },
                      {
                        planType: "Family",
                        price: 400,
                      },
                      {
                        planType: "Pro",
                        price: 799,
                      },
                    ].map((data, index) => (
                      <Nav.Item key={`item-${index}`} className="price-plan">
                        <Nav.Link eventKey={data.planType}>
                          <div className="text-start">
                            <h5>{data.planType}</h5>
                            <p className="text-grey mb-0">
                              Price plan description
                            </p>
                          </div>
                          <h4 className="mt-3">R{data.price}</h4>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Button className="w-100 py-2 mt-2 fw-medium">Select</Button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
        <Col>
          <div className="dashboard-card p-4 h-100">
            <h4 className="pb-5">Next payment</h4>
            <p className="text-grey">
              Date: <span className="text-dark">09.11.2025</span>
            </p>
            <p className="text-grey">
              Amount: <span className="text-dark">R150</span>
            </p>
            <Button
              onClick={() => setShowSubscription(true)}
              className="btn-light fw-medium border p-2 px-4"
              style={{ color: "var(--bs-gray-800)" }}
            >
              Cancel subscription
            </Button>
            <Modal
              show={showSubscription}
              onHide={() => setShowSubscription(false)}
              centered
            >
              <Modal.Header
                style={{ borderBottom: "0px" }}
                closeButton
              ></Modal.Header>
              <Modal.Body className="text-center pt-0 pb-4">
                <h1>Cancel subscription</h1>
                <p className="text-grey">
                  Are you sure you want to cancel your family monthly
                  subscription?
                </p>
                <div className="mx-auto pt-3 pb-3" style={{ width: "70%" }}>
                  <Button
                    variant="primary"
                    className="w-100 mb-2 fw-medium"
                    onClick={() => setShowSubscription(false)}
                  >
                    Stay with us
                  </Button>
                  <Button
                    variant="light"
                    className="fw-medium border w-100"
                    size="md"
                    style={{ color: "var(--bs-gray-800)" }}
                  >
                    Cancel subscription
                  </Button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscription;
