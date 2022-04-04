/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddItemHandler } from '../../api/items';

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token'));

  const [newItem, setNewItem] = useState({
    name: '',
    capacity: '',
    description: '',
    price: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(AddItemHandler(newItem, token));
    navigate('/items');
  };

  return (
    <div className="row addItem">
      <div className="p-0 d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={(e) => onSubmit(e)} className="mt-5 mx-3">
          <input type="text" className="form-control m-1" id="name" placeholder="Enter Name" name="name" onChange={(e) => handleChange(e)} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="description" placeholder="Enter Description" name="description" onChange={(e) => handleChange(e)} />
          <input type="text" className="form-control m-1" id="image" placeholder="Enter Image Url" name="image" onChange={(e) => handleChange(e)} />
          <input type="text" className="form-control m-1" id="city" placeholder="Enter City" name="city" onChange={(e) => handleChange(e)} />
          <input type="number" className="form-control m-1" id="capacity" placeholder="Enter capacity" name="capacity" onChange={(e) => handleChange(e)} />
          <input type="number" className="form-control m-1" id="price" placeholder="Enter Price" name="price" onChange={(e) => handleChange(e)} />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary m-1">Submit</button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default AddItem;