import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Item.css';
import { useNavigate } from 'react-router-dom';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import Items from './Items';
import { getItems, getItemsDetails } from '../../api/items';
import 'swiper/css';
import { getToken } from '../../utils/sessionHelper';


const Item = () => {
  const items = useSelector((state) => state.items.items) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    dispatch(getItems(token));
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  const fixDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', fixDimensions);
    return () => window.removeEventListener('resize', fixDimensions);
  }, [items]);

  const renderDetailsPage = (id, name) => {
    dispatch(getItemsDetails(id, token)).then(() => {
      navigate(`/details/${id}/${name}`);
    });
  };

  return (
    <div className="item-cont min-vw-70 position-relative item-arena">
      <h1 className="fw-bolder text-center my-3">Beautiful Arenas</h1>
      <p className="text-muted text-center main-screen-subtitle">
        Please Select an Arena
      </p>
      { items.length > 0 ? (
        <>
          <div className="position-relative w-98 ">
            <Swiper
              className="swiper"
              spaceBetween={0}
              slidesPerView={width > 768 ? 3 : 1}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="d-flex justify-content-center">
                    <Items
                      item={item}
                      onClick={() => {
                        renderDetailsPage(item.id, item.name);
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
              ...........
            </Swiper>
          </div>
          <div className="d-sm-block d-none bsfill">
            <button
              type="button"
              className="borderless bg-trasparent leftfill"
              onClick={() => {
                const { swiper } = document.querySelector('.swiper');
                swiper.slidePrev();
              }}
            >
              <div className="main-page-handle-left free d-flex justify-content-center align-items-center ">
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
      ) : <h2>Loading....</h2> }
    </div>
  );
};
export default Item;
