import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getItems } from '../../api/items';
import './DeleteItem.css';
import EventCard from './Item';

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
    <div>
      <div className="delete-page">
        <header>
          <h1 className="header app-title">Delete An Arena</h1>
        </header>
        {items.length > 0 ? (
          <>
            <Swiper
              className="swiper"
              spaceBetween={0}
              slidesPerView={width > 768 ? 3 : 1}
            >
              <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-0">
                {items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <EventCard item={item} key={item.id} />
                  </SwiperSlide>
                ))}
              </Row>
            </Swiper>
            <div className="d-sm-block d-none bsfill">
              <button
                type="button"
                className="borderless bg-trasparent leftfill"
                onClick={() => {
                  const { swiper } = document.querySelector('.swiper');
                  swiper.slidePrev();
                }}
              >
                <div className="main-page-handle-left d-flex justify-content-center align-items-center ">
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
                <div className="main-page-handle-right d-flex  justify-content-center align-items-center">
                  <BsCaretRightFill />
                </div>
              </button>
            </div>
          </>
        ) : <h2>Loading...</h2>}
      </div>
    </div>
  );
};

export default DeleteItem;
