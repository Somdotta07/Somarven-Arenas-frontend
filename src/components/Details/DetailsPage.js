import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BsFillArrowRightCircleFill, BsFillGearFill } from 'react-icons/bs';
import Modal from './Modal';
import './Details.css';
import { getItemsDetails, getReservationDates } from '../../api/items';
import { controlModal } from '../../redux/items/ItemDetails';
import { getToken } from '../../utils/sessionHelper';
import SideNav from '../SideNav';

const DetailsPage = () => {
  const item = useSelector((state) => state.itemsDetailsReducer.items);
  const modal = useSelector((state) => state.itemsDetailsReducer.isModalOpen);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const token = getToken();
    dispatch(getItemsDetails(id, token));
    dispatch(getReservationDates(id, token));
  }, []);

  return (
    <div className="row">
      <div className="col-2 p-0">
        <SideNav />
      </div>
      <div className="container mt-5 col-md-10 col-sm-12 ">
        <div>
          {modal && <Modal />}
        </div>
        {item.length === 0 ? <h2>Loading...</h2> : (
          <>
            <div className="row">

              <div className="col-md-6 col-12 ">
                <img className="w-100" src={item.image} alt={item.name} />
                {/* <div className="d-flex justify-content-center align-items-center details-fill ">
    <BsFillCaretLeftFill />
  </div> */}
              </div>
              <div className="col-md-5 col-12 details-info">
                <div className="text-end">
                  <h1 className="fw-bolder">{item.name}</h1>
                  <p> $1000 deposit upon any Arena booking</p>
                </div>
                <table className="table table-striped mt-5">
                  <tbody>
                    <tr>
                      <td>City</td>
                      <td>{item.city}</td>
                    </tr>
                    <tr>
                      <td>Capacity</td>
                      <td>{item.capacity}</td>
                    </tr>
                    <tr>
                      <td>Total Cost</td>
                      <td>{`$${(item.price)}`}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex justify-content-end reserve-div">
                  <div className="reserve  p-2">
                    <BsFillGearFill className="mx-2" size={40} color="white" />
                    <button className="btn btn-light reserve-btn" type="submit" onClick={() => dispatch(controlModal(true))}>Reserve</button>
                    <BsFillArrowRightCircleFill className="mx-2" size={40} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default DetailsPage;
