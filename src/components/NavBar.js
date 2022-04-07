import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleSignOut } from '../redux/signin/login';
import logo from '../logo.png';

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessions = useSelector((state) => state.sessions);

  const signOut = () => {
    dispatch(handleSignOut()).then(() => {
      navigate('/sign_in');
    });
  };

  return (
    <Navbar collapseOnSelect fixed="top" expand="md" bg="light" variant="light" className="d-block d-lg-none">
      <Container className="d-flex">
        <Navbar.Brand href="/items" className="d-flex align-items-center">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          {' '}
          Somarven
        </Navbar.Brand>
        {sessions.isSignIn
          ? (
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-target="#responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="d-flex align-items-center text-center">
                  <Nav.Link href="/items">ALL ARENAS</Nav.Link>
                  <hr />
                  <Nav.Link href="/reserve">RESERVE</Nav.Link>
                  <Nav.Link href="/reservations">MY RESERVATIONS</Nav.Link>
                  <hr />
                  <Nav.Link href="/additem">ADD ARENA</Nav.Link>
                  <Nav.Link href="/delete-item">DELETE ARENA</Nav.Link>
                  <hr />
                  <Nav.Link>
                    <Button onClick={() => signOut()} variant="dark">Sign Out</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          ) : ''}
      </Container>
    </Navbar>
  );
}

export default NavBar;
