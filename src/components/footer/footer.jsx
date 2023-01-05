import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

// import { Navbar } from '../navbar/navbar';

// import FooterLogo from '../../assets/images/logo-footer.png';

export const Footer = () => {
  return (
    <footer className='footer'>

      <div className="container">

        <div className="footer__wrapper">

          <div className="footer__logo">
            <Link className='logo__container' to='/'>
              {/* <img className='logo' src={FooterLogo} alt='Клио' /> */}
            </Link>

            <p className='footer__description'>
              Органы местного самоуправления <br />
              <b>Октябрьского городского поселения</b>
              <br />
              Усть-Большерецкого муниципального района Камчатского края
            </p>
          </div>

          <nav className='footer__navbar'>
            <ul className='footer__navbar__list'>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='#'>
                  Главная
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/administration'>
                  Администрация
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/assembly'>
                  Собрание депутатов
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/info_go'>
                  Информация по ГО и ЧС
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/news'>
                  Новости
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/notice'>
                  Объявления
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/answer'>
                  Вопрос - ответ
                </Link>
              </li>

            </ul>

            <ul className='footer__navbar__list'>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/message'>
                  Сообщить о факте коррупции
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/info_open'>
                  Открытые данные
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/test_data'>
                  Проверить обращение
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/statistik'>
                  Статистика обращений
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/site_map'>
                  Карта сайта
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/feedback'>
                  Обратная связь
                </Link>
              </li>

              <li className='footer__navbar__item'>
                <Link className='footer__navbar__link' to='/test_data'>
                  Версия для слабовидящих
                </Link>
              </li>

            </ul>

          </nav>

          <ul className='footer__navbar__list'>

            <li className='footer__navbar__item'>
              <div className='footer__navbar__link'>
                Представительства в социальных медиа:
              </div>
            </li>

            <div className="footer__social">

              <a href="/">
                <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="37.852" height="39.4716" fill="white" />
                  <path d="M30.5572 27.8116H27.8095C26.7686 27.8116 26.448 26.986 24.5756 25.0887C22.9492 23.512 22.2289 23.3026 21.8279 23.3026C21.2613 23.3026 21.1004 23.4623 21.1004 24.2394V26.7222C21.1004 27.3881 20.8911 27.7879 19.1286 27.7879C16.2141 27.7879 12.9803 26.0255 10.7128 22.7419C7.29317 17.9302 6.35754 14.3261 6.35754 13.5809C6.35754 13.1799 6.51723 12.8049 7.28725 12.8049H10.0409C10.7376 12.8049 11.0025 13.1255 11.2734 13.8707C12.6349 17.8012 14.9024 21.2445 15.838 21.2445C16.1834 21.2445 16.3431 21.0848 16.3431 20.2036V16.1441C16.2378 14.2717 15.2525 14.1108 15.2525 13.446C15.2525 13.1255 15.5174 12.8049 15.9421 12.8049H20.2724C20.8579 12.8049 21.0732 13.1255 21.0732 13.8151V19.2916C21.0732 19.883 21.3382 20.0924 21.4979 20.0924C21.8433 20.0924 22.139 19.883 22.7789 19.2419C24.7566 17.0241 26.1736 13.6045 26.1736 13.6045C26.3581 13.2035 26.6787 12.8286 27.3754 12.8286H30.129C30.9546 12.8286 31.1392 13.2532 30.9546 13.8446C30.6093 15.4462 27.2394 20.2024 27.2394 20.2024C26.9496 20.6826 26.8384 20.892 27.2394 21.4278C27.5351 21.8288 28.4967 22.6603 29.1366 23.4055C30.3135 24.7421 31.2184 25.8635 31.4597 26.6394C31.7306 27.4094 31.3308 27.8104 30.5537 27.8104L30.5572 27.8116Z" fill="#007CC3" />
                </svg>
              </a>

              <a href="/">
                <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.953125" width="37.852" height="39.4716" fill="white" />
                  <path d="M20.6487 6.05933C24.5502 6.05933 27.7223 9.23269 27.7223 13.134C27.7223 17.0349 24.5502 20.2065 20.6487 20.2065C16.7471 20.2065 13.573 17.0349 13.573 13.134C13.573 9.23269 16.7471 6.05933 20.6487 6.05933ZM20.5735 10.2042C18.9931 10.2444 17.7189 11.5445 17.7189 13.134C17.7189 14.7481 19.0336 16.0616 20.6487 16.0616C22.2635 16.0616 23.5763 14.7481 23.5763 13.134C23.5763 11.5193 22.2635 10.2042 20.6487 10.2042C20.6235 10.2042 20.5986 10.2036 20.5735 10.2042ZM14.7913 20.4472C15.166 20.4484 15.5441 20.5515 15.885 20.7662C18.7807 22.587 22.5136 22.5882 25.4103 20.7662C26.3801 20.1555 27.6584 20.4487 28.2691 21.4184C28.8792 22.3865 28.5861 23.6664 27.617 24.2762C26.3534 25.0703 24.9648 25.6453 23.5097 25.9769L27.4655 29.9327C28.2753 30.7408 28.2753 32.0542 27.4655 32.8635C26.6553 33.6732 25.3445 33.6732 24.5357 32.8635L20.6465 28.9765L16.7617 32.8635C16.3571 33.2683 15.8263 33.4705 15.2962 33.4705C14.7656 33.4705 14.2366 33.2677 13.8308 32.8635C13.0211 32.0537 13.0214 30.7425 13.8308 29.9327L17.7845 25.9769C16.3447 25.6486 14.9555 25.0788 13.6761 24.2762C12.7089 23.6664 12.418 22.3878 13.0283 21.4184C13.4086 20.8123 14.051 20.47 14.7161 20.4482C14.7412 20.4474 14.7662 20.4471 14.7913 20.4472Z" fill="#007CC3" />
                </svg>

              </a>

            </div>

          </ul>

        </div>

        <div className="footer__bottom">
          <p>
            © 2012 - 2022 Органы местного самоуправления Октябрьского городского поселения <br />
            Усть-Большерецкого муниципального района Камчатского края

          </p>
        </div>


      </div>

    </footer>
  );
};
