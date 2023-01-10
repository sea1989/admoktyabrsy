import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import Service from '../../components/Service/Service';

import './Notice-page.css';

import Warning from '../../components/Warning/Warning';

export const NoticePage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Объявления';

  return (
    <main>
      <div className="container">

        <div className="page-wrapper">

          <div className="page-main">
            <article className="notice-page">
              <Breadcrumb list={projectsList} currentPage={currentPage} />

              <h1>
                Объявления
              </h1>

              <ul className='info-po__list'>

                <li className='info-po__item'>
                  <div className="info-po__info">
                    <span class="info-po__date">19 марта 2019</span>
                    <h3>
                      Горячая линия Управление по вопросам миграции УМВД России по Камчатскому краю
                    </h3>
                    <p className='info-po__text'>
                      Управление по вопросам миграции УМВД России по Камчатскому краю
                    </p>
                    <Link to={'/notice-item/' + currentPage} class="all-link" href="/">Подробнее 🠒</Link>
                  </div>
                </li>

                <li className='info-po__item'>
                  <div className="info-po__info">
                    <span class="info-po__date">19 марта 2019</span>
                    <h3>
                      Жителям Камчатки рассказали, как изменился порядок регистрации прав на недвижимость
                    </h3>
                    <p className='info-po__text'>
                      Жителям Камчатки рассказали, как изменился порядок регистрации прав на недвижимость
                    </p>
                    <Link to={'/notice-item/' + currentPage} class="all-link" href="/">Подробнее 🠒</Link>
                  </div>
                </li>

                <li className='info-po__item'>
                  <div className="info-po__info">
                    <span class="info-po__date">19 марта 2019</span>
                    <h3>
                      Запрет на розничную продажу алкогольной продукции
                    </h3>
                    <p className='info-po__text'>
                      Запрет на розничную продажу алкогольной продукции
                    </p>
                    <Link to={'/notice-item/' + currentPage} class="all-link" href="/">Подробнее 🠒</Link>
                  </div>
                </li>

              </ul>

            </article>
          </div>

          <div className="page-right">
            <Warning />
          </div>

        </div>

      </div>
      <Service />
    </ main>
  );
};
