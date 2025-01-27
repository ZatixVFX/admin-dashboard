import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";

import { ArrowUpSquare, ArrowDownSquare } from "../Icons";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Cell,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Traffic = [
  {
    Month: "Jan",
    TotalVisitors: 120000,
    UniqueVisitors: 45000,
  },
  {
    Month: "Feb",
    TotalVisitors: 95000,
    UniqueVisitors: 33000,
  },
  {
    Month: "Mar",
    TotalVisitors: 55000,
    UniqueVisitors: 25000,
  },
  {
    Month: "Apr",
    TotalVisitors: 73000,
    UniqueVisitors: 39000,
  },
  {
    Month: "May",
    TotalVisitors: 58000,
    UniqueVisitors: 41000,
  },
  {
    Month: "June",
    TotalVisitors: 111000,
    UniqueVisitors: 74000,
  },
  {
    Month: "Aug",
    TotalVisitors: 89000,
    UniqueVisitors: 72000,
  },
];

const devices = [
  {
    type: "Desktop",
    percentage: 45,
    color: "var(--bs-gray-200)",
  },
  {
    type: "Mobile",
    percentage: 30,
    color: "#31ba7e",
  },
  {
    type: "Tablet",
    percentage: 25,
    color: "var(--bs-primary)",
  },
];

const AreaChartDataV = [];

for (let num = 30; num >= 1; num--) {
  AreaChartDataV.push({
    value: 0.1 + Math.random(),
  });
}

const AreaChartData = [
  {
    name: "Total Visits",
    amount: (105834).toLocaleString(undefined, { minimumFractionDigits: 0 }),
    increase: 10.32,
    color: "var(--bs-primary)",
  },
  {
    name: "Bounce Rate",
    percentage: 49.34,
    decrease: 5.04,
    color: "#31ba7e",
  },
  {
    name: "Visit Duration",
    time: "12m 31s",
    increase: 1.85,
    color: "#BDBDBD",
  },
];

const circleSize = 30;

const data = [
  {
    name: "L1",
    value: 25,
  },
];

const BarToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Container className="bg-white p-2">
        <h5 className="ps-1">{label}</h5>
        {payload.map((data, index) => {
          return (
            <div className="d-flex" key={`item-${index}`}>
              <div
                className="tooltip-icon"
                style={{ backgroundColor: data.color }}
              ></div>
              {data.name}: {data.value}
            </div>
          );
        })}
      </Container>
    );
  }
};

const PieLegend = ({ payload }) => {
  return (
    <Container className="p-0">
      {payload.map((entry, index) => {
        return (
          <div key={`item-${index}`} className="d-flex">
            <div
              className="pie-chart-legend"
              style={{ backgroundColor: entry.payload.color }}
            ></div>
            {entry.payload.type}
            <p className="ms-auto">{entry.payload.value}%</p>
          </div>
        );
      })}
    </Container>
  );
};

const Analytics = () => {
  const [large, setLarge] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  const [medium, setMedium] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setLarge(e.matches));
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMedium(e.matches));
  }, []);
  return (
    <Container
      fluid
      className="p-3 px-sm-5 pt-4"
      style={{ backgroundColor: "var(--bs-gray-200)" }}
    >
      <Row xs={1} className="gap-3">
        <Col>
          <Row md={2} className="gap-md-0 gap-3">
            <Col md={8}>
              <div className="dashboard-card p-4 traffic-overview">
                <h3 className="py-3">Traffic Overview</h3>
                <div style={{ height: "350px" }}>
                  <ResponsiveContainer className="pb-5">
                    <BarChart data={Traffic}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="Month"
                        textAnchor="end"
                        sclaeToFit="true"
                        verticalAnchor="start"
                        interval={0}
                        angle="-40"
                      />
                      <YAxis />
                      <Tooltip
                        content={<BarToolTip />}
                        cursor={{ fill: "transparent" }}
                      />
                      <Legend
                        iconType="circle"
                        formatter={(value) => (
                          <span style={{ color: "var(--bs-gray-700)" }}>
                            {value}
                          </span>
                        )}
                      />
                      <Bar
                        dataKey="UniqueVisitors"
                        fill="var(--bs-gray-500)"
                        barSize={10}
                        radius={[15, 15, 0, 0]}
                      />
                      <Bar
                        dataKey="TotalVisitors"
                        fill="var(--bs-primary)"
                        barSize={10}
                        radius={[15, 15, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
            {/*  */}
            <Col md={4}>
              <div className="dashboard-card p-4 pie-chart">
                <h3 className="py-3">Devices</h3>
                <div style={{ height: "350px" }}>
                  <ResponsiveContainer height="90%">
                    <PieChart margin={{}}>
                      <Pie
                        data={devices}
                        cy={100}
                        innerRadius={medium ? 45 : 50}
                        outerRadius={large ? 86 : medium ? 79 : null}
                        paddingAngle={0}
                        dataKey="percentage"
                      >
                        {devices.map((data, index) => (
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
            </Col>
          </Row>
        </Col>
        <Col>
          <Row md={3} className="gap-md-0 gap-3">
            {AreaChartData.map((data, index) => (
              <Col key={`item-${index}`}>
                <div className="dashboard-card py-4 px-4 text-center">
                  <div style={{ height: "170px" }}>
                    <ResponsiveContainer height={"30%"}>
                      <h5 className="py-2 fw-normal">{data.name}</h5>
                      <h3 className="pb-2">
                        {data.amount || data.time || `${data.percentage}%`}
                      </h3>
                      <div
                        className={`fs-6 ${
                          data.increase ? "text-success" : "text-danger"
                        }`}
                      >
                        {data.increase ? (
                          <>
                            <span>
                              <ArrowUpSquare /> +{data.increase}%
                            </span>
                          </>
                        ) : (
                          <>
                            <span>
                              <ArrowDownSquare /> -{data.decrease}%
                            </span>
                          </>
                        )}
                      </div>
                      <AreaChart data={AreaChartDataV}>
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
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                {/*  */}
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <Row md={2} className="gap-md-0 gap-3">
            <Col md={4}>
              <div className="dashboard-card text-center pt-4 h-100">
                <h4 className="fw-normal">Goal Completions</h4>
                <div className="circle-progress mx-auto my-2">
                  <svg
                    width="200"
                    height="250"
                    viewBox="0 0 250 250"
                    className="circular-progress"
                  >
                    <circle className="bg"></circle>
                    <circle className="fg"></circle>
                  </svg>
                  <div className="progress-value fs-2">25%</div>
                </div>
                <div>
                  <span className="text-success">
                    <ArrowUpSquare /> +10.32%
                  </span>
                  <p style={{ color: "var(--bs-gray-600)" }}>
                    from the last month
                  </p>
                </div>
              </div>
            </Col>
            {/*  */}
            <Col md={8}>
              <div className="dashboard-card p-4 h-100">
                <h4 className="pb-3">Traffic Sources</h4>
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>Channel</th>
                      <th>Sessions</th>
                      <th>Ratios</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Organic</td>
                      <td>51,293</td>
                      <td>
                        <ProgressBar
                          className="my-2"
                          style={{ height: "10px" }}
                          now={70}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Direct</td>
                      <td>43,345</td>
                      <td>
                        <ProgressBar
                          className="my-2"
                          style={{ height: "10px" }}
                          now={40}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Referral</td>
                      <td>14,022</td>
                      <td>
                        <ProgressBar
                          className="my-2"
                          style={{ height: "10px" }}
                          now={20}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              {/*  */}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

BarToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

PieLegend.propTypes = {
  payload: PropTypes.array,
};

export default Analytics;
