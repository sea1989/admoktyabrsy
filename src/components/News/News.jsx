import React from 'react';
import { Link } from 'react-router-dom';

import News1 from '../../assets/images/news1.jpg'

import './News.css';

const News = () => {

  let currentTitleNews = 'Впервые в п. Октябрьский прошла экологическая игра «Чистые игры»';

  return (

    <section className='news'>

      <div className="news-top">
        <h2>Новости</h2>
        <Link className='all-link'>
          Все новости 🠒
        </Link>
      </div>

      <div className="news-list">
        <Link to={'/news-item/' + currentTitleNews} className='news-item'>
          <img src={News1} alt="" />
          <span className='news-item__date'>4 октября 2022</span>
          <p className='news-item__title'>
            {currentTitleNews}
          </p>
        </Link>

        <Link to={'/news-item/' + currentTitleNews} className='news-item'>
          <img src={News1} alt="" />
          <span className='news-item__date'>4 октября 2022</span>
          <p className='news-item__title'>
            {currentTitleNews}
          </p>
        </Link>

        <Link to={'/news-item/' + currentTitleNews} className='news-item'>
          <img src={News1} alt="" />
          <span className='news-item__date'>4 октября 2022</span>
          <p className='news-item__title'>
            {currentTitleNews}
          </p>
        </Link>

        <Link to={'/news-item/' + currentTitleNews} className='news-item'>
          <img src={News1} alt="" />
          <span className='news-item__date'>4 октября 2022</span>
          <p className='news-item__title'>
            {currentTitleNews}
          </p>
        </Link>
      </div>

    </section>

  );
};

export default News;
