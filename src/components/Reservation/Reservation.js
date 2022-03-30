import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Reserve.css';
import getReserved from '../../api/reserved';

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations.reservations) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserved());
  }, []);
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
                <th scope="col">Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={reservation.reservation.id}>
                  <th scope="row">{ index + 1}</th>
                  <td>{reservation.item.name}</td>
                  <td>{reservation.reservation.start_date}</td>
                  <td>{reservation.reservation.end_date}</td>
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
