import axios from 'axios';
import getReserved from './reserved';
import { deleteReserved } from '../redux/reservations/deleteReserved';

const BASE_URL = 'http://127.0.0.1:3000/';

const deleteReserve = (id, token) => async (dispatch) => {
  await axios.delete(`${BASE_URL}/api/v1/reservations/${id}/`, { headers: { Authorization: token } })
    .then(() => ({ status: 'Delete successful' }))
    .then((res) => dispatch(deleteReserved(res)));
  dispatch(getReserved(token));
};

export default deleteReserve;
