import { useState } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import {
  WalletIcon,
  PiggyBankIcon,
  PricePlansIcon,
  ReceiptIcon,
  CreditCardIcon,
  PaypalIcon,
  PencilIcon,
} from "./Icons";

import VisaIcon from "../assets/visa.png";

const Payments = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <Container
        className="py-4 px-0"
        fluid
        style={{ maxHeight: "94vh", overflowY: "scroll" }}
      >
        <h1 className="px-sm-5 mx-sm-0 mx-4 pb-4">Dashboards</h1>
        <Tabs
          defaultActiveKey="payment-details"
          id="uncontrolled-tab-example"
          variant="underline"
          className="mb-3 mt-4 px-sm-5 px-4 dashboard-nav"
        >
          <Tab
            eventKey="payment-details"
            title={
              <h6 className="d-flex">
                <WalletIcon className="me-1 fs-5" /> Payment details
              </h6>
            }
          >
            <Container
              fluid
              className="p-3 px-sm-5 pt-4"
              style={{
                backgroundColor: "var(--bs-gray-200)",
                minHeight: "69.4vh",
              }}
            >
              <Row md={2}>
                <Col>
                  <div className="dashboard-card p-4 h-100">
                    <h4 className="pb-2">Add payment method</h4>
                    <Tabs
                      defaultActiveKey="card-details"
                      id="uncontrolled-tab-example"
                      className="mb-3 mt-4 payment-details"
                    >
                      <Tab
                        eventKey="card-details"
                        title={
                          <Form.Check
                            type="radio"
                            label={
                              <div className="d-flex justify-content-between py-2 px-4">
                                <div className="text-start mx-3">
                                  <h6 className="mb-0">Credit Card</h6>
                                  <p className="text-grey mb-0">
                                    MasterCard or Visa
                                  </p>
                                </div>

                                <CreditCardIcon className="fs-3 text-grey my-auto" />
                              </div>
                            }
                            name="payment-method"
                            id="credit-card"
                            className="my-auto d-flex mx-0"
                          />
                        }
                      >
                        <Form noValidate>
                          <Row md={1} className="gap-3 mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                              <Form.Label>Card Number</Form.Label>
                              <Form.Control
                                required
                                maxLength={19}
                                autoComplete="cc-number"
                                type="tel"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                placeholder="e.g 4444 4444 4444 4444"
                              />

                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                              <Row md={2}>
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom01"
                                >
                                  <Form.Label>Expiration date</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    pattern="[0-9]*"
                                    maxLength={5}
                                    inputMode="numeric"
                                    placeholder="MM/YY"
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                  as={Col}
                                  controlId="validationCustom01"
                                >
                                  <Form.Label>CVC/CVV</Form.Label>
                                  <Form.Control
                                    required
                                    type="tel"
                                    maxLength={3}
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    placeholder="e.g 444"
                                  />
                                  <Form.Control.Feedback>
                                    Looks good!
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </Row>
                            </Form.Group>
                          </Row>
                          <Button variant="primary">Add payment details</Button>
                        </Form>
                      </Tab>
                      <Tab
                        eventKey="paypal"
                        title={
                          <Form.Check
                            type="radio"
                            label={
                              <div className="d-flex justify-content-between py-2 px-4">
                                <div className="text-start mx-3">
                                  <h6 className="mb-0">Paypal</h6>
                                  <p className="text-grey mb-0">
                                    Online payment
                                  </p>
                                </div>

                                <PaypalIcon className="fs-3 text-grey my-auto" />
                              </div>
                            }
                            name="payment-method"
                            id="paypal"
                            className="my-auto d-flex mx-0"
                          />
                        }
                      >
                        <p className="text-grey mb-2">Proceed to payment</p>
                        <Button variant="primary">Add payment details</Button>
                      </Tab>
                    </Tabs>
                  </div>
                </Col>
                <Col>
                  <div className="dashboard-card p-4">
                    <h4 className="pb-2">Payment method</h4>
                    <div className="d-flex">
                      <Image src={VisaIcon} height="50px" />
                      <div className="d-flex justify-content-between w-100">
                        <div className="text-grey ps-2">
                          <p className="mb-0">**** **** **** 4444</p>
                          <p className="mb-0">Expires 02/28</p>
                        </div>
                        <Button
                          className="p-0 my-auto"
                          style={{
                            height: "35px",
                            width: "35px",
                            borderRadius: "0.2rem",
                          }}
                          variant="light"
                          onClick={() => setShow(true)}
                        >
                          <PencilIcon className="text-primary fs-6" />
                        </Button>
                        <Modal
                          show={show}
                          onHide={() => setShow(false)}
                          centered
                        >
                          <Modal.Header
                            style={{ borderBottom: "0px" }}
                            closeButton
                          ></Modal.Header>
                          <Modal.Body className="text-center pt-0 pb-4">
                            <h2>Remove payment method</h2>
                            <p className="text-grey">
                              Are you sure you want to remove payment method?
                            </p>
                            <div
                              className="mx-auto pt-3 pb-3"
                              style={{ width: "80%" }}
                            >
                              <Button
                                variant="primary"
                                className="w-100 mb-2 fw-medium"
                                onClick={() => setShow(false)}
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="light"
                                className="fw-medium border w-100"
                                size="md"
                                style={{ color: "var(--bs-gray-800)" }}
                              >
                                Remove card
                              </Button>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab
            eventKey="subscription"
            title={
              <h6 className="d-flex">
                <PiggyBankIcon className="me-1 fs-5" /> Subscription
              </h6>
            }
          >
            Tab Content
          </Tab>
          <Tab
            eventKey="price-plans"
            title={
              <h6 className="d-flex">
                <PricePlansIcon
                  className="me-1 fs-5"
                  style={{ transform: "rotate(90deg)" }}
                />
                Price plans
              </h6>
            }
          >
            Tab Content
          </Tab>
          <Tab
            eventKey="receipt"
            title={
              <h6 className="d-flex">
                <ReceiptIcon className="me-1 fs-5" /> Receipt
              </h6>
            }
          >
            Tab Content
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Payments;
