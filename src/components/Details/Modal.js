import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import reservedItems from '../../api/reservedItems';
import 'react-datepicker/dist/react-datepicker.css';
import './Details.css';
import { controlModal } from '../../redux/items/ItemDetails';

const Modal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loginResponse, setLoginResponse] = useState('');
  const { id, name } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.usersReducer.user);
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

  const reserveSubmit = async (e) => {
    e.preventDefault();
    const response = await reservedItems({
      start_date: startDate,
      end_date: endDate,
      user_id: user.id,
      id: parseInt(id, 10),
    });
    if (!response.error) {
      setLoginResponse('Succesfully Reserved');
    } else {
      setLoginResponse(response.error);
    }
  };
  // const closeModal = () => {
  //   dispatch(toggleModal);
  // };

  return (
    <div className="wrapper sodal">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => dispatch(controlModal(false))}>
        <span>&times;</span>
      </button>
      <form className="d-flex flex-column h-100 justify-content-center align-items-center " onSubmit={reserveSubmit}>
        <section>
          <span>
            {loginResponse}
          </span>
          <div className="d-flex flex-column justify-content-center text-white">
            <h2 className="text-center">Reserve an Arena</h2>
          </div>
          <div className="d-flex">
            <select className="form-select me-2 rounded-pill" onChange={(e) => (e.target.value)} value={id}>
              <option value={id}>
                {name}
              </option>

            </select>
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy/dd/MM"
              excludeDateIntervals={tope}
            />
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker
              selected={endDate}
              dateFormat="yyyy/dd/MM"
              onChange={(date) => setEndDate(date)}
              excludeDateIntervals={tope}
            />
          </div>
          <div className="d-flex w-100 justify-content-center pt-5">
            <button className="btn btn-outline-success rounded-pill" type="submit">Reserve</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Modal;
