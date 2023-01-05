import React from 'react';
import './home-page.css';

import Promo from '../../components/Promo/Promo';
import Multisection from '../../components/Multisection/Multisection';
import Service from '../../components/Service/Service';
import Resources from '../../components/Resources/Resources';


export const HomePage = () => {
  return (
    <main>
      <Promo />
      <Multisection />
      <Service />
      <Resources />
    </ main>
  );
};
