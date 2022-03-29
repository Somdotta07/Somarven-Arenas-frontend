import { useSelector } from 'react-redux';
import { BsFillArrowRightCircleFill, BsFillGearFill } from 'react-icons/bs';
import './Details.css';

const DetailsPage = () => {
  const item = useSelector((state) => state.itemsDetailsReducer.items) || [];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-12 ">
          <img className="w-100" src={item.image} alt={item.name} />
        </div>
        <div className="col-md-3 col-12">
          <div className="text-end">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Price</td>
                <td>{`$${item.price}`}</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Total Cost</td>
                <td>{`$${(item.price) * 5}`}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <div className="reserve p-s">
              <BsFillGearFill className="mx-2" size={25} color="white" />
              <button className="btn btn-primary" type="submit">Reserve</button>
              <BsFillArrowRightCircleFill className="mx-2" size={25} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;