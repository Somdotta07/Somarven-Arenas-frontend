import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../api/items';
import './DeleteItem.css';
import EventCard from './Item';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items) || [];

  const sessionDetails = useSelector((state) => state.sessions);

  const token = sessionDetails.user_token || JSON.parse(localStorage.getItem('token'));

  useEffect(() => { dispatch(getItems(token)); }, []);

  return (
    <>
      <header>
        <h1 className="header">Delete Item Page</h1>
      </header>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-0">
        {items.map((item) => <EventCard item={item} key={item.id} />)}
      </Row>
    </>
  );
};

export default DeleteItem;
