import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { getItems } from '../../api/items';
import Modal from './Modal';
import reservedItems from '../../api/reservedItems';
import 'react-datepicker/dist/react-datepicker.css';
import GlobalStyle from './globalStyles';
import './Reserve.scss';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const ReservationForm = () => {
  const items = useSelector((state) => state.items.items) || [];
  const location = useLocation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loginResponse, setLoginResponse] = useState('');
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem('token'));
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
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </div>
          <Container>
            <Button onClick={openModal}>modal</Button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyle />
          </Container>

        </section>
      </form>

    </div>
  );
};

export default ReservationForm;
