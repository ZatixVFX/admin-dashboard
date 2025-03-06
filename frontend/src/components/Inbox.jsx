import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";

import {
  BellIcon,
  NewsIcon,
  NotificationIcon,
  InboxIcon,
  ArrowRightIcon,
  BasketIcon,
  PaypalIcon,
} from "./Icons";

const Inbox = () => {
  return (
    <Container
      className="py-4 px-0"
      fluid
      style={{ maxHeight: "94vh", overflowY: "scroll" }}
    >
      <div className="px-sm-5 mx-sm-0 mx-4 pb-4">
        <h1>Inbox</h1>
        <p className="text-grey">Inbox, notifications, messages</p>
      </div>

      <Container
        fluid
        className="p-3 px-sm-5 pt-4"
        style={{
          backgroundColor: "var(--bs-gray-200)",
          minHeight: "69.4vh",
        }}
      >
        <Row lg={2}>
          <Col>
            <div className="dashboard-card ">
              <div className="d-flex justify-content-between p-4">
                <h2>All messages</h2>
                <a href="#" className="send-message ">
                  <span className="fs-3 p-1 px-2">+</span>
                </a>
              </div>
              <div
                className="bell-menu py-0"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Tabs
                  defaultActiveKey="news"
                  id="bell-items"
                  className="border-top border-bottom"
                  fill
                >
                  <Tab
                    eventKey="notifications"
                    title={
                      <span className="mx-2">
                        <NotificationIcon className="fs-5 mb-2 mx-4" />
                        Notifications
                      </span>
                    }
                  >
                    <div className="bell-items px-3">
                      {[
                        {
                          name: "Elizabeth Bennet",
                          notification: "liked your post",
                        },
                        {
                          name: "Jessica Smith",
                          notification: "commented on your photo",
                        },
                        {
                          name: "Kyle Hendricks",
                          notification: "birthday today!",
                        },
                      ].map((data, x) => (
                        <Link
                          key={x}
                          to=""
                          className="dropdown-item py-3 text-wrapping d-flex"
                        >
                          <Image
                            src={`https://randomuser.me/api/portraits/${
                              x === 2 ? "men" : "women"
                            }/${x + 7}.jpg`}
                            alt="profile pic"
                            style={{
                              height: "50px",
                            }}
                            roundedCircle
                          />
                          <div
                            className="bell-item ps-4 d-block"
                            style={{ width: "100%" }}
                          >
                            <h6 className="justify-content-start text-wrap">
                              {data.name}{" "}
                              <span
                                className="ps-1"
                                style={{
                                  color: "var(--bs-gray-600)",
                                  display: "contents",
                                }}
                              >
                                {data.notification}
                              </span>
                            </h6>

                            <p className="text-primary mb-0">
                              {x === 0 ? `${x + 2}` : x + 2}h ago
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Tab>
                  <Tab
                    eventKey="messages"
                    title={
                      <span className="mx-2">
                        <InboxIcon className="fs-5 mb-2 mx-4" />
                        Messages
                      </span>
                    }
                  >
                    <div className="bell-items px-3">
                      {[
                        "John Doe",
                        "Sam Williams",
                        "Jane Bennet",
                        "Sarah Smith",
                      ].map((name, x) => (
                        <Link
                          to=""
                          className="dropdown-item py-3 d-flex"
                          key={x}
                        >
                          <Image
                            src={`https://randomuser.me/api/portraits/${
                              x >= 2 ? "women" : "men"
                            }/${x}.jpg`}
                            alt="profile pic"
                            style={{
                              height: "50px",
                            }}
                            roundedCircle
                          />
                          <div
                            className="bell-item text-wrap ps-4"
                            style={{ width: "100%" }}
                          >
                            <h6>
                              {name} <span>1h ago</span>
                            </h6>

                            <p style={{ marginBottom: "0px" }}>
                              Lorem ipsum dolor sit amet....
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Tab>
                  <Tab
                    eventKey="news"
                    title={
                      <span className="mx-2">
                        <NewsIcon className="fs-5 mb-2 mx-4" />
                        News
                      </span>
                    }
                  >
                    <div className="bell-items px-3">
                      <Dropdown.Item
                        to=""
                        className="dropdown-item py-3 d-flex"
                      >
                        <span
                          className="news-icon fs-3"
                          style={{ backgroundColor: "#456aeb" }}
                        >
                          <BasketIcon />
                        </span>
                        <div
                          className="bell-item text-wrap ps-4"
                          style={{ width: "100%" }}
                        >
                          <h6>Ecommerce is live</h6>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item
                        to=""
                        className="dropdown-item py-3 d-flex"
                      >
                        <span
                          className="news-icon fs-3"
                          style={{ backgroundColor: "#31ba7e" }}
                        >
                          <PaypalIcon />
                        </span>
                        <div
                          className="bell-item text-wrap ps-4"
                          style={{ width: "100%" }}
                        >
                          <h6>PayPal is available as payment method</h6>
                        </div>
                      </Dropdown.Item>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
          <Col>
            <Row lg={1}>
              <Col>
                <div className="dashboard-card "></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Inbox;
