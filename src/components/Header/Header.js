import React from 'react';
import { shape, string, bool, object } from 'prop-types';
import Form from '../Form/Form';
import './Header.css';

function Header({ match }) {
  return (
    <div className='header-container'>
      <h1 className='header__h1'>Weather App</h1>
      <Form flexDirection='row' match={match} />
    </div>
  );
}

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

export default Header;
