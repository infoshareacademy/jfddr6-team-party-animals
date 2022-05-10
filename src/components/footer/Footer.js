import React from 'react';
import Address from './Address';
import './footer.css';
import Map from './Map';
import Social from './Social';

const Footer = () => (
  <>
    <footer className={'footer'}>
      <Address />
      <Map />
      <Social />
    </footer>
    <div className={'footer2'}>Copyright Party Animals 2022</div>
  </>
);

export default Footer;
