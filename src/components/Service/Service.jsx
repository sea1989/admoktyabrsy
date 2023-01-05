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
              <path d="M16.9333 36.9771H46.8M16.9333 51.9673L46.8 52M16.9333 21.9869L36.8444 22M56.7556 72H6.97778C4.22863 72 2 69.7614 2 67V7C2 4.23858 4.22863 2 6.97778 2H46.8L61.7333 17V67C61.7333 69.7614 59.5047 72 56.7556 72Z" stroke="white" stroke-width="3" stroke-linecap="square" />
            </svg>

            <div className="service__name">
              <p className='service__title'>Запись
                в детский сад,
                школу</p>

              <p className='service__subtitle'>Запись
                в детский сад,
                школу</p>

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
