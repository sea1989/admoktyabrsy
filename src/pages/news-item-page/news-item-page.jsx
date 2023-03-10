import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import News from '../../components/News/News';
import Notice from '../../components/Notice/Notice';
import Service from '../../components/Service/Service';

import './news-item-page.css';

import NewsItemImg from '../../assets/images/news-item.jpg'


export const NewsItemPage = () => {

  const projectsList = [
    { id: 1, link: '/', title: 'Главная' },
    { id: 2, link: '/news', title: 'Новости' },
  ];

  const currentPage = 'Чистые игры';

  return (
    <main>
      <div className="container">

        <div className="page-wrapper">

          <div className="page-main">
            <article className="news-item-page">
              <Breadcrumb list={projectsList} currentPage={currentPage} />

              <h1>
                Чистые игры
              </h1>

              <span class="info-po__date">19 марта 2019</span>

              <p>
                <img src={NewsItemImg} alt='foto' />
                <span className='news-item-title'>Впервые в п. Октябрьский прошла экологическая игра «Чистые игры».</span>
                Чистые игры-это командные соревнования по очистке природных территорий
                от мусора и разделению отходов. Увлекательная игра с призами, где участники
                ищут артефакты, решают экологические загадки, собирают и разделяют мусор,
                получая за это баллы. Статистика игр ведётся в реальном времени на сайте и в
                мобильном приложении. В рамках одной игры собирается
                от 2 до 5 тонн мусора.Проект начался с простой волонтерской инициативы в Санкт-
                Петербурге в 2014 году. Миссия — дать возможность людям через игру увидеть проблемы загрязнения окружающей среды и привлечь широкую общественность к вопросам экологии.
                В конце мая 2022 года ученик 11 класса МБОУ Октябрьской СОШ №1 Бабенко Александр успешно прошёл стажировку по проведению экологического соревнования «Чистые игры» в Камчатском крае под руководством председателя ЭКО «КамЧа» Л.А. Завьялова и председателя правления МОО «Чистые игры» Иоффе Д.В. 01 октября 2022 года жители Октябрьского городского поселения первые в Усть-Большерецком районе смогли приняли участие в «Чистых играх». Зарегистрировались и приняли участие 5 команд : «Ураган зачистки», «Субботник», «Маленькие экологи», «Экопатруль», «SOS», в общей сложности 20 человек. Несмотря на то, что экологическая игра рассчитана на взрослое население, отрадно отметить, что учащиеся 5 класса МБОУ Октябрьской СОШ №1 в полном составе вместе с родителями приняли участие в соревновании. По результатам соревнований 1 место заняла команда «Ураган зачистки», 2 место команда «SOS», 3 место команда «Субботник». Все участники получили сертификаты участия, а победители дипломы и памятные призы от спонсоров.
                За 1 час игры участники собрали более 600-т кг мусора с берега Охотского моря.
                «Чистые игры» на сегодняшний день объединили 101448 участников, собрано 2658 тонн мусора в 508 городах.
                Огромная благодарность спонсорами «Чистых игр»: Фонду президентских грантов, Эко «Камча», АО ОкеанРыбфлот, транспортной компании “Снабженец”, «Плавильне – Workshop. Также благодарим за помощь в организации Администрацию и Собрание депутатов Октябрьского городского поселения, ДК «Рыбак», волонтёров Октябрьского волонтёрского движения «Якорь», МКУ "служба материально-технического и организационного органов МСУ Октябрьского городского поселения обеспечения ,ООО «Орлан», Волченко Юрия.
                Отныне, «Чистые игры» станут неотъемлемой частью жизни нашего родного посёлка!
                #Cleangames #Чистые игры
              </p>

              <section className='share-social'>

                <p>Поделиться ссылкой:</p>

                <div className='share-social__list'>

                  <a href="">
                    <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="41.7115" fill="#0077FF" />
                      <path d="M32.2917 29.39H29.388C28.2881 29.39 27.9493 28.5175 25.9706 26.5126C24.2519 24.8464 23.4907 24.6251 23.067 24.6251C22.4683 24.6251 22.2983 24.7939 22.2983 25.6151V28.2388C22.2983 28.9425 22.077 29.365 20.2146 29.365C17.1347 29.365 13.7173 27.5026 11.3211 24.0327C7.70747 18.9478 6.71875 15.1392 6.71875 14.3517C6.71875 13.928 6.88749 13.5317 7.70122 13.5317H10.6111C11.3474 13.5317 11.6273 13.8705 11.9136 14.658C13.3523 18.8116 15.7485 22.4502 16.7372 22.4502C17.1022 22.4502 17.2709 22.2815 17.2709 21.3502V17.0604C17.1597 15.0817 16.1185 14.9117 16.1185 14.2092C16.1185 13.8705 16.3984 13.5317 16.8472 13.5317H21.4233C22.042 13.5317 22.2695 13.8705 22.2695 14.5992V20.3865C22.2695 21.0115 22.5495 21.2327 22.7182 21.2327C23.0832 21.2327 23.3957 21.0115 24.072 20.334C26.1619 17.9904 27.6593 14.3767 27.6593 14.3767C27.8543 13.953 28.1931 13.5567 28.9293 13.5567H31.8392C32.7117 13.5567 32.9067 14.0055 32.7117 14.6305C32.3467 16.3229 28.7856 21.349 28.7856 21.349C28.4793 21.8565 28.3618 22.0777 28.7856 22.644C29.098 23.0677 30.1143 23.9464 30.7905 24.7339C32.0342 26.1463 32.9904 27.3313 33.2454 28.1513C33.5317 28.965 33.1092 29.3887 32.2879 29.3887L32.2917 29.39Z" fill="white" />
                    </svg>
                  </a>

                  <a href="">
                    <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.0253906" width="40" height="41.7115" fill="#EB722E" />
                      <path d="M20.8385 6.40308C24.9614 6.40308 28.3135 9.75652 28.3135 13.8792C28.3135 18.0015 24.9614 21.353 20.8385 21.353C16.7155 21.353 13.3613 18.0015 13.3613 13.8792C13.3613 9.75652 16.7155 6.40308 20.8385 6.40308ZM20.759 10.7832C19.089 10.8257 17.7425 12.1995 17.7425 13.8792C17.7425 15.5849 19.1318 16.973 20.8385 16.973C22.545 16.973 23.9323 15.5849 23.9323 13.8792C23.9323 12.1729 22.5449 10.7832 20.8385 10.7832C20.8119 10.7832 20.7856 10.7825 20.759 10.7832ZM14.6487 21.6074C15.0447 21.6087 15.4442 21.7177 15.8045 21.9446C18.8645 23.8687 22.8093 23.87 25.8703 21.9446C26.8952 21.2992 28.246 21.609 28.8914 22.6337C29.5361 23.6568 29.2264 25.0093 28.2022 25.6537C26.867 26.4929 25.3995 27.1005 23.8619 27.4509L28.0422 31.6312C28.8979 32.4852 28.8979 33.8731 28.0422 34.7284C27.186 35.584 25.8008 35.584 24.9461 34.7284L20.8362 30.6208L16.7309 34.7284C16.3034 35.1561 15.7425 35.3698 15.1823 35.3698C14.6216 35.3698 14.0625 35.1555 13.6337 34.7284C12.7781 33.8726 12.7784 32.487 13.6337 31.6312L17.8117 27.4509C16.2903 27.104 14.8222 26.5019 13.4702 25.6537C12.4481 25.0093 12.1408 23.6582 12.7856 22.6337C13.1875 21.9933 13.8665 21.6315 14.5692 21.6085C14.5957 21.6076 14.6222 21.6073 14.6487 21.6074Z" fill="white" />
                    </svg>

                  </a>
                </div>

              </section>

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
