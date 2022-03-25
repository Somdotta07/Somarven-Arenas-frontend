import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Signin from './components/SignIn';
// import SignUp from './components/SignUp';
// import Items from './components/Items';
// import Details from './components/Details';
// import Reservation from './components/Reservation';
// import MyReservations from './components/MyReservations';
// import DeleteItem from './components/DeleteItem';
// import AddItem from './components/AddItem';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/sign in">Sign in</Nav.Link>
                <Nav.Link href="/signup">Sign up</Nav.Link>
                <Nav.Link href="/items">Items</Nav.Link>
                <Nav.Link href="/details">Details</Nav.Link>
                <Nav.Link href="/reservation">Reservation</Nav.Link>
                <Nav.Link href="/myreservations">MyReservations</Nav.Link>
                <Nav.Link href="/deleteitem">DeleteItem</Nav.Link>
                <Nav.Link href="/additem">AddItem</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Toggle>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
