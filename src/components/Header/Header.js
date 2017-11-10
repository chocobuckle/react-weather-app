import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import './Header.css';

const formStyles = {
  container: {
    justifyContent: 'space-around',
    margin: '0.4em'
  },
  input: {},
  button: {
    marginLeft: '0.725em'
  }
};

function Header(props) {
  return (
    <div className='header-container' style={{ width: '100%' }}>
      <header>
        <Link to='/' className='header__h1'>Weather App</Link>
        <Form formStyles={formStyles} {...props} />
      </header>
    </div>
  );
}

export default Header;
