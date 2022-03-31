import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handleSignOut } from '../redux/signin/login';

function NavBar() {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(handleSignOut());
  };
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-target="#responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Sign in</Nav.Link>
              <Nav.Link href="/signup">Sign up</Nav.Link>
              <Nav.Link href="/items">Items</Nav.Link>
              <Nav.Link href="/details">Details</Nav.Link>
              <Nav.Link href="/reserve">Reserve</Nav.Link>
              <Nav.Link href="/reservations">MyReservations</Nav.Link>
              <Nav.Link href="/deleteitem">DeleteItem</Nav.Link>
              <Nav.Link href="/additem">AddItem</Nav.Link>
              <Nav.Link href="/" onClick={() => signOut()}>Sign Out</Nav.Link>
              {/* <button type="submit" onClick={() => signOut()}>Sign Out</button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
