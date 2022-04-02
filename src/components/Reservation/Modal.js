/* eslint-disable react/prop-types */
import React, {
  useRef, useEffect, useCallback, useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { getItems } from '../../api/items';
import reservedItems from '../../api/reservedItems';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin-top: 7%;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  margin-right: 5%;
`;

const Modal = ({ showModal, setShowModal }) => {
  const items = useSelector((state) => state.items.items) || [];
  const [loginResponse, setLoginResponse] = useState('');
  const modalRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();

  const token = JSON.parse(localStorage.getItem('token'));
  useEffect(() => {
    dispatch(getItems(token));
  }, []);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
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
    if (endDate < new Date() || startDate === new Date()) {
      setLoginResponse('Please enter a correct date');
    } else {
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
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal],
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress],
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
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
                    <div className="d-flex w-100 justify-content-center pt-5">
                      <button className="btn btn-outline-success rounded-pill" type="submit">Reserve</button>
                    </div>
                  </section>
                </form>

              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
