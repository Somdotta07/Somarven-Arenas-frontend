import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-target="#responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/sign in">Sign in</Nav.Link>
              <Nav.Link href="/signup">Sign up</Nav.Link>
              <Nav.Link href="/">Items</Nav.Link>
              <Nav.Link href="/details">Details</Nav.Link>
              <Nav.Link href="/reserve">Reserve</Nav.Link>
              <Nav.Link href="/reservations">MyReservations</Nav.Link>
              <Nav.Link href="/deleteitem">DeleteItem</Nav.Link>
              <Nav.Link href="/additem">AddItem</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
