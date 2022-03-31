import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { deleteItemFromAPI, getItems } from '../../api/items';

const EventCard = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const deleteItem = async (id) => {
    await dispatch(deleteItemFromAPI(id));
    await dispatch(getItems);
  };

  return (
    <Col className="d-flex justify-content-center ">
      <Card className="deleteItemCard" style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{`City: ${item.city}`}</ListGroupItem>
          <ListGroupItem>{`Capacity: ${item.capacity}`}</ListGroupItem>
          <ListGroupItem>{`$${item.price} / Day`}</ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-center align-items-end">
          <Button variant="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

EventCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    capacity: PropTypes.string,
  }).isRequired,
};

export default EventCard;