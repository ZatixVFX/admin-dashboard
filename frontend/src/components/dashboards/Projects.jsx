import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";

import { Pie, PieChart, Legend, Cell, ResponsiveContainer } from "recharts";

import { ProjectsIcon, TeamIcon, TasksIcon } from "../Icons";

const ProjectsData = [
  {
    name: "EchoCore Software",
    hours: 234,
    color: "var(--bs-gray-200)",
  },
  {
    name: "DataSphere App",
    hours: 120,
    color: "#31ba7e",
  },
  {
    name: "OptiSync",
    hours: 134,
    color: "var(--bs-primary)",
  },
];

const PieLegend = ({ payload }) => {
  return (
    <Container fluid>
      <Table className="mb-0">
        <thead>
          <tr>
            <th className="py-3">Project</th>
            <th className="text-end py-3">Hours</th>
          </tr>
        </thead>
        <tbody>
          {payload.map((entry, index) => {
            return (
              <tr key={`item-${index}`}>
                <td
                  className="ps-0 py-3"
                  style={{ color: "var(--bs-gray-600)" }}
                >
                  <div className="d-flex">
                    <div
                      className="pie-chart-legend"
                      style={{ backgroundColor: entry.payload.color }}
                    ></div>
                    {entry.payload.name}
                  </div>
                </td>
                <td className="text-grey text-end py-3">
                  {entry.payload.value}h
                </td>
              </tr>
              //   <div key={`item-${index}`} className="d-flex">
              //     <div
              //       className="pie-chart-legend"
              //       style={{ backgroundColor: entry.payload.color }}
              //     ></div>
              //     {entry.payload.type}
              //     <p className="ms-auto">{entry.payload.value}%</p>
              //   </div>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

const Projects = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, []);

  return (
    <Container
      fluid
      className="p-3 px-lg-5 pt-4"
      style={{ backgroundColor: "var(--bs-gray-200)" }}
    >
      <Row xs={1} className="gap-3">
        <Col>
          <div className="dashboard-card">
            <Row md={3} xs={1} className="p-4 gap-5 my-3 my-lg-0 gap-md-0">
              <Col>
                <div className="d-flex">
                  <div className="circle-grey fs-4 p-1">
                    <ProjectsIcon />
                  </div>
                  <h6 className="my-auto ms-2">Projects</h6>
                </div>
                <h4 className="text-end text-primary">12</h4>
                <ProgressBar
                  variant="primary"
                  now={20}
                  style={{ height: "10px" }}
                />
              </Col>
              <Col>
                <div className="d-flex">
                  <div className="circle-grey fs-4 p-1">
                    <TeamIcon />
                  </div>
                  <h6 className="my-auto ms-2">Team</h6>
                </div>
                <h4 className="text-end text-primary">185</h4>
                <ProgressBar
                  variant="primary"
                  now={50}
                  style={{ height: "10px" }}
                />
              </Col>
              <Col>
                <div className="d-flex">
                  <div className="circle-grey fs-4 p-1">
                    <TasksIcon />
                  </div>
                  <h6 className="my-auto ms-2">Tasks</h6>
                </div>
                <h4 className="text-end text-primary">73,234</h4>
                <ProgressBar
                  variant="primary"
                  now={80}
                  style={{ height: "10px" }}
                />
              </Col>
            </Row>
          </div>
          {/*  */}
        </Col>
        <Col>
          <Row className="gap-md-0 gap-3">
            <Col md={8}>
              <div className="dashboard-card p-4 pb-0 pie-chart pb-lg-4 h-100">
                <h3 className="pb-4">Total Balance</h3>
                <div className="project-pie">
                  <ResponsiveContainer height="90%">
                    <PieChart
                      className="project-legend d-flex"
                      margin={{ left: matches ? -25 : 0, right: 0 }}
                    >
                      <Pie
                        data={ProjectsData}
                        cx={matches ? 140 : null}
                        cy={130}
                        innerRadius={70}
                        outerRadius={105}
                        paddingAngle={0}
                        dataKey="hours"
                      >
                        {ProjectsData.map((data, index) => (
                          <Cell
                            style={{ outline: "none" }}
                            key={`cell-${index}`}
                            fill={data.color}
                          />
                        ))}
                      </Pie>
                      <Legend content={<PieLegend />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/*  */}
            </Col>
            <Col md={4}>
              <div className="dashboard-card py-4 h-100">
                <h4 className="pb-4 ps-4">Budget</h4>
                <div className="circle-progress circle-progress-budget mx-auto">
                  <svg
                    width="200"
                    height="250"
                    viewBox="0 0 250 275"
                    className="circular-progress circle-progress-budget"
                  >
                    <circle className="bg"></circle>
                    <circle className="fg"></circle>
                  </svg>
                  <div className="balance fs-4">R120,213</div>
                </div>
                <div className="d-flex fs-5 text-grey justify-content-center">
                  <div
                    className="pie-chart-legend"
                    style={{ backgroundColor: "#ddd" }}
                  ></div>
                  Total Budget
                </div>
                <div className="d-flex fs-5 text-grey justify-content-center">
                  <div className="pie-chart-legend bg-primary"></div>
                  Amount Used
                </div>
              </div>
              {/*  */}
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="dashboard-card p-4">
            <h4 className="pb-3">All Projects</h4>
            <Table
              className="mt-4"
              variant="secondary"
              responsive="sm"
              borderless={true}
            >
              <thead className="project-thead">
                <tr>
                  <th style={{ borderRadius: "5px 0px 0px 5px" }}>Name</th>
                  <th>Client</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th style={{ borderRadius: "0px 5px 5px 0px" }}>Progress</th>
                </tr>
              </thead>
              <tbody className="projects-tbody">
                <tr>
                  <td>EchoCore Software</td>
                  <td>John Doe</td>
                  <td>21.07.2027</td>
                  <td>
                    <div
                      className="status text-success"
                      style={{
                        backgroundColor: "rgb(25 135 84 / 16%)",
                      }}
                    >
                      Complete
                    </div>
                  </td>
                  <td className="text-center py-2" style={{ width: "35%" }}>
                    100%
                    <ProgressBar
                      variant="success"
                      style={{ height: "10px" }}
                      now={100}
                    />
                  </td>
                </tr>
                <tr>
                  <td>DataSphere App</td>
                  <td>Sam Smith</td>
                  <td>21.11.2027</td>
                  <td>
                    <div
                      className="status text-primary"
                      style={{
                        backgroundColor: "rgb(50 90 231 / 16%)",
                      }}
                    >
                      Progress
                    </div>
                  </td>
                  <td className="text-center py-2" style={{ width: "35%" }}>
                    40%
                    <ProgressBar
                      variant="primary"
                      style={{ height: "10px" }}
                      now={40}
                    />
                  </td>
                </tr>
                <tr>
                  <td>OptiSync</td>
                  <td style={{ width: "20%" }}>Kyle Williams</td>
                  <td>21.02.2028</td>
                  <td>
                    <div
                      className="status text-danger"
                      style={{
                        backgroundColor: "rgb(220 53 69 / 16%)",
                      }}
                    >
                      Pending
                    </div>
                  </td>
                  <td className="text-center py-2" style={{ width: "35%" }}>
                    10%
                    <ProgressBar
                      variant="danger"
                      style={{ height: "10px" }}
                      now={10}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          {/*  */}
        </Col>
      </Row>
    </Container>
  );
};

PieLegend.propTypes = {
  payload: PropTypes.array,
};

export default Projects;
