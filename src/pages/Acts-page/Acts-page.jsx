import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import News from '../../components/News/News';
import Service from '../../components/Service/Service';
import { Sidenav } from '../../components/Sidenav';

import './Acts-page.css';

export const ActsPage = () => {

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
    { id: 5, link: '/acts', title: 'Нормативные правовые акты', currentPage: true },
    { id: 6, link: '/', title: 'Интернет - приёмная', currentPage: false },
    { id: 7, link: '/', title: 'Открытые данные', currentPage: false },
    { id: 8, link: '/', title: 'Сообщить о факте коррупции', currentPage: false },
    { id: 9, link: '/gallery', title: 'Галерея', currentPage: false },
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
                Нормативные правовые акты
              </h1>

              <ul className='acts__list'>
                <li className='acts__item'>
                  <p>
                    Сведения о доходах, расходах, об имуществе и обязательствах имущественного характера,
                    представленные депутатами Собрания депутатов Октябрьского городского поселения
                    Усть-Большерецкий муниципальный район Камчатского края за 2017 год.
                  </p>

                  <a className='acts__link' href="/">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 11.4L4.4375 7.8M8.5 11.4L12.25 7.8M8.5 11.4V0M16 7.2V15H1V7.2" stroke="#007CC3" stroke-width="1.6" />
                    </svg>

                    <span>Скачать</span>
                  </a>
                </li>

                <li className='acts__item'>
                  <p>
                    Сведения о доходах, расходах, об имуществе и обязательствах имущественного характера,
                    представленные депутатами Собрания депутатов Октябрьского городского поселения
                    Усть-Большерецкий муниципальный район Камчатского края за 2017 год.
                  </p>

                  <a className='acts__link' href="/">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 11.4L4.4375 7.8M8.5 11.4L12.25 7.8M8.5 11.4V0M16 7.2V15H1V7.2" stroke="#007CC3" stroke-width="1.6" />
                    </svg>

                    <span>Скачать</span>
                  </a>
                </li>

                <li className='acts__item'>
                  <p>
                    Сведения о доходах, расходах, об имуществе и обязательствах имущественного характера,
                    представленные депутатами Собрания депутатов Октябрьского городского поселения
                    Усть-Большерецкий муниципальный район Камчатского края за 2017 год.
                  </p>

                  <a className='acts__link' href="/">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 11.4L4.4375 7.8M8.5 11.4L12.25 7.8M8.5 11.4V0M16 7.2V15H1V7.2" stroke="#007CC3" stroke-width="1.6" />
                    </svg>

                    <span>Скачать</span>
                  </a>
                </li>
              </ul>


            </article>

          </div>

        </div>
      </div>
    </ main>
  );
};
