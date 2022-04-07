import axios from 'axios';
import { getToken } from '../utils/sessionHelper';

const BASE_URL = 'https://somarven.herokuapp.com/api/v1';

const reservedItems = async (data) => {
  const token = getToken();
  try {
    const response = await axios.post(`${BASE_URL}/reservations`, data, { headers: { Authorization: token } });
    return { status: response.status, item: response.data.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default reservedItems;
