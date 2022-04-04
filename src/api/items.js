import axios from 'axios';
import { fetchItems } from '../redux/items/items';
import { fetchItemsDetails, fetchReservationDates } from '../redux/items/ItemDetails';
import { addItem } from '../redux/items/AddItem';
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

export const getReservationDates = (id, token) => async (dispatch) => {
  fetch(`http://127.0.0.1:3000/api/v1/itemreservations/${id} `, { headers: { Authorization: token } })
    .then((response) => response.json())
    .then((res) => dispatch(fetchReservationDates(res.data)));
};

export const AddItemHandler = (item, token) => async (dispatch) => {
  const newItem = { item };
  console.log(newItem);
  await fetch('http://localhost:3000/api/v1/items', {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((resResponse) => dispatch(addItem(resResponse)));
};

export const deleteItemFromAPI = (id, token) => async (dispatch) => {
  await axios.delete(`${BASE_URL}/${id}`, { headers: { Authorization: token } })
    .then(() => ({ status: `Item#${id} Deleted successfully` }))
    .then((res) => dispatch(deleteItemFromState(res)));
  dispatch(getItems(token));
};
