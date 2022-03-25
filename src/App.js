import './App.css';
import NavBar from './components/NavBar';
import Signin from './components/SignIn';
import SignUp from './components/SignUp';
import Items from './components/Items';
import Details from './components/Details';
import Reservation from './components/Reservation';
import MyReservations from './components/MyReservations';
import DeleteItem from './components/DeleteItem';
import AddItem from './components/AddItem';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Signin />
      <SignUp />
      <Items />
      <Details />
      <Reservation />
      <MyReservations />
      <DeleteItem />
      <AddItem />
    </div>
  );
}

export default App;
