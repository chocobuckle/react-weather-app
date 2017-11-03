import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string, bool, object } from 'prop-types';
import Form from '../Form/Form';
import './Header.css';

Header.propTypes = {
  match: shape({
    isExact: bool,
    params: object,
    path: string,
    url: string
  }).isRequired
};

Header.defaultProps = {
  match: {}
};

function Header({ match }) {
  return (
    <div className='header-container'>
      <Link to='/' className='header__h1'>Weather App</Link>
      <Form flexDirection='row' match={match} />
    </div>
  );
}

export default Header;
