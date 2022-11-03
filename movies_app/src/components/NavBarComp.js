import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
function NavBarComp() {
  return (
  
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className='space'>
      <Container >
        <Navbar.Brand className='text-size'>IMDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer  to="/home">
               <Nav.Link>Home</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBarComp