import React from 'react';
import { Link } from 'react-router-dom';
import News from '../News/News';
import Notice from '../Notice/Notice';
import Warning from '../Warning/Warning';

import './Multisection.css';

const Multisection = () => {

  return (


    <div className="container">
      <section className='multisection'>

        <div className="multisection-panel">
          <Link className='multisection-panel__item'>
            <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.125 20.125H32.8125" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.125 25.875H32.8125" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.375 35.9375C7.15407 35.9375 7.90124 35.6346 8.45213 35.0954C9.00301 34.5563 9.3125 33.825 9.3125 33.0625V11.5C9.3125 11.1188 9.46724 10.7531 9.74269 10.4835C10.0181 10.214 10.3917 10.0625 10.7812 10.0625H40.1562C40.5458 10.0625 40.9194 10.214 41.1948 10.4835C41.4703 10.7531 41.625 11.1188 41.625 11.5V33.0625C41.625 33.825 41.3155 34.5563 40.7646 35.0954C40.2137 35.6346 39.4666 35.9375 38.6875 35.9375H6.375Z" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.375 35.9375C5.59593 35.9375 4.84876 35.6346 4.29787 35.0954C3.74699 34.5563 3.4375 33.825 3.4375 33.0625V17.9688H7.84375" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            <p>Открытые данные </p>
          </Link>

          <Link className='multisection-panel__item'>
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62746 25.282C5.01631 22.5676 4.45159 19.3583 5.03936 16.257C5.62713 13.1556 7.32695 10.3755 9.81958 8.43886C12.3122 6.50219 15.4262 5.54218 18.5766 5.73912C21.727 5.93607 24.6971 7.27642 26.9291 9.50845C29.1612 11.7405 30.5015 14.7106 30.6985 17.861C30.8954 21.0114 29.9354 24.1254 27.9987 26.618C26.0621 29.1106 23.282 30.8105 20.1806 31.3982C17.0793 31.986 13.87 31.4213 11.1556 29.8101L6.68137 31.0859C6.49702 31.1377 6.3022 31.1395 6.11693 31.0911C5.93166 31.0427 5.76263 30.9458 5.62722 30.8104C5.49181 30.675 5.39491 30.5059 5.34649 30.3207C5.29806 30.1354 5.29985 29.9406 5.35168 29.7562L6.62746 25.282Z" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.0493 31.607C17.6826 33.4126 18.7091 35.055 20.0545 36.4155C21.4 37.776 23.0308 38.8207 24.8293 39.474C26.6277 40.1274 28.5488 40.3731 30.4538 40.1934C32.3588 40.0138 34.2001 39.4132 35.8446 38.4351V38.4351L40.3188 39.7109C40.5032 39.7627 40.698 39.7645 40.8833 39.7161C41.0686 39.6677 41.2376 39.5708 41.373 39.4354C41.5084 39.3 41.6053 39.1309 41.6537 38.9457C41.7022 38.7604 41.7004 38.5656 41.6485 38.3812L40.3728 33.907C41.5117 31.9952 42.1376 29.8215 42.1896 27.5967C42.2416 25.3719 41.7181 23.1714 40.6697 21.2084C39.6213 19.2454 38.0836 17.5865 36.2057 16.3924C34.3278 15.1984 32.1732 14.5096 29.9509 14.3929" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p>Вопрос - ответ</p>
          </Link>

          <Link className='multisection-panel__item'>
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.75 21.5625C25.6891 21.5625 32.125 18.6663 32.125 15.0938C32.125 11.5212 25.6891 8.625 17.75 8.625C9.81091 8.625 3.375 11.5212 3.375 15.0938C3.375 18.6663 9.81091 21.5625 17.75 21.5625Z" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.375 15.0938V22.2812C3.375 25.857 9.80781 28.75 17.75 28.75C25.6922 28.75 32.125 25.857 32.125 22.2812V15.0938" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 21.0234V28.2109" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32.125 17.3757C38.6836 17.9867 43.625 20.5921 43.625 23.7187C43.625 27.2945 37.1922 30.1875 29.25 30.1875C25.7281 30.1875 22.4937 29.6125 19.9961 28.6781" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.875 28.6242V30.9062C14.875 34.482 21.3078 37.375 29.25 37.375C37.1922 37.375 43.625 34.482 43.625 30.9062V23.7188" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M35 29.6484V36.8359" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M23.5 21.0234V36.8359" stroke="#007CC3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            <p>Сообщить о факте коррупции</p>
          </Link>
        </div>

        <div className="multisection-wrapper">
          <div className="multisection1">
            <News />
          </div>

          <div className="multisection2">
            <Warning />
          </div>

          <div className="multisection3">
            <Notice />
          </div>
        </div>



      </section>
    </div >


  );
};

export default Multisection;