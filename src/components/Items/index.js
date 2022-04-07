import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import 'swiper/css';
import './Item.css';
import Items from './Items';
import { getToken } from '../../utils/sessionHelper';
import { getItems, getItemsDetails } from '../../api/items';
import calculateItemsPerView from '../../utils/itemsHelper';

const ItemsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getToken();
  const [width, setWidth] = useState(window.innerWidth);
  const items = useSelector((state) => state.items.items) || [];

  const fixDimensions = () => {
    setWidth(window.innerWidth);
  };

  const renderDetailsPage = (id, name) => {
    dispatch(getItemsDetails(id, token)).then(() => {
      navigate(`/details/${id}/${name}`);
    });
  };

  useEffect(() => {
    dispatch(getItems(token));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', fixDimensions);
    return () => window.removeEventListener('resize', fixDimensions);
  }, [items]);

  return (
    <div id="items-page">
      <div className="app-title">
        <h1>Beautiful Arenas</h1>
        <p className="text-muted main-screen-subtitle">
          Please Select an Arena
        </p>
      </div>
      {items.length > 0 ? (
        <>
          <Swiper
            className="over-swiper"
            spaceBetween={0}
            slidesPerView={calculateItemsPerView(width)}
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
          </Swiper>
          <button
            type="button"
            className="borderless bg-transparent"
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
        </>
      ) : <h2>Loading....</h2>}
    </div>
  );
};

export default ItemsPage;
