import { useDispatch, useSelector } from 'react-redux';
import './Item.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import Items from './Items';
import { getItems, getItemsDetails } from '../../api/items';
import 'swiper/css';

const Item = () => {
  const items = useSelector((state) => state.items.items) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems);
  }, []);
  const navigate = useNavigate();

  const renderDetailsPage = (id) => {
    dispatch(getItemsDetails(id)).then(() => {
      navigate(`/Details/${id}`);
    });
  };

  return (
    <div>
      <h1 className="fw-bolder text-center my-5">Beautiful Arenas</h1>
      <p className="text-muted text-center main-screen-subtitle">
        Select an Arena
      </p>
      <div className="row">
        <Swiper spaceBetween={0}>
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="d-flex justify-content-center">
                <Items
                  item={item}
                  onClick={() => {
                    renderDetailsPage(item.id);
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
          ...........
        </Swiper>
      </div>
      <div className="d-sm-block d-none">
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
          <div className="main-page-handle-right d-flex  justify-content-center align-items-center">
            <BsCaretRightFill />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Item;