import axios from 'axios';
import { fetchItems } from '../redux/items/items';
import { fetchItemsDetails } from '../redux/items/ItemDetails';
import { addItem } from '../redux/items/AddItem';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/items';

export const getItems = async (dispatch) => {
  const response = await axios.get(BASE_URL);
  dispatch(fetchItems(response.data.data));
};

export const getItemsDetails = (id) => async (dispatch) => {
  fetch(`http://127.0.0.1:3000/api/v1/items/${id} `)
    .then((response) => response.json())
    .then((res) => dispatch(fetchItemsDetails(res.data)));
};

export const AddItemHandler = (data) => async (dispatch) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('image', data.image);
  formData.append('description', data.description);
  formData.append('city', data.city);
  formData.append('capacity', data.capacity);
  formData.append('price', data.price);
  await fetch('http://localhost:3000/api/v1/items', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((resResponse) => dispatch(addItem(resResponse)));
};
