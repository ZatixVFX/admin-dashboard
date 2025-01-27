import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  CartIcon,
  ArrowClockWise,
  RevenueIcon,
  ArrowUpSquare,
  ArrowDownSquare,
} from "../Icons";

const Ecommerce = () => {
  const [active, setActive] = useState(false);

  const AreaChartDataV = [];

  for (let num = 13; num >= 1; num--) {
    AreaChartDataV.push({
      value: 19000 * Math.random(),
    });
  }

  const RevenueData = [
    {
      title: "New Orders",
      icon: <CartIcon />,
      amount: 834,
      increase: 3.3,
    },
    {
      title: "Chargebacks",
      icon: <ArrowClockWise />,
      amount: 23,
      decrease: 1.2,
    },
    {
      title: "Revenue",
      icon: <RevenueIcon />,
      amount: (82231).toLocaleString(undefined, { minimumFractionDigits: 0 }),
      increase: 23.12,
    },
  ];

  return (
    <Container
      fluid
      className="p-3 px-lg-5 pt-4"
      style={{ backgroundColor: "var(--bs-gray-200)" }}
    >
      <Row className="gap-3" xs={1}>
        <Col>
          <div className="dashboard-card py-3 px-3 px-lg-3">
            <h4 className="ps-1">Revenue Overview</h4>
            <Tabs
              defaultActiveKey="month"
              id="uncontrolled-tab-example"
              className="mb-3 justify-content-end flex-md-row flex-column revenue-overview"
            >
              {new Array(
                { date: "Month", color: "var(--bs-primary)" },
                { date: "Year", color: "var(--bs-success)" }
              ).map((data, index) => (
                <Tab
                  key={`item-${index}`}
                  eventKey={data.date.toLocaleLowerCase()}
                  title={
                    <Button as="a" className={`${index === 1 ? "me-1" : ""}`}>
                      {data.date}
                    </Button>
                  }
                >
                  <div className="revenue-chart">
                    <ResponsiveContainer>
                      <AreaChart
                        margin={{ left: -15, top: 5 }}
                        data={AreaChartDataV}
                      >
                        <defs>
                          <linearGradient
                            id={`color-${index}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop stopColor={data.color} stopOpacity={0.2} />
                          </linearGradient>
                        </defs>
                        <Area
                          fill={`url(#color-${index})`}
                          dataKey="value"
                          fillOpacity={1}
                          stroke={data.color}
                          dot={{
                            stroke: data.color,
                            strokeWidth: 1,
                            r: 3,
                          }}
                        />
                        <XAxis
                          textAnchor="end"
                          sclaeToFit="true"
                          verticalAnchor="start"
                          interval={0}
                          fontSize={11}
                        />
                        <YAxis
                          fontSize={11}
                          textAnchor="end"
                          sclaeToFit="true"
                          verticalAnchor="start"
                          interval={0}
                          tickFormatter={(number) =>
                            `R${number
                              .toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                              })
                              .toString()
                              .slice(0, 4)}K`
                          }
                        />
                        <CartesianGrid vertical={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
          {/*  */}
        </Col>
        <Col>
          <Row md={3} xs={1} className="gap-md-0 gap-3 revenue-cards">
            {RevenueData.map((data, index) => (
              <Col key={`item-${index}`}>
                <div className="dashboard-card p-4 pb-3 h-100">
                  <h3 className="d-flex justify-content-between">
                    {data.title}
                    <span className="text-primary">{data.icon}</span>
                  </h3>
                  <div className="fs-3 py-3">
                    {data.title === "Revenue" ? `R${data.amount}` : data.amount}
                    <span className="ps-2">
                      {data.increase && (
                        <ArrowUpSquare className="text-success" />
                      )}
                      {data.decrease && (
                        <ArrowDownSquare className="text-danger" />
                      )}
                    </span>
                  </div>
                  <p>
                    <span
                      className={`pe-1 ${
                        data.increase ? "text-success" : "text-danger"
                      }`}
                    >
                      {data.increase
                        ? `+${data.increase}`
                        : `-${data.decrease}`}
                      %
                    </span>
                    From Last Week
                  </p>
                </div>
                {/*  */}
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <div className="dashboard-card p-4">
            <h3 className="pb-2">Real-time board</h3>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td>USA</td>
                  <td>01.06.2012</td>
                  <td>R200,000</td>
                </tr>
                <tr>
                  <td>Yahoo</td>
                  <td>ZAR</td>
                  <td>14.09.2012</td>
                  <td>R150,000</td>
                </tr>
                <tr>
                  <td>Bing</td>
                  <td>UK</td>
                  <td>10.12.2012</td>
                  <td>R190,000</td>
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

export default Ecommerce;
