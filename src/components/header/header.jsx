import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import { Navbar } from '../navbar/navbar';

import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';

import { NavbarBurger } from '../navbarBurger/navbarBurger';

export const Header = () => {
  return (
    <header className='header'>

      <div className="header__top">
        <div className="container">
          <div className="header__top-wrapper">
            <a className="special" href="/">версия для слабовидящих</a>
            <a className="site-map" href="/">Карта сайта</a>
          </div>

          <NavbarBurger />
        </div>
      </div>


      <div className="header-wrapper">
        <div className="container">
          <div className="logo-wrapper">

            <div className="logo-wrapper__img">
              <Link className='logo__container' to='/'>
                <img className='logo' src={logo1} alt='logo' />
              </Link>

              <Link className='logo__container' to='/'>
                <img className='logo2' src={logo2} alt='logo2' />
              </Link>

              <Link className='logo__container' to='/'>
                <img className='logo3' src={logo3} alt='logo3' />
              </Link>
            </div>

            <p className='header__description'>
              Органы местного самоуправления<br />
              <b>Октябрьского городского поселения</b><br />
              Усть-Большерецкого муниципального района Камчатского края
            </p>
          </div>

          <div className="header__bottom">
            <Navbar />

            <button className='btn-feedback' >Обратная связь</button>
          </div>


        </div>

      </div>

    </header>
  );
};
