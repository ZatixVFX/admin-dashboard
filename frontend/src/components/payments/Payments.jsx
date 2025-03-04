import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import {
  WalletIcon,
  PiggyBankIcon,
  PricePlansIcon,
  ReceiptIcon,
} from "../Icons";

import PaymentDetails from "./PaymentDetails";
import Subscription from "./Subscription";
import PricePlans from "./PricePlans";
import Receipt from "./Receipt";

const Payments = () => {
  return (
    <section>
      <Container
        className="py-4 px-0"
        fluid
        style={{ maxHeight: "94vh", overflowY: "scroll" }}
      >
        <h1 className="px-sm-5 mx-sm-0 mx-4 pb-4">Payments</h1>
        <Tabs
          defaultActiveKey="payment-details"
          id="uncontrolled-tab-example"
          variant="underline"
          className="mb-3 mt-4 px-sm-5 px-4 dashboard-nav"
        >
          <Tab
            eventKey="payment-details"
            title={
              <h6 className="d-flex text-nowrap">
                <WalletIcon className="me-1 fs-5" /> Payment details
              </h6>
            }
          >
            <PaymentDetails />
          </Tab>
          <Tab
            eventKey="subscription"
            title={
              <h6 className="d-flex">
                <PiggyBankIcon className="me-1 fs-5" /> Subscription
              </h6>
            }
          >
            <Subscription />
          </Tab>
          <Tab
            eventKey="price-plans"
            title={
              <h6 className="d-flex text-nowrap">
                <PricePlansIcon
                  className="me-1 fs-5"
                  style={{ transform: "rotate(90deg)" }}
                />
                Price plans
              </h6>
            }
          >
            <PricePlans />
          </Tab>
          <Tab
            eventKey="receipt"
            title={
              <h6 className="d-flex">
                <ReceiptIcon className="me-1 fs-5" /> Receipt
              </h6>
            }
          >
            <Receipt />
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Payments;
