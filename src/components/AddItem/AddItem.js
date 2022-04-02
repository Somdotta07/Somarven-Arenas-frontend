/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddItemHandler, getItems } from '../../api/items';

const AddItem = () => {
  const dispatch = useDispatch();
  const [isItemAdded, setIsItemAdded] = useState(null);
  const [errorReponse, setErrorReponse] = useState(null);

  const {
    register, handleSubmit, reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = dispatch(AddItemHandler(data));
    if (response.status === 201) {
      setIsItemAdded(true);
      reset();
      dispatch(getItems);
    } else {
      setErrorReponse(JSON.stringify(response.data));
    }
  };

  return (
    <div className="row addItem">
      <div className="p-0 d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mx-3">
          <input type="text" className="form-control m-1" id="name" placeholder="Enter Name" {...register('name')} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="description" placeholder="Enter Description" {...register('description')} />
          <input type="text" className="form-control m-1" id="image" placeholder="Enter Image Url" {...register('image')} />
          <input type="number" className="form-control m-1" id="capacity" placeholder="Enter Capacity" {...register('capacity')} />
          <input type="number" className="form-control m-1" id="price" placeholder="Enter Price" {...register('price')} />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary m-1">Submit</button>
          </div>
          {
            isItemAdded && (
              <div className="alert alert-success mt-3 ms-1" role="alert">
                New Areana Added Successfully
              </div>
            )
          }

          {
            errorReponse && (
              <div className="alert alert-danger mt-3 ms-1" role="alert">
                {errorReponse}
              </div>
            )
          }
        </form>

      </div>

    </div>
  );
};

export default AddItem;
