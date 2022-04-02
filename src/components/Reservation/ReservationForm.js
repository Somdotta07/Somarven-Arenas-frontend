import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getItems } from '../../api/items';
import Modal from './Modal';
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
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem('token'));
  useEffect(() => {
    dispatch(getItems(token));
  }, []);

  return (
    <div className="wrapper">

      <Container>
        <Button onClick={openModal}>Check here for beautiful Arenas</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>

    </div>
  );
};

export default ReservationForm;
