import React from 'react';
import { Link } from 'react-router-dom';

import Service3 from '../../assets/images/service3.png'

import './Service.css';

const Service = () => {

  return (

    <div className="container">
      <section className='service'>

        <h2>Услуги и сервис</h2>

        <div className="service__wrapper">
          <Link className='service__item service__item1'>

            <svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9333 36.9771H46.8M16.9333 51.9673L46.8 52M16.9333 21.9869L36.8444 22M56.7556 72H6.97778C4.22863 72 2 69.7614 2 67V7C2 4.23858 4.22863 2 6.97778 2H46.8L61.7333 17V67C61.7333 69.7614 59.5047 72 56.7556 72Z" stroke="white" stroke-width="3" stroke-linecap="square" />
            </svg>

            <p className='service__title'>Запись
              в детский сад,
              школу</p>


          </Link>

          <Link className='service__item service__item2'>

            <svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9111 49.5V42M21.9111 42V17C21.9111 14.2386 24.1397 12 26.8889 12C29.638 12 31.8667 14.2386 31.8667 17V37H48.5569C53.0849 37 56.7556 40.6871 56.7556 45.2353V49.5C56.7556 61.9264 46.7267 72 34.3556 72H31.8667C20.8701 72 11.9556 63.0457 11.9556 52C11.9556 46.4772 16.4128 42 21.9111 42ZM39.3333 27H49.2889C56.1618 27 61.7333 21.4036 61.7333 14.5C61.7333 7.59644 56.1618 2 49.2889 2H14.4444C7.57157 2 2 7.59644 2 14.5C2 21.4036 7.57157 27 14.4444 27" stroke="white" stroke-width="3" />
            </svg>


            <div className="service__name">
              <p className='service__title'>Мой выбор,
                Моё будущее</p>

              <p className='service__subtitle'>Общественное голосование
                на портале Госуслуг</p>

            </div>

          </Link>

          <Link className='service__item service__item3'>

            <p className='service__title'>Запись
              в детский сад,
              школу</p>

            <img src={Service3} alt="gosuslugi" />

          </Link>
        </div>
      </section>
    </div>


  );
};

export default Service;
