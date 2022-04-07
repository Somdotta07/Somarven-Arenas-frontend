import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Item from './components/Items';
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';
import AddItem from './components/AddItem/AddItem';
import DetailsPage from './components/Details/DetailsPage';
import Reservation from './components/Reservation/Reservation';
import DeleteItem from './components/DeleteItemPage/DeleteItem';
import ReservationForm from './components/Reservation/ReservationForm';

function App() {
  const sessionDetails = useSelector((state) => state.sessions);

  return (
    <div id="App" className="text-center">
      <NavBar />
      <Container fluid className="p-0">
        <Row className="p-0 m-0">
          {sessionDetails.isSignIn ? (
            <Col lg={3} className="p-0">
              <SideNav />
            </Col>
          ) : ''}
          <Col lg={9} className="p-0">
            <Routes>
              <Route path="/" element={sessionDetails.isSignIn ? (<Navigate replace to="/items" />) : <SignIn />} />
              <Route path="/items" element={sessionDetails.isSignIn ? <Item /> : (<Navigate replace to="/sign_in" />)} />
              <Route path="/addItem" element={sessionDetails.isSignIn ? <AddItem /> : (<Navigate replace to="/sign_in" />)} />
              <Route exact path="/sign_in" element={sessionDetails.isSignIn ? (<Navigate replace to="/items" />) : <SignIn />} />
              <Route exact path="/signup" element={sessionDetails.isSignUp ? (<Navigate replace to="/sign_in" />) : <SignUp />} />
              <Route path="/delete-item" element={sessionDetails.isSignIn ? <DeleteItem /> : (<Navigate replace to="/sign_in" />)} />
              <Route path="/reserve" element={sessionDetails.isSignIn ? <ReservationForm /> : (<Navigate replace to="/sign_in" />)} />
              <Route path="/reservations" element={sessionDetails.isSignIn ? <Reservation /> : (<Navigate replace to="/sign_in" />)} />
              <Route path="/details/:id/:name" element={sessionDetails.isSignIn ? <DetailsPage /> : (<Navigate replace to="/sign_in" />)} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
