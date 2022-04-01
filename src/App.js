import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
// import Signin from './components/SignIn';
// import SignUp from './components/SignUp';

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
import { getItems } from './api/items';
// import DeleteItem from './components/DeleteItem';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems);
  }, []);

import NavBar from './components/NavBar';

function App() {
  const sessionDetails = useSelector((state) => state.sessions);


  return (
    <div className="App sessions">

      <NavBar />

      <div className="row">
        <div className="col-2 p-0">
          <VerticalNav />
        </div>
        <div className="col-md-10 col-sm-12 ">
          <Routes>
            <Route exact path="/" element={<Item />} />
            <Route path="/Details/:id" element={<DetailsPage />} />
            <Route path="/reserve" element={<ReservationForm />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/AddItem" element={<AddItem />} />
          </Routes>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={sessionDetails.isSignIn ? (<Navigate replace to="/items" />) : <SignIn />} />
        <Route exact path="/signup" element={sessionDetails.isSignUp ? (<Navigate replace to="/" />) : <SignUp />} />
        <Route exact path="/items" element={<Item />} />
        <Route path="/Details/:id" element={<DetailsPage />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/" element={sessionDetails.isSignIn || <SignIn />} />
      </Routes>

    </div>
  );
}

export default App;
