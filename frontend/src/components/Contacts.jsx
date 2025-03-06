import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TelephoneIcon, CommentIcon } from "./Icons";

const Contacts = () => {
  const contactList = [
    {
      name: "Jessica Sanders",
      status: "Online",
      gender: "female",
      img: "0",
      role: "Web developer",
      accountStatus: "Inactive",
      location: "Cape Town, South Africa",
      dateJoined: "05.11.2022",
    },
    {
      name: "Anny Smith",
      status: "Offline",
      gender: "female",
      img: "1",
      role: "Back end developer",
      accountStatus: "Active",
      location: "Milan, Italy",
      dateJoined: "15.08.2023",
    },
    {
      name: "Kyle Williams",
      status: "Busy",
      gender: "male",
      img: "2",
      role: "UI & UX designer",
      accountStatus: "Pending",
      location: "Barcelona, Spain",
      dateJoined: "27.09.2024",
    },
    {
      name: "John Smith",
      status: "Busy",
      gender: "male",
      img: "3",
      role: "Project Manager",
      accountStatus: "Pending",
      location: "London, UK",
      dateJoined: "02.01.2023",
    },
    {
      name: "Joseph Doe",
      status: "Online",
      gender: "male",
      img: "4",
      role: "Web developer",
      accountStatus: "Active",
      location: "New York, USA",
      dateJoined: "21.12.2024",
    },

    {
      name: "David Williams",
      status: "Offline",
      gender: "male",
      img: "5",
      role: "Back end developer",
      accountStatus: "Inactive",
      location: "Johannesburg, South Africa",
      dateJoined: "03.01.2025",
    },
  ];
  const ContactCard = ({ data }) => {
    return (
      <Col>
        <div className="dashboard-card p-4">
          <Row className="contact">
            <Col md={4} sm={10} xs={12} className="d-flex mb-md-0  mb-3 px-0">
              <div
                className="friends-status"
                style={{
                  backgroundImage: `url(https://xsgames.co/randomusers/assets/avatars/${data.gender}/${data.img}.jpg)`,
                }}
              >
                <div
                  style={{
                    backgroundColor: `var(--bs-${
                      data.status === "Offline"
                        ? "gray-500"
                        : data.status === "Online"
                        ? "success"
                        : "danger"
                    })`,
                  }}
                ></div>
              </div>
              <div className="my-auto fw-medium ps-3">
                <p className="mb-0">{data.name}</p>
                <p className="text-primary mb-0">{data.role}</p>
              </div>
            </Col>
            <Col md={2} sm={3} xs={6} className="my-auto  px-0">
              <div
                className="status text-grey border"
                style={{ backgroundColor: "var(--bs-gray-200)" }}
              >
                {data.accountStatus}
              </div>
            </Col>
            <Col md={2} sm={4} xs={6} className="my-auto px-0  pe-3">
              <h6 className="mb-0">{data.location}</h6>
            </Col>
            <Col md={2} sm={3} xs={6} className="my-sm-auto mt-3  px-0">
              <div
                className="status text-success"
                style={{
                  backgroundColor: "rgba(25, 135, 84, 0.16)",
                }}
              >
                {data.dateJoined}
              </div>
            </Col>
            <Col md={2} sm={2} xs={6} className="my-sm-auto mt-2 px-0">
              <a
                href="#"
                className="status text-primary p-1 fs-5"
                style={{ backgroundColor: "var(--bs-gray-300)" }}
              >
                <TelephoneIcon />
              </a>
              <a
                href="#"
                className="status text-primary ms-2 p-1 fs-5"
                style={{ backgroundColor: "var(--bs-gray-300)" }}
              >
                <CommentIcon />
              </a>
            </Col>
          </Row>
        </div>
      </Col>
    );
  };

  ContactCard.propTypes = {
    data: PropTypes.object.isRequired,
  };

  let dateRegex = /(\d{2})\.(\d{2})\.(\d{4})/;
  let datePattern = "$3-$2-$1";

  return (
    <Container
      className="py-4 px-0"
      fluid
      style={{ maxHeight: "94vh", overflowY: "scroll" }}
    >
      <div className="px-5 pb-3">
        <h1>Contacts</h1>
      </div>
      <Container
        fluid
        className="p-3 px-lg-5 pt-4"
        style={{ backgroundColor: "var(--bs-gray-200)" }}
      >
        <Tabs
          defaultActiveKey="name a-z"
          id="uncontrolled-tab-example"
          variant="tabs"
          className="mb-3 mt-4 gx-0 contact-sort-by"
        >
          <Tab eventKey="name a-z" title="Name a-z">
            <Row xs={1} className="gy-3">
              {contactList
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((data, index) => (
                  <ContactCard key={index} data={data} />
                ))}
            </Row>
          </Tab>
          <Tab eventKey="name z-a" title="Name z-a">
            <Row xs={1} className="gy-3">
              {contactList
                .sort((a, b) => b.name.localeCompare(a.name))
                .map((data, index) => (
                  <ContactCard key={index} data={data} />
                ))}
            </Row>
          </Tab>
          <Tab eventKey="recent" title="Recent">
            <Row xs={1} className="gy-3">
              {contactList
                .sort(
                  (a, b) =>
                    new Date(
                      b.dateJoined.replace(dateRegex, datePattern)
                    ).getTime() -
                    new Date(
                      a.dateJoined.replace(dateRegex, datePattern)
                    ).getTime()
                )
                .map((data, index) => (
                  <ContactCard key={index} data={data} />
                ))}
            </Row>
          </Tab>
          <Tab eventKey="oldest" title="Oldest">
            <Row xs={1} className="gy-3">
              {contactList
                .sort(
                  (a, b) =>
                    new Date(
                      a.dateJoined.replace(dateRegex, datePattern)
                    ).getTime() -
                    new Date(
                      b.dateJoined.replace(dateRegex, datePattern)
                    ).getTime()
                )
                .map((data, index) => (
                  <ContactCard key={index} data={data} />
                ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

export default Contacts;
