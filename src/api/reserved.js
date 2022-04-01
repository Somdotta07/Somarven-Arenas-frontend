import axios from 'axios';
import { fetchReservations } from '../redux/reservations/reservation';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/reservations';

const token = JSON.parse(localStorage.getItem('token'));

const getReserved = () => async (dispatch) => {
  const response = await axios.get(BASE_URL, { headers: { Authorization: token } });
  dispatch(fetchReservations(response.data.data));
};

export default getReserved;
