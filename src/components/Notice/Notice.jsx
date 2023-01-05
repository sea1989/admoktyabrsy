import React from 'react';
import { Link } from 'react-router-dom';

import './Notice.css';

const Notice = () => {

  return (

    <section className='notice'>

      <div className="notice__header">
        Объявления
      </div>

      <ul className='notice-list'>
        <li className='notice-item'>
          <span className='notice-item__date'>22 сентября 2022</span>
          <p className='notice-item__title'>
            Горячая линия Управление по вопросам миграции УМВД России по Камчатскому краю
          </p>
        </li>

        <li className='notice-item'>
          <span className='notice-item__date'>22 сентября 2022</span>
          <p className='notice-item__title'>
            Горячая линия Управление по вопросам миграции УМВД России по Камчатскому краю
          </p>
        </li>
        <li className='notice-item'>
          <span className='notice-item__date'>22 сентября 2022</span>
          <p className='notice-item__title'>
            Горячая линия Управление по вопросам миграции УМВД России по Камчатскому краю
          </p>
        </li>
        <li className='notice-item'>
          <span className='notice-item__date'>22 сентября 2022</span>
          <p className='notice-item__title'>
            Горячая линия Управление по вопросам миграции УМВД России по Камчатскому краю
          </p>
        </li>
        <Link className='all-link'>
        Все объявления 🠒
      </Link>
      </ul>




    </section>
  );
};

export default Notice;
