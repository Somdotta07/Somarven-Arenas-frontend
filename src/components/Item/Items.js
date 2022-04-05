import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Items = ({ item, onClick }) => {
  const {
    name, image, description, city, price,
  } = item;
  return (

    <button
      type="button"
      className="bg-transparent borderless"
      onClick={() => {
        onClick();
      }}
    >
      <div className="card borderless">
        <div className="card-image ">
          <img src={image} alt={name} className="item-card-image" />
        </div>
        <div className="card-body">
          <h4 className="card-title fw-bold">{name}</h4>
          <p className="card-text text-muted item-card-description description">
            {description}
          </p>
          <p className="card-text text-muted item-card-description">
            { city }
          </p>
          <p className="card-text text-muted item-card-description">
            $
            {price}
          </p>
          <div className="card-text d-flex justify-content-center">
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <FaFacebookF />
            </div>
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <BsTwitter />
            </div>
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <FaInstagramSquare />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

Items.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Items;
