import { useState } from 'react';
import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const VerticalNav = () => {
  const navigate = useNavigate();
  const [clickedIndex, setClickedIndex] = useState(0);
  return (
    <aside className="p-3 d-sm-block d-none">
      <h1 className="fw-bolder fst-italic">Arenas</h1>
      <div className="sidebar-items">
        <button type="button" onClick={() => { setClickedIndex(0); navigate('/'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 0 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>ARENAS</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(1); navigate('/reserve'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 1 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>RESERVE</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(2); navigate('/reservations'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 2 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>MY RESERVATIONS </h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(3); navigate('/AddItem'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 3 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>ADD ARENAS</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(4); navigate('/DeleteItem'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 4 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>DELETE </h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(5); navigate('/SignOut'); }} className="bg-transparent borderless w-100 text-start">
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
        <div className="text-wrap">© 2022 Final capstone project</div>
      </div>
      <div />
    </aside>
  );
};

export default VerticalNav;
