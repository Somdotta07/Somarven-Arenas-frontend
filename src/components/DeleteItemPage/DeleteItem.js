import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../api/items';
import './DeleteItem.css';
import EventCard from './Item';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items) || [];

  console.log(items);

  useEffect(() => { dispatch(getItems); }, []);

  return (
    <>
      <h1 className="header">Delete Item Page</h1>
      {items.map((item) => <EventCard item={item} key={item.id} />)}
    </>
  );
};

export default DeleteItem;
