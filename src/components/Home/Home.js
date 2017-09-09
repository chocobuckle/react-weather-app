import React from 'react';
import { shape, string, bool, object } from 'prop-types';
import Form from '../Form/Form';
import './Home.css';

function Home({ match }) {
  return (
    <div className='home-container'>
      <h1 className='home__h1'>Enter a City</h1>
      <Form flexDirection='column' match={match} />
    </div>
  );
}

Home.propTypes = {
  match: shape({
    isExact: bool,
    params: object,
    path: string,
    url: string
  }).isRequired
};

export default Home;
