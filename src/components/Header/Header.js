import React from 'react';
import Form from '../Form/Form';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      <h1 className='header__h1'>Weather App</h1>
      <Form flexDirection='row' />
    </div>
  );
}

export default Header;
