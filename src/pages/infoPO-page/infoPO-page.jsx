import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import News from '../../components/News/News';
import Notice from '../../components/Notice/Notice';
import Service from '../../components/Service/Service';

import './infoPO-page.css';

import Mchs from '../../assets/images/mchs.png'

export const InfoPOpage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Информация по ГО и ЧС';



  return (
    <main>
      <div className="container">

        <div className="page-wrapper">

          <div className="page-main">
            <article className="info-po">
              <Breadcrumb list={projectsList} currentPage={currentPage} />

              <h1>
                Информация по гражданской обороне и чрезвычайным ситуациям
              </h1>

              <ul className='info-po__list'>

                <li className='info-po__item'>
                  <img src={Mchs} alt="logo" />
                  <div className="info-po__info">
                    <span class="info-po__date">19 марта 2019</span>
                    <h3>
                      Информирование населения в пожароопасный период
                    </h3>
                    <p className='info-po__text'>
                      Порядок использования открытого огня и разведения костров на землях сельскохозяйственного назначения и землях запаса
                    </p>
                    <Link to={'/info-po-item/' + currentPage} class="all-link" href="/">Подробнее 🠒</Link>
                  </div>
                </li>

                <li className='info-po__item'>
                  <img src={Mchs} alt="logo" />
                  <div className="info-po__info">
                    <span class="info-po__date">19 марта 2019</span>
                    <h3>
                      Выходить на тонкий лед нельзя!
                    </h3>
                    <p className='info-po__text'>
                      В связи с длительным воздействием на Камчатский полуостров циклона и
                      повышением среднесуточной температуры, лёд на водоёмах Камчатского
                      края теряет прочность и грозит проломиться под ногами рыбаков или
                      колёсами автомобиля.В связи с длительным воздействием на Камчатский полуостров
                      циклона и повышением среднесуточной температуры, лёд на водоёмах Камчатского края теряет прочность
                      и грозит проломиться под ногами рыбаков или колёсами автомобиля.
                    </p>
                    <Link to={'/info-po-item/' + currentPage} class="all-link" href="/">Подробнее 🠒</Link>
                  </div>
                </li>

              </ul>

                       </article>
          </div>

          <div className="page-right">
            <Notice />
          </div>



        </div>

        <News />

      </div>
      <Service />
    </ main>
  );
};
