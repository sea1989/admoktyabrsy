import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import News from '../../components/News/News';
import Notice from '../../components/Notice/Notice';
import Service from '../../components/Service/Service';

import './news-page.css';


export const NewsPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Новости' },
  ];

  const currentPage = 'Информация по ГО и ЧС';

  return (
    <main>
      <div className="container">

        <div className="page-wrapper">

          <div className="page-main">
            <article className="news-page">
              <Breadcrumb list={projectsList} currentPage={currentPage} />

              <News />

            </article>
          </div>

          <div className="page-right">
            <Notice />
          </div>


        </div>

      </div>
      <Service />
    </ main>
  );
};
