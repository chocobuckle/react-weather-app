import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import './Header.css';

function Header(props) {
  return (
    <div className='header-container' style={{ width: '100%' }}>
      <header>
        <Link to='/' className='header__h1'>Weather App</Link>
        <Form parentIsHeaderComponent {...props} />
      </header>
    </div>
  );
}

export default Header;
