import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Reserve.css';
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
      <div className="d-flex flex-column justify-content-center wrapper">
        <h2 className="text-center text-white">Reserved</h2>
        <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
          <table className="table table-success table-striped w-50">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">City</th>
                <th scope="col">Capacity</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>

                <th scope="col">No. of Days</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={reservation.reservation.id}>
                  <th scope="row">{ index + 1}</th>
                  <td>{reservation.item.image}</td>
                  <td>{reservation.item.name}</td>
                  <td>{reservation.item.city}</td>
                  <td>{reservation.item.capacity}</td>
                  <td>{reservation.reservation.start_date}</td>
                  <td>{reservation.reservation.end_date}</td>
                  <td>
                    {daysNum(reservation.reservation.start_date, reservation.reservation.end_date)}
                    {' '}
                  </td>
                  <td>
                    {`$ ${reservation.item.price * daysNum(reservation.reservation.start_date, reservation.reservation.end_date)}` }
                  </td>
                  <td><button className="btn btn-primary" type="submit" onClick={() => cancelReservation(reservation.reservation.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
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
