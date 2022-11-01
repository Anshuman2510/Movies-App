import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
function NavBarComp() {
  return (
  
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className='space full-width'>
      <Container >
        <Navbar.Brand className='text-size'>IMDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBarComp