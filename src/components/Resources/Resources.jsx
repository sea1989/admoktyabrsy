import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Resource1 from '../../assets/images/resource1.png';
import Resource2 from '../../assets/images/resource2.png';

import './Resources.css';

const Resources = () => {

  return (

    <div className="container">
      <section className='resources'>

        <div className="resources__top">
          <h2>Полезные ресурсы</h2>
          <a class="all-link" href="/">Все ссылки 🠒</a>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            // when window width is >= 640px
            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 6,
            },

          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={false}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource1} alt="" />
              <p className='resource-title'>
                ПРЕЗИДЕНТ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource2} alt="" />
              <p className='resource-title'>
                МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource1} alt="" />
              <p className='resource-title'>
                ПРЕЗИДЕНТ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource2} alt="" />
              <p className='resource-title'>
                МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource1} alt="" />
              <p className='resource-title'>
                ПРЕЗИДЕНТ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource2} alt="" />
              <p className='resource-title'>
                МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource1} alt="" />
              <p className='resource-title'>
                ПРЕЗИДЕНТ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource2} alt="" />
              <p className='resource-title'>
                МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className="resource-item">
              <img src={Resource1} alt="" />
              <p className='resource-title'>
                ПРЕЗИДЕНТ РОССИЙСКОЙ ФЕДЕРАЦИИ
              </p>
            </Link>
          </SwiperSlide>

        </Swiper>
      </section>
    </div>


  );
};

export default Resources;