import React from 'react';
import Form from '../Form/Form';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <h1 className='home__h1'>Enter a City</h1>
      <Form flexDirection='column' />
    </div>
  );
}

export default Home;
