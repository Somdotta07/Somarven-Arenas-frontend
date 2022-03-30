import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/';

const reservedItems = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/reservations`, data);
    return { status: response.status, item: response.data.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default reservedItems;
