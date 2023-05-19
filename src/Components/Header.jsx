import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
  return (
    <>
      <Navbar className="bg-primary opacity-75" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-between w-100">
                  <Link to={'/home'} className="text-white fs-4 text-decoration-none">Home</Link>
                  <Link to={'/cart'} className="text-white fs-4 text-decoration-none"><FaShoppingCart className="me-2" />Cart</Link>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
