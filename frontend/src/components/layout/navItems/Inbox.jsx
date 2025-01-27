import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";

import { NavInboxIcon } from "../../Icons";

const Inbox = () => {
  return (
    <Dropdown as={Nav.Item} drop>
      <Dropdown.Toggle as={Nav.Link} href="" className="px-2">
        <NavInboxIcon />
      </Dropdown.Toggle>
      <Dropdown.Menu className="inbox-menu">
        <Dropdown.Item>Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Inbox;
