import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./navbar.styles.scss";
import { Link } from "react-router-dom";

function NavbarMain() {
    return (
      <Navbar expand="md">
        <div className="container text-center">
          <Navbar.Brand>
            <Link to="/">ראשי</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to="/history">היסטוריה</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/settlers-names">
                  שמות המתיישבים
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/photos">
                  תמונות
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/articles">
                  מאמרים
                </Link>
              </Nav.Item>
              <Nav.Item id="last-item">
                <Link to="/links">
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
