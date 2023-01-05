import React from 'react';

import './Promo.css';

const Promo = () => {

  return (

    <section className='promo'>
      <div className="container">
        <div className="promo__wrapper">
          <h1 className='visually-hidden'>
            Органы местного самоуправления
            Октябрьского городского поселения
            Усть-Большерецкого муниципального района Камчатского края
          </h1>

          <form className='search-form'>

            <input type="search" id="mySearch" name="q"
              placeholder="Хочу узнать" />
            <svg className='search-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.4438 16.4437L21.0001 21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <button className='btn-search'>НАЙТИ</button>

          </form>

          <ul className='theme-list'>
            <li className='theme-item'>
              Постановления
            </li>

            <li className='theme-item'>
              Публичные слушания
            </li>

            <li className='theme-item'>
              Противодействие коррупции
            </li>

            <li className='theme-item'>
              Градостроительство
            </li>

            <li className='theme-item'>
              Вакансии
            </li>

            <li className='theme-item'>
              Муниципальные программы
            </li>

            <li className='theme-item'>
              Результаты проверок
            </li>
          </ul>

        </div>

      </div>
    </section>

  );
};

export default Promo;
