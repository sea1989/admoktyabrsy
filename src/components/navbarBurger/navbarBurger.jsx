import React, { useState } from 'react';
import './navbarBurger.css';
// import logo from '../../assets/images/menu-logo.png';

import { Link } from 'react-router-dom';

import { AccordionBurgerMenu } from '../accordionBurgerMenu';

export const NavbarBurger = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [active, setActive] = useState('');

  const gosList = [
    { id: 1, link: '/', title: 'Собрание депутатов' },
    { id: 2, link: '/', title: 'Председатель' },
    { id: 3, link: '/', title: 'Депутаты' },
    { id: 4, link: '/sessions', title: 'Депутаты' },
    { id: 5, link: '/acts', title: 'Нормативные правовые акты' },
    { id: 6, link: '/', title: 'Интернет - приёмная' },
    { id: 7, link: '/', title: 'Открытые данные' },
    { id: 8, link: '/', title: 'Сообщить о факте коррупции' },
    { id: 9, link: '/gallery', title: 'Галерея' },
    { id: 10, link: '/', title: 'Вопрос-ответ' },
  ];

  const admList = [
    { id: 1, link: '/', title: 'Глава администрации' },
    { id: 2, link: '/', title: 'Муниципальные служащие администрации' },
    { id: 3, link: '/', title: 'Руководители администрации' },
    { id: 4, link: '/', title: 'Публичные выступления руководителей Администрации' },
    { id: 5, link: '/', title: 'Полномочия Администрации' },
    { id: 6, link: '/', title: 'Муниципальная служба' },
    { id: 7, link: '/', title: 'Нормативные правовые акты' },
    { id: 8, link: '/', title: 'Статистическая информация' },
    { id: 9, link: '/', title: 'О муниципальном образовании' },
    { id: 10, link: '/', title: 'Подведомственные организации' },
  ];

  const eventsList = [
    { id: 1, link: '/events', title: 'Календарь событий' },
    { id: 2, link: '/last_events', title: 'Прошлые события' },
    { id: 3, link: '/current_events', title: 'Текущие события' },
    { id: 4, link: '/future_events', title: 'Будущие события' },
  ];

  return (
    <>
      <nav className='navbar-burger'>
        <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>

      <div
        className={menuActive ? 'menu active-burger' : 'menu'}
        onClick={() => setMenuActive(false)}
      >
        <div className='blur' />
        <div className='menu__content' onClick={(e) => e.stopPropagation()}>
          <a className='logo__container' href='/'>
            {/* <img className='logo-burger' src={logo} alt='Прима' width='160' /> */}
          </a>
          <span className='close-btn' onClick={() => setMenuActive(false)}>&times;</span>
          <ul className='burger-menu-list'>
            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/'>Главная</Link>
            </li>

            <li className='burger-menu-item'>
              <AccordionBurgerMenu
                title='Администрация'
                active={active}
                setActive={setActive}
                list={admList}
              />
            </li>

            <li className='burger-menu-item'>
              <AccordionBurgerMenu
                title='Собрание депутатов'
                active={active}
                setActive={setActive}
                list={gosList}
              />
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/info-po'>Информация по ГО и ЧС</Link>
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/news'>Новости</Link>
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/notice'>Объявления</Link>
            </li>


            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/feedback'>Обратная связь</Link>
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/feedback'>Открытые данные</Link>
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/'>Вопрос - ответ</Link>
            </li>


            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/'>Сообщить о факте коррупции</Link>
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/mao-site'>Карта сайта</Link>
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/'>Версия для слабовидящих</Link>
            </li>

          </ul>

        </div>
      </div>
    </>
  );
};
