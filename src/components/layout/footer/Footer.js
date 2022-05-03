import React from 'react';
import Adress from './Adress';
import './footer.css';
import Map from './Map';
import Social from './Social';

const Footer = () => (
  <>
    <div className={'footer'}>
      <Adress />
      <Social />
      <Map />
      <div>
        <p>Copyright Party Animal 2022</p>
      </div>
    </div>
  </>
);

export default Footer;
