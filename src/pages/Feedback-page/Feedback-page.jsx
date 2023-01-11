import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';

import Notice from '../../components/Notice/Notice';

import './Feedback-page.css';


export const FeedbackPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
  ];

  const currentPage = 'Обратная связь';

  return (
    <main>
      <div className="container">

        <div className="page-wrapper">

          <div className="page-main">
            <article className="feedback-page">
              <Breadcrumb list={projectsList} currentPage={currentPage} />

              <h1>
                Обратная связь
              </h1>

              <form className='feedback__form' action="" method="get">

                <input type="text" name="name" id="name" required placeholder='Фамилия Имя Отчество' />
                <input type="text" name="activity" id="activity" required placeholder='Сфера деятельности' />
                <input type="number" name="post-index" id="post-index" required placeholder='Почтовый индекс' />
                <input type="text" name="adress" id="adress" required placeholder='Адрес' />
                <input type="number" name="tel" id="tel" required placeholder='Номер контактного телефона' />
                <input type="email" name="email" id="email" required placeholder='E-mail' />
                <input type="textarea" name="message" id="message" required placeholder='Сообщение' />

                <input type="file" />

                <button type="submit">Отправить</button>
              </form>

            </article>
          </div>

          <div className="page-right">
            <Notice />
          </div>

        </div>

      </div>

    </ main>
  );
};
