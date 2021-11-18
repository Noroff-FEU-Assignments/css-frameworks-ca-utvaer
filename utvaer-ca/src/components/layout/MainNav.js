import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function MainNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="navbar-nav__item">
              Home
            </NavLink>
            <NavLink to="/news" className="navbar-nav__item">
              News
            </NavLink>
            <NavLink to="/contact" className="navbar-nav__item">
              Contact
            </NavLink>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 navbar__search"
              aria-label="Search"
            />
            <Button variant="search">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
