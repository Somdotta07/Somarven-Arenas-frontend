import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { handleSignOut } from '../redux/signin/login';
import Logo from './Logo';
import './Items/Item.css';

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(handleSignOut()).then(() => {
      navigate('/sign_in');
    });
  };

  const [clickedIndex, setClickedIndex] = useState(0);
  return (
    <aside className="d-none d-lg-flex flex-column justify-content-evenly align-items-center">
      <span>
        <div id="logo-text">
          <h2 className="fw-bolder">Somarven</h2>
          <h2 className="fw-bolder">Somarven</h2>
        </div>
      </span>
      <Logo />
      <div className="sidebar-items">
        <button type="button" onClick={() => { setClickedIndex(0); navigate('/items'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 0 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>ARENAS</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(1); navigate('/reserve'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 1 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>RESERVE</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(2); navigate('/reservations'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 2 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>MY RESERVATIONS</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(3); navigate('/additem'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 3 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>ADD ARENAS</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(4); navigate('/delete-item'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 4 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>DELETE </h5>
        </button>
        <button type="button" onClick={() => signOut()} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 5 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>SIGN OUT</h5>
        </button>
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
        <div className="text-wrap">© 2022 Somarven Arenas</div>
      </div>
    </aside>
  );
};

export default SideNav;
