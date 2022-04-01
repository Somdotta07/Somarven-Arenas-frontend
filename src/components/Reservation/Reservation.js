/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Reserve.scss';
import getReserved from '../../api/reserved';
import deleteReserve from '../../api/deleteReserve';

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations.reservations) || [];

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
  useEffect(() => {
    dispatch(getReserved());
  }, []);
  const cancelReservation = (id) => {
    dispatch(deleteReserve(id));
    dispatch(getReserved());
  };

  return (
    <>
      {reservations.length > 0 && (
        <div>
          <div className=" reserved-h">
            <h2 className="fw-bolder text-center my-5">Reserved Beautiful Arenas</h2>
          </div>
          <div className="d-flex flex-row justify-content-center">
            {reservations.map((reservation) => (
              <ul key={reservation.reservation.id}>
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
                            Start_Date:
                            {' '}
                            {reservation.reservation.start_date}

                          </p>
                          <p>
                            {' '}
                            End_Date:
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

            ))}
          </div>
        </div>
      )}
      {reservations.length === 0 && (
      <div className="d-flex flex-column justify-content-center align-items-center wrapper  ">
        <div className="">
          <h1 className="text-center text-white">No Reservations</h1>
        </div>
      </div>
      )}

    </>
  );
};

export default Reservation;
