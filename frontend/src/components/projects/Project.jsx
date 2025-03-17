import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { ProjectCard } from "./Projects";

import { ArrowLeftIcon } from "../Icons";

const Project = ({ name, img, status, dateDue, dateStarted, projects }) => {
  const navigate = useNavigate();
  const recentProjects = [...projects];
  let dateRegex = /(\d{2})\.(\d{2})\.(\d{4})/;
  let datePattern = "$3-$2-$1";
  return (
    <Container
      className="p-3 px-lg-5 pt-0 pb-5"
      fluid
      style={{
        maxHeight: "94vh",
        overflowY: "scroll",
        backgroundColor: "var(--bs-gray-200)",
      }}
    >
      <Link
        className="text-primary"
        style={{ textDecoration: "none" }}
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="fs-5 my-4" /> Back
      </Link>
      <Row md={2} className="gy-3">
        <Col md={7} className="px-1">
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={img} height={288} />
            <Card.Body>
              <Card.Title className="fs-6 mb-1">{name}</Card.Title>
              <Card.Text as={"div"} className="fs-6">
                <a href="#" className="card-link">
                  {`www.${name.toLocaleLowerCase()}.com`}
                </a>
                <p className="text-grey my-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  consequuntur tempore, nemo nostrum fuga rerum.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="ps-md-4 pe-lg-0 px-1">
          <div className="dashboard-card project-info p-4">
            <p>Status</p>
            <p className="text-grey mb-3">{status}</p>
            <p>Due date</p>
            <p className="text-grey mb-3">{dateDue}</p>
            <p>Date started</p>
            <p className="text-grey mb-3">{dateStarted}</p>
            <div className="contributors">
              <div className="p-4">
                {new Array(Math.floor(Math.random() * (5 - 3 + 1) + 3))
                  .fill()
                  .map((data, index) => (
                    <Image
                      key={`item-${index}`}
                      src={`https://xsgames.co/randomusers/assets/avatars/${
                        index >= 3 ? "female" : "male"
                      }/${Math.floor(Math.random(index) * 50)}.jpg`}
                      roundedCircle
                      height={35}
                      width={35}
                    />
                  ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <h4 className="my-4">Recent Projects</h4>
      <ProjectCard
        projects={recentProjects
          .sort(
            (a, b) =>
              new Date(
                b.dateStarted.replace(dateRegex, datePattern)
              ).getTime() -
              new Date(a.dateStarted.replace(dateRegex, datePattern)).getTime()
          )
          .slice(0, 3)}
        imgLoaded={true}
      />
      <div className="mb-4"></div>
    </Container>
  );
};

export default Project;
