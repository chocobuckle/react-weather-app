import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className='home__h1'>Enter a Town and City</h1>
        <form>
          <input className='home__input' type='text' placeholder='Rathmines, Dublin' />
          <button className='home__button'>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Home;
