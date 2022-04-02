import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';
import Item from './components/Item';
import DetailsPage from './components/Details/DetailsPage';
import ReservationForm from './components/Reservation/ReservationForm';
import Reservation from './components/Reservation/Reservation';
import VerticalNav from './components/VerticalNav';
import AddItem from './components/AddItem/AddItem';
import DeleteItem from './components/DeleteItemPage/DeleteItem';
import './App.css';

function App() {
  const sessionDetails = useSelector((state) => state.sessions);
  return (
    <div className="App">
      <div className="row">
        <div className="col-2 p-0">
          <VerticalNav />
        </div>
        <div className="col-md-10 col-sm-12 ">
          <Routes>
            <Route exact path="/" element={sessionDetails.isSignIn ? (<Navigate replace to="/items" />) : <SignIn />} />
            <Route exact path="/signup" element={sessionDetails.isSignUp ? (<Navigate replace to="/" />) : <SignUp />} />
            <Route path="/items" element={<Item />} />
            <Route path="/Details/:id/:name" element={<DetailsPage />} />
            <Route path="/reserve" element={<ReservationForm />} />
            <Route path="/DeleteItem" element={<DeleteItem />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/" element={sessionDetails.isSignIn || <SignIn />} />
            <Route path="/AddItem" element={<AddItem />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
