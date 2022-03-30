import './App.css';
import { Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Signin from './components/SignIn';
// import SignUp from './components/SignUp';
import Item from './components/Item';
import DetailsPage from './components/Details/DetailsPage';
import ReservationForm from './components/Reservation/ReservationForm';
import Reservation from './components/Reservation/Reservation';
import VerticalNav from './components/VerticalNav';
import AddItem from './components/AddItem/AddItem';
// import DeleteItem from './components/DeleteItem';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
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
    </div>
  );
}

export default App;
