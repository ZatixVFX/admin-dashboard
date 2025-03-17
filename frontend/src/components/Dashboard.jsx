import React from "react";

import { useRef, useState, useEffect } from "react";
import {
  Navigate,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Hamburger from "hamburger-react";

import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

import LogoLight from "../assets/ArtboardLight.svg";
import SmallLogo from "../assets/ArtboardSM.svg";

import Header from "./layout/Header";

// NavItems
import Profile from "./layout/navItems/Profile";
import Bell from "./layout/navItems/Bell";
import Inbox from "./layout/navItems/Inbox";
import Search from "./layout/navItems/Search";

import {
  HelpIcon,
  LogoutIcon,
  CollapseNavIcon,
  ExpandNavIcon,
  DashboardIcon,
  UserIcon,
  GearIcon,
  PaymentIcon,
  InboxIcon,
  ContactsIcon,
  ProjectsIcon,
} from "./Icons";

const Dashboard = () => {
  const [show, setShow] = useState();
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [activeLink, setActiveLink] = useState();
  const [large, setLarge] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  const getLocation = useLocation().pathname;

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setLarge(e.matches));
    large
      ? setShowContent(true)
      : !large
      ? setShowContent(!expanded)
      : setShowContent(false);

    const links = [
      "dashboards",
      "user-profile",
      "account-settings",
      "payments",
      "inbox",
      "contacts",
      "projects",
      "onboarding",
    ];
    links.map((link) => {
      const location = getLocation.includes(link);
      return location === true ? setActiveLink(link) : false;
    });
  }, [large, expanded, getLocation]);

  const handleClick = () => {
    setExpanded(!expanded);
    expanded ? setShowContent(!expanded) : setShowContent(expanded);
  };

  const LeftNav = () => {
    return (
      <div className="overflow-y">
        <Nav
          variant="pills"
          className="flex-column pt-3"
          activeKey={activeLink}
        >
          <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/dashboards"
              eventKey="dashboards"
            >
              <DashboardIcon className="fs-4 me-2" />
              {!show ? "Dashboard" : null}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/user-profile"
              eventKey="user-profile"
            >
              <UserIcon className="fs-5 me-2" /> {!show ? "User Profile" : null}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/account-settings"
              eventKey="account-settings"
            >
              <GearIcon className="fs-5 me-2" />
              {!show ? "Account Settings" : null}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/payments"
              eventKey="payments"
            >
              <PaymentIcon className="fs-5 me-2" />
              {!show ? "Payments" : null}
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/inbox"
              eventKey="inbox"
            >
              <InboxIcon className="fs-5 me-2" />
              {!show ? "Inbox" : null}
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/contacts"
              eventKey="contacts"
            >
              <ContactsIcon className="fs-5 me-2" />
              {!show ? "Contacts" : null}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/projects"
              eventKey="projects"
            >
              <ProjectsIcon className="fs-5 me-2" />
              {!show ? "Projects" : null}
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
              onClick={(e) => (!large ? handleClick(e) : null)}
              as={Link}
              to="/onboarding"
              eventKey="onboarding"
            >
              <ProjectsIcon className="fs-5 me-2" />
              {!show ? "Onboarding" : null}
            </Nav.Link>
          </Nav.Item> */}
          <Nav variant="pills" className="flex-column pt-1">
            <Nav.Item>
              <Nav.Link
                className={`px-3 ${show ? "text-center" : null}`}
                disabled
                eventKey="help"
              >
                <HelpIcon className="fs-5 me-2" /> {!show ? "Help" : null}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`px-3 ${show ? "text-center" : null}`}
                as={Link}
                onClick={(e) => logoutHandler(e)}
                eventKey="logout"
              >
                <LogoutIcon className="fs-5 me-2" />
                {!show ? "Logout" : null}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav>
      </div>
    );
  };

  const NavItems = () => {
    return (
      <Container className="ps-0" fluid>
        <Navbar.Toggle
          aria-controls="left-nav"
          className="mx-2"
          style={{ border: "0px", outline: "none" }}
        >
          <Hamburger toggle={setExpanded} toggled={expanded} />
        </Navbar.Toggle>
        <Navbar.Collapse id="left-nav">
          <div
            className="bg-secondary"
            style={{ height: "90.9vh", overflowY: "auto" }}
          >
            <LeftNav />
          </div>
        </Navbar.Collapse>
        <Nav className="ms-auto fs-5">
          <Search />
          <Bell />
          <Profile />
        </Nav>
      </Container>
    );
  };

  return userInfo ? (
    <section>
      <Container fluid>
        <Row style={{ maxHeight: "100vh", overflowY: "hidden" }}>
          <Col
            lg={2}
            className={`left-nav ${show ? "collapse-nav" : "collapsed-nav"}`}
          >
            <div className="logo pe-auto">
              {!show ? (
                <Image src={LogoLight} alt="Artboard Logo" />
              ) : (
                <Image src={SmallLogo} alt="Artboard Logo" />
              )}
            </div>
            <LeftNav />
            <Nav variant="pills" className="flex-column pt-1">
              <Nav.Item>
                <Nav.Link
                  className="px-3 fs-5 text-center"
                  style={{ backgroundColor: "var(--bs-primary)" }}
                  eventKey="items"
                  onClick={() => setShow(!show)}
                >
                  {!show ? <CollapseNavIcon /> : <ExpandNavIcon />}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="px-0">
            <Header Nav={NavItems} />
            {showContent ? (
              <Outlet />
            ) : (
              <Container fluid className="vh-100"></Container>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};

export default Dashboard;
