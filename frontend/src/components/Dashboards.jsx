import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
// import { Chart as Chartjs } from "chart.js/auto";

import { AnalyticIcon, EcommerceIcon, CryptoIcon, ProjectsIcon } from "./Icons";

import Analytics from "./dashboards/Analytics";
import Ecommerce from "./dashboards/Ecommerce";
import Crypto from "./dashboards/Crypto";
import Projects from "./dashboards/Projects";

const Dashboards = () => {
  return (
    <section>
      <Container
        className="py-4 px-0"
        fluid
        style={{ maxHeight: "94vh", overflowY: "scroll" }}
      >
        <h1 className="px-sm-5 mx-sm-0 mx-4 pb-4">Dashboards</h1>
        <Tabs
          defaultActiveKey="Analytics"
          id="uncontrolled-tab-example"
          variant="underline"
          className="mb-3 mt-4 px-sm-5 px-4 dashboard-nav"
        >
          <Tab
            eventKey="Analytics"
            title={
              <h6 className="d-flex">
                <AnalyticIcon className="me-1 fs-5" /> Analytics
              </h6>
            }
          >
            <Analytics />
          </Tab>
          <Tab
            eventKey="Ecommerce"
            title={
              <h6 className="d-flex">
                <EcommerceIcon className="me-1 fs-5" /> Ecommerce
              </h6>
            }
          >
            <Ecommerce />
          </Tab>
          <Tab
            eventKey="Crypto"
            title={
              <h6 className="d-flex">
                <CryptoIcon className="me-1 fs-5" /> Crypto
              </h6>
            }
          >
            <Crypto />
          </Tab>
          <Tab
            eventKey="Projects"
            title={
              <h6 className="d-flex">
                <ProjectsIcon className="me-1 fs-5" /> Projects
              </h6>
            }
          >
            <Projects />
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Dashboards;
