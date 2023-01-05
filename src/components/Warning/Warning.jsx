import React from 'react';
import { Link } from 'react-router-dom';

import './Warning.css';

const Warning = () => {

  return (

    <section className='warning'>

      <h3>
        Информация
        по гражданской обороне
        и чрезвычайным ситуациям
      </h3>

      <div className="news-list">
        <Link className='news-item'>
          <span className='news-item__date'>19 марта 2019</span>
          <p className='news-item__title'>
            Информирование населения
            в пожароопасный период
          </p>
        </Link>

        <Link className='news-item'>
          <span className='news-item__date'>19 марта 2019</span>
          <p className='news-item__title'>
            Выходить на тонкий лед нельзя!
          </p>
        </Link>

        <Link className='news-item'>
          <span className='news-item__date'>19 марта 2019</span>
          <p className='news-item__title'>
            Информирование населения
            в пожароопасный период
          </p>
        </Link>

        <Link className='news-item'>
          <span className='news-item__date'>19 марта 2019</span>
          <p className='news-item__title'>
            Выходить на тонкий лед нельзя!
          </p>
        </Link>
      </div>

      <Link className='all-link'>
        Подробнее 🠒
      </Link>

    </section>
  );
};

export default Warning;
