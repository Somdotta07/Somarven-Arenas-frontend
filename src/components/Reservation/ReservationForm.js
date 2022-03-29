import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import reservedItems from '../../api/reservedItems';
import './Reserve.css';

const ReservationForm = () => {
  const items = useSelector((state) => state.items.items) || [];
  const location = useLocation();
  const [selectedDate, onChange] = useState(new Date());
  const [loginResponse, setLoginResponse] = useState('');

  const getItemId = () => {
    if (location.state) {
      return location.state.id;
    }
    if (items[0]) {
      return items[0].id;
    }
    return 1;
  };

  const [itemId, setItemId] = useState(getItemId());
  const user = useSelector((state) => state.usersReducer.user);

  const reserveSubmit = async (e) => {
    e.preventDefault();
    if (!user.id) {
      setLoginResponse('Please Sign in');
      return;
    }
    const response = await reservedItems({
      Start_date: selectedDate,
      End_date: selectedDate,
      user_id: user.id,
      item_id: parseInt(itemId, 10),
    });
    if (!response.error) {
      setLoginResponse('Succesfully Reserved');
    } else {
      setLoginResponse(response.error);
    }
  };

  return (
    <div className="wrapper">
      <form className="d-flex flex-column h-100 justify-content-center align-items-center " onSubmit={reserveSubmit}>
        <section>
          <span>
            {loginResponse}
          </span>
          <div className="d-flex flex-column justify-content-center text-white">
            <h2 className="text-center">Reserve an Arena</h2>
          </div>
          <div className="d-flex">
            <select className="form-select me-2 rounded-pill" onChange={(e) => setItemId(e.target.value)} value={itemId}>
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker className=" w-50 me-2 rounded-pill form-control" onChange={onChange} value={selectedDate} />
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker className=" w-50 me-2 rounded-pill form-control" onChange={onChange} value={selectedDate} />
          </div>
          <div className="d-flex w-100 justify-content-center pt-5">
            <button className="btn btn-outline-success rounded-pill" type="submit">Reserve Now</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ReservationForm;
