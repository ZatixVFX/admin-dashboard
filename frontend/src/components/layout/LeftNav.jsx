import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Icons
import {
  DashboardIcon,
  UserIcon,
  GearIcon,
  PaymentIcon,
  InboxIcon,
  ContactsIcon,
  ProjectsIcon,
  OnBoardingIcon,
  LogoutIcon,
  CollapseNavIcon,
  ExpandNavIcon,
  BellIcon,
  NavInboxIcon,
  SearchIcon,
  ProfileIcon,
  SupportIcon,
  SwitchAccIcon,
} from "../Icons";

const LeftNav = ({ show }) => {
  const [activeLink, setActiveLink] = useState();

  const getLocation = useLocation().pathname;

  useEffect(() => {
    const links = ["dashboards", "user-profile", "account-settings"];
    links.map((link) => {
      const location = getLocation.includes(link);
      return location === true ? setActiveLink(link) : false;
    });
  }, [getLocation]);

  return (
    <>
      <div className="overflow-y">
        <Nav
          variant="pills"
          className="flex-column pt-3"
          activeKey={activeLink}
        >
          <Nav.Item>
            <Nav.Link
              className={`px-3 ${show ? "text-center" : null}`}
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
              as={Link}
              to="/account-settings"
              eventKey="account-settings"
            >
              <GearIcon className="fs-5 me-2" />
              {!show ? "Account Settings" : null}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default LeftNav;
