import React from 'react';
import Adress from './Adress';
import './footer.css';
import Map from './Map';
import Social from './Social';

const Footer = () => (
  <div className={'footer'}>
    <Adress />
    <Map />
    <Social />
    <p>Footer</p>
  </div>
);

export default Footer;
