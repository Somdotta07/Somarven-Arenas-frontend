/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddItemHandler, getItems } from '../../api/items';
import { getToken } from '../../utils/sessionHelper';

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onSubmit = async (e) => {
    const token = getToken();
    e.preventDefault();
    await dispatch(AddItemHandler(newItem, token));
    await dispatch(getItems(token));
    navigate('/items');
  };

  const divStyle = {
    border: '1px solid black',
    borderRadius: '10px',
    boxShadow: '1px 3px 1px #9E9E9E',
  };

  return (
    <div className="row addItem">
      <header>
        <h1 className="addHeader app-title">Add An Arena</h1>
      </header>
      <div className="d-flex p-0 flex-column justify-content-center align-items-center position-relative item-arena">
        <form onSubmit={(e) => onSubmit(e)} className="mt-5 mx-3 ">
          <input type="text" className="form-control m-1" id="name" placeholder="Enter Name" name="name" onChange={(e) => handleChange(e)} style={divStyle} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="description" placeholder="Enter Description" name="description" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="text" className="form-control m-1" id="image" placeholder="Enter Image Url" name="image" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="text" className="form-control m-1" id="city" placeholder="Enter City" name="city" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="number" className="form-control m-1" id="capacity" placeholder="Enter capacity" name="capacity" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="number" className="form-control m-1" id="price" placeholder="Enter Price" name="price" onChange={(e) => handleChange(e)} style={divStyle} />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary m-1">Submit</button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default AddItem;
