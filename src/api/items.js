import axios from 'axios';
import { fetchItems } from '../redux/items/items';
import { fetchItemsDetails, fetchReservationDates } from '../redux/items/ItemDetails';
import { addItem } from '../redux/items/AddItem';
import { deleteItemFromState } from '../redux/items/deleteItemReducer';

const BASE_URL = 'https://somarven.herokuapp.com/api/v1';

export const getItems = (token) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/items`, { headers: { Authorization: token } });
  dispatch(fetchItems(response.data.data));
};

export const getItemsDetails = (id, token) => async (dispatch) => {
  fetch(`${BASE_URL}/items/${id}`, { headers: { Authorization: token } })
    .then((response) => response.json())
    .then((res) => dispatch(fetchItemsDetails(res.data)));
};

export const getReservationDates = (id, token) => async (dispatch) => {
  fetch(`${BASE_URL}/itemreservations/${id}`, { headers: { Authorization: token } })
    .then((response) => response.json())
    .then((res) => dispatch(fetchReservationDates(res.data)));
};

export const AddItemHandler = (item, token) => async (dispatch) => {
  const newItem = { item };
  await fetch(`${BASE_URL}/items`, {
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
  await axios.delete(`${BASE_URL}/items/${id}`, { headers: { Authorization: token } })
    .then(() => ({ status: `Item#${id} Deleted successfully` }))
    .then((res) => dispatch(deleteItemFromState(res)));
  dispatch(getItems(token));
};
