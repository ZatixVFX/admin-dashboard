import { useRef, useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./bootstrap.min.css";

import { useLogoutMutation } from "./slices/usersApiSlice";
import { logout } from "./slices/authSlice";

import LogoLight from "./assets/ArtboardLight.svg";
import SmallLogo from "./assets/ArtboardSM.svg";

import Header from "./components/layout/Header";
import Login from "./components/Login";

// NavItems
import Profile from "./components/layout/navItems/Profile";
import Bell from "./components/layout/navItems/Bell";
import Inbox from "./components/layout/navItems/Inbox";
import Search from "./components/layout/navItems/Search";

import {
  HelpIcon,
  LogoutIcon,
  CollapseNavIcon,
  ExpandNavIcon,
  DashboardIcon,
  UserIcon,
  GearIcon,
} from "./components/Icons";

function App() {
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

  const logoutHandler = async () => {
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

    const links = ["dashboards", "user-profile", "account-settings"];
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
                onClick={logoutHandler}
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
          onClick={(e) => handleClick(e)}
          className="mx-2"
        />
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
    <Outlet />
  );
}

export default App;
