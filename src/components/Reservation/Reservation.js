/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Reserve.scss';
import getReserved from '../../api/reserved';
import deleteReserve from '../../api/deleteReserve';
import SideNav from '../SideNav';

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations.reservations) || [];
  const [width, setWidth] = useState(window.innerWidth);
  const fixDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', fixDimensions);
    return () => window.removeEventListener('resize', fixDimensions);
  }, [reservations]);
  const dispatch = useDispatch();
  const daysNum = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
    if (diffDays === 0) {
      return 1;
    }
    return diffDays;
  };

  const sessionDetails = useSelector((state) => state.sessions);

  const token = sessionDetails.user_token || JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    dispatch(getReserved(token));
  }, []);

  const cancelReservation = (id) => {
    dispatch(deleteReserve(id, token));
  };

  return (
    <div className="row">
      <div className="col-2 p-0">
        <SideNav />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center  w-7 col-md-10 col-sm-12">
        {reservations.length > 0 ? (
          <>
            <header>
              <h1 className="header">Reserved Arena</h1>
            </header>
            <Swiper
              spaceBetween={0}
              slidesPerView={width > 768 ? 3 : 1}
            >
              {reservations.map((reservation) => (
                <SwiperSlide key={reservation.reservation.id}>
                  <ul>
                    <li
                      className="booking-card"
                      style={{
                        backgroundImage: `url(${reservation.item.image})`,
                      }}
                    >
                      <div className="book-container">
                        <div className="content">
                          <button className="btn btn-primary" type="submit" onClick={() => cancelReservation(reservation.reservation.id)}>Delete</button>
                        </div>
                      </div>
                      <div className="informations-container">
                        <h2 className="title">{reservation.item.name}</h2>
                        <p className="price">
                          <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                          </svg>
                          Total:
                          {`$ ${reservation.item.price * daysNum(reservation.reservation.start_date, reservation.reservation.end_date)}`}

                        </p>
                        <div className="more-information">
                          <div className="info-and-date-container">
                            <div className="box info">
                              <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                              </svg>
                              <p>{reservation.item.city}</p>
                              <p>
                                Capacity:
                                {' '}
                                {reservation.item.capacity}
                              </p>
                            </div>
                            <div className="box date">
                              <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                              </svg>
                              <p>
                                {' '}
                                Start Date:
                                {' '}
                                {reservation.reservation.start_date}

                              </p>
                              <p>
                                {' '}
                                End Date:
                                {' '}
                                {reservation.reservation.end_date}

                              </p>
                            </div>

                          </div>
                          <p className="disclaimer">{reservation.item.description}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-sm-block d-none bsfill">
              <button
                type="button"
                className="borderless bg-trasparent reservefill"
                onClick={() => {
                  const { swiper } = document.querySelector('.swiper');
                  swiper.slidePrev();
                }}
              >
                <div className="main-page-handle-left d-flex justify-content-center align-items-center ">
                  <BsFillCaretLeftFill />
                </div>
              </button>
              <button
                type="button"
                className="borderless bg-transparent"
                onClick={() => {
                  const { swiper } = document.querySelector('.swiper');
                  swiper.slideNext();
                }}
              >
                <div className="main-page-handle-right d-flex  justify-content-center align-items-center">
                  <BsCaretRightFill />
                </div>
              </button>
            </div>
          </>
        ) : <h2>No Reservation</h2>}
      </div>

    </div>
  );
};

export default Reservation;
