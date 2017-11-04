import React from 'react';
import { shape, string, bool, object } from 'prop-types';
import Form from '../Form/Form';
import './Home.css';

Home.propTypes = {
  match: shape({
    isExact: bool,
    params: object,
    path: string,
    url: string
  }).isRequired
};

function Home(props) {
  return (
    <div className='home-container'>
      <h1 className='home__h1'>Enter a City</h1>
      <Form flexDirection='column' {...props} />
    </div>
  );
}

export default Home;
