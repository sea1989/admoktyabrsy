import React, { useState } from 'react';
import './navbarBurger.css';
// import logo from '../../assets/images/menu-logo.png';

import { Link } from 'react-router-dom';

import { AccordionBurgerMenu } from '../accordionBurgerMenu';

export const NavbarBurger = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [active, setActive] = useState('');

  const projectsList = [
    { id: 1, link: '/current-projects', title: 'Текущие проекты' },
    { id: 2, link: '/last-projects', title: 'Завершенные проекты' },
  ];

  const aboutList = [
    { id: 1, link: '/about', title: 'О нас' },
    { id: 2, link: '/history', title: 'История организации' },
    { id: 3, link: '/team', title: 'Команда' },
    { id: 4, link: '/partners', title: 'Партнёры' },
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
                title='О нас'
                active={active}
                setActive={setActive}
                list={aboutList}
              />
            </li>

            <li className='burger-menu-item'>
              <AccordionBurgerMenu
                title='Проекты'
                active={active}
                setActive={setActive}
                list={projectsList}
              />
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/news'>Новости</Link>
            </li>

            <li className='burger-menu-item'>
              <AccordionBurgerMenu
                title='События'
                active={active}
                setActive={setActive}
                list={eventsList}
              />
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/contacts'>Контакты</Link>
            </li>

            <li className='burger-menu-item'>
              <Link className='burger-menu-link' to='/'>Версия для слабовидящих</Link>
            </li>

          </ul>

          <Link className='btn-white'>
            помочь
          </Link>

        </div>
      </div>
    </>
  );
};
