import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { SearchIcon } from "../../Icons";

const Search = () => {
  const [OnSearch, setSearch] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 576px)").matches
  );

  const Ref = useRef();

  const handleClickOutside = (e) => {
    if (Ref.current && !Ref.current.contains(e.target)) {
      setSearch(false);
    }
  };

  const handleClickInside = (sm) => {
    setSearch(false);
    setSearch(sm);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.matchMedia("(min-width: 576px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <Dropdown
      as={Nav.Item}
      drop
      show={!OnSearch && !matches ? OnSearch : !matches}
    >
      {matches ? (
        <>
          {!OnSearch ? (
            <Dropdown.Toggle
              as={Nav.Link}
              href=""
              onClick={handleClickInside}
              className="pe-2 px-lg-3"
            >
              <SearchIcon />
            </Dropdown.Toggle>
          ) : (
            <Nav.Link as="div" ref={Ref} style={{ width: "250px" }}>
              <Form>
                <Form.Group
                  className="d-flex justify-content-end"
                  style={{ position: "relative" }}
                  controlId="Search"
                >
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Search..."
                    style={{ height: "34px" }}
                  />
                  <Link
                    to=""
                    className="pe-2"
                    style={{
                      position: "absolute",
                      color: "var(--bs-nav-link-color)",
                    }}
                  >
                    <SearchIcon />
                  </Link>
                </Form.Group>
              </Form>
            </Nav.Link>
          )}
        </>
      ) : (
        <>
          <Dropdown.Toggle
            as={Nav.Link}
            href=""
            onClick={() => handleClickInside(!OnSearch)}
            className="pe-2 px-lg-3"
          >
            <SearchIcon />
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ border: "0px", borderRadius: "0px" }}
            ref={Ref}
          >
            <Nav.Link as="div" className="mx-2">
              <Form>
                <Form.Group
                  className="d-flex justify-content-end"
                  style={{ position: "relative" }}
                  controlId="Search"
                >
                  <Form.Control
                    type="text"
                    size="md"
                    placeholder="Search..."
                    style={{ height: "40px" }}
                  />
                  <Link
                    to=""
                    className="py-1 pe-2 fs-5"
                    style={{
                      position: "absolute",
                      color: "var(--bs-nav-link-color)",
                    }}
                  >
                    <SearchIcon />
                  </Link>
                </Form.Group>
              </Form>
            </Nav.Link>
          </Dropdown.Menu>
        </>
      )}
    </Dropdown>
  );
};

export default Search;
