import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';


export const Sidenav = ({ list }) => {


  return (
    <div className="sidenav">

      {list.map((item) => (
        <Link key={item.id} className={item.currentPage ? 'sidenav__item sidenav__item--active' : 'sidenav__item'} to={item.link}>{item.title}</Link>
      ))}

    </div>

  );
};
