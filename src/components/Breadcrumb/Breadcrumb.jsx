import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';



export const Breadcrumb = ({ list, currentPage }) => {



  return (
    <ul className="breadcrumb">

      {list.map((item) => (
        <li key={item.id} className='breadcrumb__item'><Link to={item.link}>{item.title}</Link></li>
      ))}

      <li className='breadcrumb__item breadcrumb__item__active'>{currentPage}</li>
    </ul>
  );
};
