import axios from 'axios';
import { fetchReservations } from '../redux/reservations/reservation';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/reservations';

const getReserved = () => async (dispatch) => {
  const response = await axios.get(BASE_URL);
  dispatch(fetchReservations(response.data));
};

export default getReserved;
