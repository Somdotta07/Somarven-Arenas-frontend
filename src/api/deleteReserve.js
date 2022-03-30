import axios from 'axios';
import { deleteReserved } from '../redux/reservations/deleteReserved';

const BASE_URL = 'http://127.0.0.1:3000/';

const deleteReserve = (id) => async (dispatch) => {
  await axios.delete(`${BASE_URL}/api/v1/reservations/${id}/`)
    .then(() => ({ status: 'Delete successful' }))
    .then((res) => dispatch(deleteReserved(res)));
};

export default deleteReserve;
