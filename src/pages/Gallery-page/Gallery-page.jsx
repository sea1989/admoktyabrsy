import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';


import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Sidenav } from '../../components/Sidenav';

import './Gallery-page.css';


export const GalleryPage = () => {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
    { id: 2, link: '/', title: 'Собрание депутатов' },
  ];

  const currentPage = 'Галерея';

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

            <article className="gallery">
              <h1>
                Галлерея
              </h1>

              <section className='gallery__wrapper'>
                <ImageGallery items={images} />
              </section>

            </article>

          </div>

        </div>
      </div>
    </ main>
  );
};
