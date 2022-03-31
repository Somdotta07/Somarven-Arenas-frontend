import './App.css';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Sessions/SignIn';
import SignUp from './components/Sessions/SignUp';
import Item from './components/Item';
import DetailsPage from './components/Details/DetailsPage';
import ReservationForm from './components/Reservation/ReservationForm';
import Reservation from './components/Reservation/Reservation';
import NavBar from './components/NavBar';

function App() {
  const sessionDetails = useSelector((state) => state.sessions);

  return (
    <div className="App sessions">

      <NavBar />
      <Routes>
        <Route exact path="/" element={sessionDetails.isSignIn ? (<Navigate replace to="/items" />) : <SignIn />} />
        <Route exact path="/signup" element={sessionDetails.isSignUp ? (<Navigate replace to="/" />) : <SignUp />} />
        <Route exact path="/items" element={<Item />} />
        <Route path="/Details/:id" element={<DetailsPage />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/delete-item" element={<DeleteItem />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/" element={sessionDetails.isSignIn || <SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
