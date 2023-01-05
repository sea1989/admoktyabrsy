import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import News from '../../components/News/News';
import Service from '../../components/Service/Service';
import { Sidenav } from '../../components/Sidenav';

import './administration-page.css';

export const AdministrationPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Администрация';

  const sidenavList = [
    { id: 1, link: '/', title: 'Администрация', currentPage: true },
    { id: 2, link: '/', title: 'Глава администрации', currentPage: false },
    { id: 3, link: '/', title: 'Муниципальные служащие администрации', currentPage: false },
    { id: 4, link: '/', title: 'Руководители администрации', currentPage: false },
    { id: 5, link: '/', title: 'Публичные выступления руководителей Администрации', currentPage: false },
    { id: 6, link: '/', title: 'Полномочия Администрации', currentPage: false },
    { id: 7, link: '/', title: 'Муниципальная служба', currentPage: false },
    { id: 8, link: '/', title: 'Нормативные правовые акты', currentPage: false },
    { id: 9, link: '/', title: 'Статистическая информация', currentPage: false },
    { id: 10, link: '/', title: 'О муниципальном образовании', currentPage: false },
    { id: 11, link: '/', title: 'Подведомственные организации', currentPage: false },
  ];

  return (
    <main>
      <div className="container">

        <div className="main-wrapper">

          <Sidenav list={sidenavList} />

          <div className="main-content">

            <Breadcrumb list={projectsList} currentPage={currentPage} />

            <article className="administration">
              <h1>
                Администрация
              </h1>

              <h3>
                Администрация Октябрьского городского поселения Усть-Большерецкого муниципального района Камчатского края
              </h3>

              <p className='administration__info'>
                Телефон приёмной - +7(41532)2-23-58,<br />

                Факс приёмной - +7(41532)2-25-36.<br />

                Почтовый адрес: 684102, Камчатский рай, Усть-Большерецкий район, посёлок Октябрьский, улица Комсомольская, дом 3<br />

                Электронный адрес: oktadm2010@yandex.ru, oktadmin2010@rambler.ru, novaterra63@rambler.ru,<br />

                Официальный электронный адрес: info@admoktyabrsky.ru,Официальный сайт: admoktyabrsky.ru
              </p>

              <h3>Глава Октябрьского городского поселения
                Головчак Игорь Васильевич</h3>

            </article>

          </div>

        </div>

        <News />

      </div>
      <Service />
    </ main>
  );
};
