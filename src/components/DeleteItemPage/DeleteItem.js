import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import calculateItemsPerView from '../../utils/itemsHelper';
import { getItems } from '../../api/items';
import EventCard from './Item';
import './DeleteItem.css';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items) || [];
  const sessionDetails = useSelector((state) => state.sessions);
  const [width, setWidth] = useState(window.innerWidth);
  const token = sessionDetails.user_token || JSON.parse(localStorage.getItem('token'));

  const fixDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', fixDimensions);
    return () => window.removeEventListener('resize', fixDimensions);
  }, [items]);

  useEffect(() => { dispatch(getItems(token)); }, []);

  return (
    <div id="delete-page">
      <header>
        <h1 className="app-title">Delete An Arena</h1>
      </header>
      {items.length > 0 ? (
        <>
          <Swiper
            className="over-swiper"
            spaceBetween={0}
            slidesPerView={calculateItemsPerView(width)}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <EventCard item={item} key={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="borderless bg-trasparent"
            onClick={() => {
              const { swiper } = document.querySelector('.swiper');
              swiper.slidePrev();
            }}
          >
            <div className="main-page-handle-left d-flex justify-content-center align-items-center">
              <BsFillCaretLeftFill />
            </div>
          </button>
          <button
            type="button"
            className="borderless bg-transparent"
            onClick={() => {
              const { swiper } = document.querySelector('.swiper');
              swiper.slideNext();
            }}
          >
            <div className="main-page-handle-right d-flex justify-content-center align-items-center">
              <BsCaretRightFill />
            </div>
          </button>
        </>
      ) : <h2>Loading...</h2>}
    </div>
  );
};

export default DeleteItem;
