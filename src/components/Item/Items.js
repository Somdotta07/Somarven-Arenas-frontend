import PropTypes from 'prop-types';

const Items = ({ item, onClick }) => {
  const { name, image, description } = item;
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
          <h5 className="card-title">{name}</h5>

          <p className="card-text text-muted item-card-description">
            {description}
          </p>

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
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Items;