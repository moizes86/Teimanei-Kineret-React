import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./navbar.styles.scss";
import { Link } from "react-router-dom";

function NavbarMain() {
  const [expanded, setExpanded] = useState(false);
    return (
      <Navbar expand='md' expanded={expanded}>
        <div className="container text-center">
          <Navbar.Brand>
            <Link to="/" onClick={() => setExpanded(false)}>ראשי</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} >
          <div className="hamburgerIcon "></div>
          <div className="hamburgerIcon"></div>
          <div className="hamburgerIcon"></div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to="/history" onClick={() => setExpanded(false)}>היסטוריה</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/settlers-names" onClick={() => setExpanded(false)}>
                  שמות המתיישבים
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/photos" onClick={() => setExpanded(false)}>
                  תמונות
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/articles" onClick={() => setExpanded(false)}>
                  מאמרים
                </Link>
              </Nav.Item>
              <Nav.Item id="last-item">
                <Link to="/links" onClick={() => setExpanded(false)}>
                  קישורים
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }

export default NavbarMain;
