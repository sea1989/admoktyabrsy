import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import News from '../../components/News/News';
import Service from '../../components/Service/Service';
import { Sidenav } from '../../components/Sidenav';

import './Gallery-page.css';

export const GalleryPage = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
    { id: 1, link: '/', title: 'Собрание депутатов' },
  ];

  const currentPage = 'Нормативные правовые акты';

  const sidenavList = [
    { id: 1, link: '/', title: 'Собрание депутатов', currentPage: false },
    { id: 2, link: '/', title: 'Председатель', currentPage: false },
    { id: 3, link: '/', title: 'Депутаты ', currentPage: false },
    { id: 4, link: '/sessions', title: 'Сессии', currentPage: false },
    { id: 5, link: '/acts', title: 'Нормативные правовые акты', currentPage: false },
    { id: 6, link: '/', title: 'Интернет - приёмная', currentPage: false },
    { id: 7, link: '/', title: 'Открытые данные', currentPage: false },
    { id: 8, link: '/', title: 'Сообщить о факте коррупции', currentPage: false },
    { id: 9, link: '/gallery', title: 'Галерея', currentPage: true },
    { id: 10, link: '/', title: 'Вопрос-ответ', currentPage: false },
  ];

  return (
    <main>
      <div className="container">

        <div className="main-wrapper">

          <Sidenav list={sidenavList} />

          <div className="main-content">

            <Breadcrumb list={projectsList} currentPage={currentPage} />

            <article className="acts">
              <h1>
                Галлерея
              </h1>

              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>

            </article>

          </div>

        </div>
      </div>
    </ main>
  );
};
