import React from 'react';
import Form from '../Form/Form';
import './Home.css';

const formStyles = {
  container: {
  },
  input: {

  },
  button: {

  }
};

function Home(props) {
  return (
    <div className='home-container'>
      <h1 className='home__h1'>Enter a City</h1>
      <Form formStyles={formStyles} {...props} />
    </div>
  );
}

export default Home;
