import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/header/header.css";

const Header = () => {
  return (
    <Navbar className='nav-color' variant='dark' sticky='top'>
      <NavbarBrand to='/homepage'>Jon Klinger</NavbarBrand>
      <Nav>
        <Nav.Item>
          <LinkContainer to='/homepage'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='./components/browsergame'>
            <Nav.Link>Browser Game</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
