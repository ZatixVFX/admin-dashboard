import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LeftNav from "./LeftNav";

import LogoLight from "../../assets/ArtboardLight.svg";

const Header = ({ Nav }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="px-0">
            <Navbar
              expand="lg"
              collapseOnSelect
              className="border-bottom pb-2 "
            >
              <Nav />
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Header.propTypes = {
  Nav: PropTypes.func.isRequired,
};

export default Header;
