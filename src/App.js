import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';
import Item from './components/Item';
import DetailsPage from './components/Details/DetailsPage';
import ReservationForm from './components/Reservation/ReservationForm';
import Reservation from './components/Reservation/Reservation';
import AddItem from './components/AddItem/AddItem';
import DeleteItem from './components/DeleteItemPage/DeleteItem';
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import './App.css';

function App() {
  const sessionDetails = useSelector((state) => state.sessions);

  return (
    <div className="App text-center">
      <div className="row">
        <NavBar />
        { sessionDetails.isSignIn && (
        <div className="col-2 p-0">
          <SideNav />
        </div>
        ) }
        <div className="col-md-10 col-sm-12">
          <Routes>
            <Route path="/" element={sessionDetails.isSignIn ? (<Navigate replace to="/items" />) : <SignIn />} />
            <Route exact path="/sign_in" element={sessionDetails.isSignIn ? (<Navigate replace to="/items" />) : <SignIn />} />
            <Route exact path="/signup" element={sessionDetails.isSignUp ? (<Navigate replace to="/sign_in" />) : <SignUp />} />
            <Route path="/items" element={sessionDetails.isSignIn ? <Item /> : (<Navigate replace to="/sign_in" />)} />
            <Route path="/details/:id/:name" element={sessionDetails.isSignIn ? <DetailsPage /> : (<Navigate replace to="/sign_in" />)} />
            <Route path="/reserve" element={sessionDetails.isSignIn ? <ReservationForm /> : (<Navigate replace to="/sign_in" />)} />
            <Route path="/addItem" element={sessionDetails.isSignIn ? <AddItem /> : (<Navigate replace to="/sign_in" />)} />
            <Route path="/delete-item" element={sessionDetails.isSignIn ? <DeleteItem /> : (<Navigate replace to="/sign_in" />)} />
            <Route path="/reservations" element={sessionDetails.isSignIn ? <Reservation /> : (<Navigate replace to="/sign_in" />)} />
          </Routes>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
