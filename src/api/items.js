import axios from 'axios';
import { fetchItems } from '../redux/items/items';
import { fetchItemsDetails } from '../redux/items/ItemDetails';
import { deleteItemFromState } from '../redux/items/deleteItemReducer';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/items';

export const getItems = (token) => async (dispatch) => {
  const response = await axios.get(BASE_URL, { headers: { Authorization: token } });
  dispatch(fetchItems(response.data.data));
};

export const getItemsDetails = (id, token) => async (dispatch) => {
  fetch(`http://127.0.0.1:3000/api/v1/items/${id} `, { headers: { Authorization: token } })
    .then((response) => response.json())
    .then((res) => dispatch(fetchItemsDetails(res.data)));
};

export const deleteItemFromAPI = (id) => async (dispatch) => {
  await axios.delete(`${BASE_URL}/${id}`)
    .then(() => ({ status: `Item#${id} Deleted successfully` }))
    .then((res) => dispatch(deleteItemFromState(res)));
};
