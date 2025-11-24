// src/components/navbar/Navbar.jsx
import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // optional, if you want custom styles

const Navbar = () => {
  return (
    <BSNavbar bg="white" expand="lg" className="py-3 px-5">
      <Container>
        {/* Brand / Logo */}
        <BSNavbar.Brand href="/">Shoppee</BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="main-navbar" />
        <BSNavbar.Collapse id="main-navbar">
          <Nav className="mx-auto fw-medium gap-4 option-list">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
            <Nav.Link href="#">SHOP</Nav.Link>
            <Nav.Link href="#">CATALOGUE</Nav.Link>
            <Nav.Link href="#">NEW ARRIVAL</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
