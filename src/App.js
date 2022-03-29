import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Signin from './components/SignIn';
// import SignUp from './components/SignUp';
import Item from './components/Item';
import DetailsPage from './components/Details/DetailsPage';
import ReservationForm from './components/Reservation/ReservationForm';
import Reservation from './components/Reservation/Reservation';
// import DeleteItem from './components/DeleteItem';
// import AddItem from './components/AddItem';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route exact path="/" element={<Item />} />
        <Route path="/Details/:id" element={<DetailsPage />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>

    </div>
  );
}

export default App;
