import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signin from './components/SignIn';
import SignUp from './components/SignUp';
import Item from './components/Item';
import Details from './components/Details';
import Reservation from './components/Reservation';
import MyReservations from './components/MyReservations';
import DeleteItem from './components/DeleteItem';
import AddItem from './components/AddItem';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Item />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/deleteitem" element={<DeleteItem />} />
      </Routes>

    </div>
  );
}

export default App;
