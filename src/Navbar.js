import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import logonew from './assets/logo_newCopy1.png';

const NavBar = () => {
  return (
    <Navbar expand="lg" collapseOnSelect bg="danger" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={logonew}
          alt="Restaurant Logo"
          width="200"
          height="70"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navy">
          <Nav.Link className="nav-link-spacing" href="#header">Home</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#about">About</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#menu">Main Menu</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#menuitem">Veg Appitizer</Nav.Link>
          <Nav.Link className="nav-link-spacing" href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
