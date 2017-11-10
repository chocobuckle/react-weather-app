import React from 'react';
import Form from '../Form/Form';
import './Home.css';

const formStyles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    margin: '0.4em auto'
  },
  button: {
    width: '7em'
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
