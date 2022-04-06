import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { getItems, getReservationDates } from '../../api/items';
import reservedItems from '../../api/reservedItems';
import 'react-datepicker/dist/react-datepicker.css';
import './Reserve.scss';
import { getToken } from '../../utils/sessionHelper';


const ReservationForm = () => {
  const items = useSelector((state) => state.items.items) || [];
  const location = useLocation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loginResponse, setLoginResponse] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getToken();

  const reservedDates = useSelector((state) => state.itemsDetailsReducer.dates);
  const tope = [];
  reservedDates.forEach((date) => {
    const startDate = date.start_date.split('-');
    const endDate = date.end_date.split('-');
    let startMonth = parseInt(startDate[1], 10) - 1;
    startMonth = String(startMonth);
    let endMonth = parseInt(endDate[1], 10) - 1;
    endMonth = String(endMonth);
    tope.push({
      start: new Date(startDate[0],
        startMonth,
        startDate[2]),
      end: new Date(endDate[0],
        endMonth, endDate[2]),
    });
  });

  useEffect(() => {
    dispatch(getItems(token));
  }, []);

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
    const response = await reservedItems({
      start_date: startDate,
      end_date: endDate,
      user_id: user.id,
      id: parseInt(itemId, 10),
    });
    if (!response.error) {
      setLoginResponse('Succesfully Reserved');
    } else {
      setLoginResponse(response.error);
    }
    dispatch(getReservationDates(itemId, token));
    navigate('/reservations');
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
            <select className="form-select me-2 rounded-pill" onChange={(e) => { setItemId(e.target.value); dispatch(getReservationDates(e.target.value, token)); }} value={itemId}>
              <option default>Select an Arena</option>
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} excludeDateIntervals={tope} placeholderText="Select a Start Date" />
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} excludeDateIntervals={tope} placeholderText="Select an End Date" />
          </div>
          <div className="d-flex w-100 justify-content-center pt-5">
            <button className="btn btn-outline-success rounded-pill" type="submit">Reserve</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ReservationForm;
