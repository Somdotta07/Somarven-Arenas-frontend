import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';
import Item from './components/Item';
import DetailsPage from './components/Details/DetailsPage';
import ReservationForm from './components/Reservation/ReservationForm';
import Reservation from './components/Reservation/Reservation';
import AddItem from './components/AddItem/AddItem';
import DeleteItem from './components/DeleteItemPage/DeleteItem';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const sessionDetails = useSelector((state) => state.sessions);

  return (
    <div className="App">
      <div className="row">
        <NavBar />
        <div className="col-md-12 col-sm-12">
          <Routes>
            <Route path="/" element={sessionDetails.isSignIn ? <Item /> : <SignIn />} />
            <Route exact path="/sign_in" element={sessionDetails.isSignIn ? <Item /> : <SignIn />} />
            <Route exact path="/signup" element={sessionDetails.isSignUp ? <Item /> : <SignUp />} />
            <Route path="/items" element={sessionDetails.isSignIn ? <Item /> : <SignIn />} />
            <Route path="/details/:id/:name" element={sessionDetails.isSignIn ? <DetailsPage /> : <SignIn />} />
            <Route path="/reserve" element={sessionDetails.isSignIn ? <ReservationForm /> : <SignIn />} />
            <Route path="/addItem" element={sessionDetails.isSignIn ? <AddItem /> : <SignIn />} />
            <Route path="/delete-item" element={sessionDetails.isSignIn ? <DeleteItem /> : <SignIn />} />
            <Route path="/reservations" element={sessionDetails.isSignIn ? <Reservation /> : <SignIn />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
