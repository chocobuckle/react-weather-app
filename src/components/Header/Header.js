import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <h1 className='header__h1'>Weather App</h1>
        <form className='header__form'>
          <input className='header__input' type='text' placeholder='Rathmines, Dublin' />
          <button className='header__button'>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Header;
