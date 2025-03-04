import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PricePlans = () => {
  const pricePlans = [
    {
      type: "Free",
      desc: "Customize and setup your dashboard for personal use",
      resources: 5,
      additionalSeats: 0,
      price: 0,
      included: [
        "Unlimited projects",
        "real time availability",
        "Reminders & notifications",
      ],
    },
    {
      type: "Basic",
      desc: "Setup your admin project for admin and teams",
      resources: 10,
      additionalSeats: 50,
      price: 150,
      included: ["API request log", "Web hooks", "+ Everything from free"],
    },
    {
      type: "Pro",
      desc: "Add custom integrations and use premium features",
      resources: 25,
      additionalSeats: 150,
      price: 400,
      included: ["Accounting", "24/7 support", "+ Everything from basic"],
    },
  ];
  return (
    <Container
      fluid
      className="p-3 px-sm-5 pt-4"
      style={{
        backgroundColor: "var(--bs-gray-200)",
      }}
    >
      <Row md={3} xs={1} className="gy-4">
        {pricePlans.map((data, index) => (
          <Col key={`item-${index}`}>
            <div className="dashboard-card text-center p-4 pb-0 h-100">
              <h1>{data.type}</h1>
              <p className="text-grey px-lg-1">{data.desc}</p>
              <Button className="btn-gray fw-medium py-2 w-75 mb-5">
                Select
              </Button>
              <div className="border-top border-bottom py-5">
                <h3 className="text-primary">{data.resources}</h3>
                <p className="text-grey mb-0">
                  resources included <br />
                  {`${
                    data.additionalSeats > 0
                      ? `+R${data.additionalSeats}`
                      : `${data.additionalSeats}`
                  } additional seats available`}
                </p>
              </div>
              <div className="border-bottom py-5">
                <h1 className="mb-0">R{data.price}</h1>
                <p className="text-grey mb-0">per month</p>
              </div>
              <div className="py-5 pb-4">
                {data.included.map((data, index) => (
                  <p key={`item-${index}`}>
                    {data.includes("+", 0) ? (
                      <span className="fw-medium">{data}</span>
                    ) : (
                      data
                    )}
                    <br />
                  </p>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricePlans;
