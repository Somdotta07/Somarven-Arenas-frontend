import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BsFillArrowRightCircleFill, BsFillGearFill, BsFillCaretLeftFill } from 'react-icons/bs';
import './Details.css';
import { getItemsDetails } from '../../api/items';

const DetailsPage = () => {
  const item = useSelector((state) => state.itemsDetailsReducer.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemsDetails(id));
  }, []);

  return (
    <div className="container mt-5">

      <div className="row">

        <div className="col-md-8 col-12 ">
          <img className="w-100" src={item.image} alt={item.name} />
        </div>

        <div className="col-md-3 col-12 details-info">
          <div className="text-end">
            <h1 className="fw-bolder">{item.name}</h1>
            <p>- $1000 deposit upon any Arena booking</p>
            {/* <p>{item.description}</p> */}
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
                <td>{`$${(item.price) * 5}`}</td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex justify-content-end reserve-div">
            <div className="reserve  p-2">
              <BsFillGearFill className="mx-2" size={40} color="white" />
              <button className="btn btn-light reserve-btn" type="submit" onClick={() => { navigate('/reserve', { state: { id: item.id } }); }}>Reserve</button>
              <BsFillArrowRightCircleFill className="mx-2" size={40} color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center details-fill ">
        <BsFillCaretLeftFill />
      </div>
    </div>
  );
};

export default DetailsPage;
