import axios from 'axios';
import { fetchReservations } from '../redux/reservations/reservation';
import { getToken } from '../utils/sessionHelper';

const BASE_URL = 'https://somarven.herokuapp.com/api/v1';

const getReserved = () => async (dispatch) => {
  const token = getToken();
  const response = await axios.get(`${BASE_URL}/reservations`, { headers: { Authorization: token } });
  dispatch(fetchReservations(response.data.data));
};

export default getReserved;
