import axios from 'axios';
import getReserved from './reserved';
import { deleteReserved } from '../redux/reservations/deleteReserved';

const BASE_URL = 'https://somarven.herokuapp.com';

const deleteReserve = (id, token) => async (dispatch) => {
  await axios.delete(`${BASE_URL}/api/v1/reservations/${id}/`, { headers: { Authorization: token } })
    .then(() => ({ status: 'Delete successful' }))
    .then((res) => dispatch(deleteReserved(res)));
  dispatch(getReserved(token));
};

export default deleteReserve;
