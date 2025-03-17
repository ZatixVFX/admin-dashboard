import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Placeholder from "react-bootstrap/Placeholder";
// import Image from "react-bootstrap/Image";

import ProjectImg from "../../assets/projects/Quantum-Stride.png";
import PlaceholderImg from "../../assets/placeholder.png";

export const ProjectCard = ({ projects, imgLoaded }) => {
  //   const [imgLoaded, setImgLoaded] = useState(false);
  //   const [arr, setArr] = useState(new Array(6).fill());
  //   // useEffect(() => {
  //   //   const img = new Image();
  //   //   img.onLoad = () => {
  //   //     setImgLoaded(true);
  //   //   };
  //   //   img.src = projects.img;
  //   // });

  //   useEffect(() => {
  //     const cachedArray = async (arr) => {
  //       const promises = await arr.map((data) => {
  //         return new Promise((resolve, reject) => {
  //           const img = new Image();
  //           img.src = data.img;
  //           img.onload = () => resolve();
  //           img.onerror = () => reject();
  //         });
  //       });
  //       await Promise.all(promises);
  //       setArr([...arr]);

  //       setImgLoaded(true);
  //     };
  //     cachedArray(projects);
  //   }, [projects]);

  return (
    <Row md={3} sm={2} xs={1} className="gy-3">
      {projects.map((data, index) => {
        return (
          <Col key={`item-${index}`} className="px-1">
            {!imgLoaded ? (
              <Card>
                <Placeholder
                  style={{ borderRadius: "0.375rem 0.375rem 0rem 0rem" }}
                  animation="glow"
                >
                  <Placeholder
                    style={{
                      height: "200px",
                      width: "100%",
                      backgroundColor: "var(--bs-gray-700)",
                      borderRadius: "0.3rem 0.3rem 0rem 0rem",
                    }}
                  />
                </Placeholder>
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>

                  <Placeholder.Button
                    variant="primary"
                    size="sm"
                    className="w-100"
                    xs={6}
                  />
                </Card.Body>
              </Card>
            ) : (
              <Card style={{ height: "100%", width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={data.img}
                  height={200}
                  style={{}}
                />
                <Card.ImgOverlay
                  style={{
                    left: "auto",
                  }}
                >
                  <h6 className="status text-primary bg-white p-1">
                    {data.status}
                  </h6>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="fs-6 mb-1">{data.name}</Card.Title>
                  <Card.Text as={"div"} className="fs-6">
                    <a href="#" className="card-link text-wrap">
                      {`www.${data.name
                        .replaceAll(" ", "")
                        .toLocaleLowerCase()}.com`}
                    </a>
                    <div
                      className="status text-grey my-1"
                      style={{ backgroundColor: "var(--bs-gray-200)" }}
                    >
                      {data.dateStarted}
                    </div>
                    <p className="text-grey my-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Et consequuntur tempore, nemo nostrum fuga rerum.
                    </p>
                    <div className="contributors">
                      <div className="p-4">
                        {new Array(Math.floor(Math.random() * (5 - 3 + 1) + 3))
                          .fill()
                          .map((data, index) => (
                            <img
                              key={`item-${index}`}
                              className="rounded-circle"
                              src={`https://xsgames.co/randomusers/assets/avatars/${
                                index >= 3 ? "female" : "male"
                              }/${Math.floor(Math.random(index) * 50)}.jpg`}
                              height={35}
                              width={35}
                            />
                          ))}
                      </div>
                    </div>
                  </Card.Text>
                  <Button
                    as={Link}
                    to={`/projects/${data.name
                      .replaceAll(" ", "-")
                      .toLocaleLowerCase()}`}
                    variant="primary"
                    size="sm"
                    className="w-100"
                  >
                    View project
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Col>
        );
      })}
    </Row>
  );
};

const Projects = ({ projects }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [current, setCurrent] = useState(Number(searchParam.get("page")) || 1);
  let size = 6;
  const [arr, setArr] = useState(
    projects.slice(size * current - size, size * current)
  );
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setSearchParam({ page: current });
    const fetchImages = async (projectsArray) => {
      setArr(projectsArray.slice(size * current - size, size * current));
      setImgLoaded(false);

      const promises = await projectsArray.map((data) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.fetchPriority = "high";
          img.src = data.img;
          img.onload = () => resolve(data.img);
          img.onerror = () => reject(img);
        });
      });
      await Promise.all(promises);

      setArr(projectsArray.slice(size * current - size, size * current));

      setImgLoaded(true);
    };
    fetchImages(projects);
  }, [setSearchParam, projects, current, size]);

  // let projectCards = ;
  // console.log(projectCards);

  return (
    <Container
      className="py-4 px-0"
      fluid
      style={{ maxHeight: "94vh", overflowY: "scroll" }}
    >
      <div className="px-5 pb-3">
        <h1>Projects</h1>
      </div>
      <Container
        fluid
        className="p-3 px-lg-5 py-5"
        style={{ backgroundColor: "var(--bs-gray-200)" }}
      >
        <ProjectCard projects={arr} imgLoaded={imgLoaded} />
        <Container className="text-center pt-5 pb-0">
          {projects.slice(size * (current + 1) - size, size * (current + 1))
            .length === 0 ? null : (
            <Button
              className="btn-light fw-medium border p-2 px-4"
              style={{ color: "var(--bs-gray-800)" }}
              onClick={() => {
                setCurrent(current + 1);
              }}
            >
              Next
            </Button>
          )}

          {current <= 1 ? null : (
            <Button
              className="btn-light fw-medium border p-2 px-4"
              style={{ color: "var(--bs-gray-800)" }}
              onClick={() => {
                setCurrent(current - 1);
              }}
            >
              Previous
            </Button>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Projects;
