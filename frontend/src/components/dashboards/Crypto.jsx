import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  ArrowUpSquare,
  ArrowDownSquare,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUp,
  ArrowDown,
} from "../Icons";

import BTC from "../../assets/btc-logo.svg";
import BCH from "../../assets/bch-logo.svg";
import ETH from "../../assets/ethereum-eth-logo.svg";

const AreaChartDataV = [];

for (let num = 30; num >= 1; num--) {
  AreaChartDataV.push({
    value: 0.1 + Math.random(),
  });
}

const AreaChartData = [
  {
    name: "Bitcoin",
    abbr: "BTC",
    svg: BTC,
    amount: 6520.23,
    increase: 10.32,
    color: "var(--bs-primary)",
  },
  {
    name: "Bitcoin cash",
    abbr: "BCH",
    svg: BCH,
    amount: 333.89,
    decrease: 5.04,
    color: "#31ba7e",
  },
  {
    name: "Ethereum",
    abbr: "ETH",
    svg: ETH,
    amount: 219.84,
    increase: 1.85,
    color: "#BDBDBD",
  },
];

const BTCStock = [
  {
    amount: 6200,
    time: "01:00",
  },
  {
    amount: 6600,
    time: "02:00",
  },
  {
    amount: 6700,
    time: "03:00",
  },
  {
    amount: 6500,
    time: "04:00",
  },
  {
    amount: 6300,
    time: "05:00",
  },
  {
    amount: 6400,
    time: "06:00",
  },
];

const CryptoBalance = [
  {
    currency: "Bitcoin",
    acr: "BTC",
    img: BTC,
    amount: 21.87,
    zar: 8000,
  },
  {
    currency: "Bitcoin Cash",
    acr: "BCH",
    img: BCH,
    amount: 631.82,
    zar: 6500,
  },
  {
    currency: "Etheurem",
    acr: "ETH",
    img: ETH,
    amount: 8237.07,
    zar: 4500.65,
  },
];

const Transaction = [];

for (let num = 5; num >= 1; num--) {
  Transaction.push({
    id: 0 + Math.random(),
    sent: 0.012458632 + Math.random(),
    date: new Date(new Date() - Math.random() * 1e12)
      .toLocaleString("hi-IN", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replaceAll("/", "."),
  });
}

for (let num = 5; num >= 1; num--) {
  Transaction.push({
    id: Math.random(),
    receive: 0.012474632 + Math.random(),
    date: new Date(new Date() - Math.random() * 1e12)
      .toLocaleString("hi-IN", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replaceAll("/", "."),
  });
}

Transaction.sort(() => Math.random() - 0.5);

const CustomToolTip = ({ active, payload }) => {
  const PercDiff = (x, y) => {
    let numOne = x - y;
    let numTwo = (x + y) / 2;
    return ((numOne / numTwo) * 100).toFixed(2);
  };
  if (active && payload && payload.length) {
    return (
      <Container className="bg-white dashboard-card p-3">
        {payload.map((data, index) => {
          let index_of = BTCStock.map((x) => x.amount).indexOf(data.value);
          let num =
            BTCStock[index_of === 0 ? index_of + 1 : index_of - 1].amount;
          let percentage = PercDiff(data.value, num);
          // console.log(`Amount: ${num}`);
          // console.log(`Percentage: ${PercDiff(data.value, num)}`);
          // console.log();
          return (
            <div key={`item-${index}`}>
              <h5>R{data.value}</h5>
              <p className="mb-0">
                {data.value > num ? (
                  <>
                    <span className="text-success">
                      +{percentage}% <ArrowUpSquare />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-danger">
                      {percentage}% <ArrowDownSquare />
                    </span>
                  </>
                )}
              </p>
            </div>
          );
        })}
      </Container>
    );
  }
};

const Crypto = () => {
  return (
    <Container
      fluid
      className="p-3 px-lg-5 pt-4"
      style={{ backgroundColor: "var(--bs-gray-200)" }}
    >
      <Row xs={1} className="gap-3 area-chart">
        <Col>
          <Row md={3} xs={1} className="gap-md-0 gap-3">
            {AreaChartData.map((data, index) => (
              <Col key={`item-${index}`}>
                <div className="dashboard-card py-4 pb-5 px-4">
                  <div style={{ height: "170px" }}>
                    <ResponsiveContainer height={"30%"}>
                      <div className="d-flex">
                        <Image src={data.svg} height="50px" width="15%" />
                        <div className="pt-2 ps-2">
                          <h6 className="fw-bold mb-0">{data.abbr}</h6>
                          <p style={{ color: "var(--bs-gray-600)" }}>
                            {" "}
                            {data.name}
                          </p>
                        </div>
                      </div>
                      <h3 className="">
                        R
                        {data.amount.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}
                      </h3>
                      <div
                        className={`fs-6 pb-2 ${
                          data.increase ? "text-success" : "text-danger"
                        }`}
                      >
                        {data.increase ? (
                          <>
                            <span>
                              +{data.increase}% <ArrowUpSquare />
                            </span>
                          </>
                        ) : (
                          <>
                            <span>
                              -{data.decrease}% <ArrowDownSquare />
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
          <div className="dashboard-card p-3">
            <div className="d-flex justify-content-between flex-wrap flex-sm-nowrap mb-3">
              <div className="d-flex">
                <Image src={BTC} height="50px" width="50%" />
                <div className="ps-2 pt-1">
                  <h5 className="mb-0">R6,520.23</h5>
                  <p style={{ color: "var(--bs-gray-600)", width: "200px" }}>
                    Bitcoin (BTC){" "}
                    <span className="text-success">
                      2.5% <ArrowUpRight style={{ fontSize: "13px" }} />
                    </span>
                  </p>
                </div>
              </div>
              <p className="py-3 w-100 text-sm-end text-start">
                High: <span className="text-success">6630.22</span> Low:{" "}
                <span className="text-danger">6401.92</span>
              </p>
            </div>
            <div style={{ height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={BTCStock}
                  margin={{
                    left: -20,
                  }}
                >
                  <XAxis interval={0} fontSize={11} dataKey="time" />
                  <YAxis
                    fontSize={11}
                    domain={[6200, 6700]}
                    tickFormatter={(number) => `R${number}`}
                  />
                  <Tooltip content={<CustomToolTip />} />
                  <Area
                    fill="#3D89CD"
                    color="white"
                    fillOpacity={0.4}
                    dataKey="amount"
                    activeDot={{ r: 5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/*  */}
        </Col>
        <Col>
          <Row md={2} xs={1} className="gap-md-0 gap-3">
            <Col>
              <div className="dashboard-card p-sm-4 p-3">
                <h4>Total Balance</h4>
                <div className="text-center py-4">
                  <h3 className="fw-bold">R18,000.65</h3>
                  <span className="text-success">
                    <ArrowUpSquare /> +R8,293.84
                  </span>
                </div>
                {CryptoBalance.map((data, index) => (
                  <div
                    key={`item-${index}`}
                    className="currency mt-2 border-bottom"
                  >
                    <Image
                      src={data.img}
                      className="my-auto"
                      height="40px"
                      width="50px"
                    />
                    <div className="ps-2 my-2">
                      <div>
                        <h5 className="mb-0">{data.currency}</h5>
                        <p className="text-nowrap">{`${data.amount} ${data.acr}`}</p>
                      </div>
                      <div className="text-grey">
                        <p>ZAR</p>
                        <p>
                          R
                          {data.zar.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/*  */}
            </Col>
            <Col>
              <div className="dashboard-card p-sm-4 p-3 d-flex flex-column justify-content-between h-100">
                <h4>Market Cap</h4>
                <div style={{ height: "100px" }}></div>
                <div>
                  {AreaChartData.map((data, index) => (
                    <div
                      key={`item-${index}`}
                      className={`d-flex mt-3 border-bottom`}
                    >
                      <Image
                        src={data.svg}
                        className="my-2"
                        height="40px"
                        width="50px"
                      />
                      <div className="market-cap ps-2 my-auto">
                        <p>{data.abbr}</p>
                        <p>R{data.amount}</p>
                        {data.increase ? (
                          <span className="text-success">
                            +{data.increase}% <ArrowUpRight />
                          </span>
                        ) : (
                          <span className="text-danger">
                            -{data.decrease}% <ArrowDownRight />
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="dashboard-card p-4">
            <h4>Transaction History</h4>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th className="fw-medium">Type</th>
                  <th className="fw-medium">ID</th>
                  <th className="fw-medium">Date</th>
                  <th className="fw-medium">Value</th>
                </tr>
              </thead>
              <tbody>
                {Transaction.map((data, index) => (
                  <tr key={`item-${index}`}>
                    <td>
                      {data.sent ? (
                        <div
                          className="d-flex fw-medium"
                          style={{ width: "140px" }}
                        >
                          <div
                            className="text-danger text-center me-2"
                            style={{
                              backgroundColor: "var(--bs-gray-200)",
                              borderRadius: "50px 50px",
                              height: "25px",
                              width: "25px",
                            }}
                          >
                            <ArrowUp />
                          </div>
                          Sent BTC
                        </div>
                      ) : (
                        <div className="d-flex fw-medium">
                          <div
                            className="text-success text-center me-2"
                            style={{
                              backgroundColor: "var(--bs-gray-200)",
                              borderRadius: "50px 50px",
                              height: "25px",
                              width: "25px",
                            }}
                          >
                            <ArrowDown />
                          </div>
                          Receive BTC
                        </div>
                      )}
                    </td>
                    <td className="text-grey">{data.id}</td>
                    <td className="text-grey">{data.date}</td>
                    {data.sent ? (
                      <td className="text-danger">{data.sent} BTC</td>
                    ) : (
                      <td className="text-success">{data.receive} BTC</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/*  */}
        </Col>
      </Row>
    </Container>
  );
};

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default Crypto;
