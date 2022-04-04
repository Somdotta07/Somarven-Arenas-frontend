import { useState } from 'react';
import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleSignOut } from '../redux/signin/login';

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(handleSignOut()).then(() => {
      navigate('/sign_in');
    });
    localStorage.setItem('session-status', false);
  };

  const [clickedIndex, setClickedIndex] = useState('') || 'items';
  return (
    <aside className="p-3 d-sm-block d-none">
      <h1 className="fw-bolder fst-italic">Somar Arenas</h1>
      <div className="sidebar-items">
        <Link to="/signup" onClick={() => { setClickedIndex('signup'); }} className={`${clickedIndex === 'signup' && 'sidebar-item-active '} py-2 fw-bold ps-2`}>Sign up</Link>
        <Link to="/items" onClick={() => { setClickedIndex('items'); }} className={`${clickedIndex === 'items' && 'sidebar-item-active '} py-2 fw-bold ps-2`}>Items</Link>
        <Link to="/reserve" onClick={() => { setClickedIndex('reserve'); }} className={`${clickedIndex === 'reserve' && 'sidebar-item-active '} py-2 fw-bold ps-2`}>Reserve</Link>
        <Link to="/reservations" onClick={() => { setClickedIndex('reservations'); }} className={`${clickedIndex === 'reservations' && 'sidebar-item-active '} py-2 fw-bold ps-2`}>My Reservations</Link>
        <Link to="/delete-item" onClick={() => { setClickedIndex('delete-item'); }} className={`${clickedIndex === 'delete-item' && 'sidebar-item-active '} py-2 fw-bold ps-2`}>Delete Item</Link>
        <Link to="/additem" onClick={() => { setClickedIndex('additem'); }} className={`${clickedIndex === 'additem' && 'sidebar-item-active '} py-2 fw-bold ps-2`}>AddItem</Link>
        <button type="button" onClick={() => signOut()}>Sign Out</button>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-icons">
          <span className="p-2">
            <BsTwitter />
          </span>
          <span className="p-2">
            <FaFacebookF />
          </span>
          <span className="p-2">
            <FaGooglePlus />
          </span>
          <span className="p-2">
            <BsVimeo />
          </span>
          <span className="p-2">
            <GrPinterest />
          </span>
        </div>
        <div className="text-wrap">© 2022 Final capstone project</div>
      </div>
      <div />
    </aside>
  );
};

export default SideNav;
