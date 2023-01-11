import React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';

import Notice from '../../components/Notice/Notice';
import Service from '../../components/Service/Service';

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

                <textarea id="story" name="story" rows="5" cols="33" placeholder='Сообщение'></textarea>


                <input type="file" />

                <label className='label-select' for="answer">Выберите, как Вы желаете получить ответ:</label>
                <select name="answer" id="answer">
                  <option value="">-- Выберите  --</option>
                  <option value="petersburg">Электронное сообщение</option>
                  <option value="samara">По адресу</option>
                  <option value="perm">Электронное сообщение</option>
                  <option value="novosibirsk">Электронное сообщение</option>
                </select>
                <div className="politics">

                  <input type="checkbox" id="politics" value="" required />
                  <p className='politics__text'>
                    Согласие <a href="ссылка на страницу согласия">на обработку персональных данных</a>
                  </p>

                </div>

                <button className='btn-feedback' type="submit">Отправить
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1L9.57143 16L7.42857 9.57143L1 7.42857L16 1Z" stroke="white" stroke-width="1.6" stroke-linejoin="round" />
                  </svg>
                </button>
              </form>

              <div className="feedback__info">
                <Link className='feedback__info-item'>

                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15.6177L23 24.9691L42 15.6177M42 15.8323V38.3282C42 39.8038 40.7848 41 39.2857 41H6.71429C5.21523 41 4 39.8038 4 38.3282V15.8323C4 14.8735 4.52192 13.9882 5.36762 13.5125L21.6533 4.35203C22.4878 3.88266 23.5122 3.88266 24.3467 4.35203L40.6324 13.5125C41.4781 13.9882 42 14.8735 42 15.8323Z" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span>Проверить обращение</span>

                </Link>

                <Link className='feedback__info-item'>

                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V43H43M8.51724 34.7241L19.5517 18.1724L27.8276 29.2069L41.6207 9.89655" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <span>Статистика обращений</span>

                </Link>
              </div>

            </article>
          </div>

          <div className="page-right page-right__feedback">
            <Service />
          </div>

        </div>

      </div>

    </ main>
  );
};
