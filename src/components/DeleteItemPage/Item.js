import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const EventCard = (props) => {
  const { item } = props;

  return (

  );
};

EventCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    capacity: PropTypes.string,
  }).isRequired,
};

export default EventCard;
