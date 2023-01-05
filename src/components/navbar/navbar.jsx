import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {


  return (
    <nav className='header__navbar'>
      <ul className='nav__list'>

        <li className='nav__item'>
          <Link className='nav__link nav__link--active' to='/'>
            Главная
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/administration'>
            Администрация
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/current-projects'>
            Собрание депутатов
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/info-po'>
            Информация по ГО и ЧС
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/events'>
            Новости
          </Link>
        </li>

        <li className='nav__item'>
          <Link className='nav__link' to='/docs'>
            Объявления
          </Link>
        </li>

      </ul>

    </nav>
  );
};
