import axios from 'axios';
import { fetchReservations } from '../redux/reservations/reservation';
import { getToken } from '../utils/sessionHelper';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/reservations';

const getReserved = () => async (dispatch) => {
  const token = getToken();
  const response = await axios.get(BASE_URL, { headers: { Authorization: token } });
  dispatch(fetchReservations(response.data.data));
};

export default getReserved;
