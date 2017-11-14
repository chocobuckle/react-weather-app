import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import patternImg from '../pattern.svg';

const Wrapper = styled.section`
  align-items: center;
  background-image: url(${patternImg});
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`;

const EnterACity = styled.h1`
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  font-size: 09vw;
  font-weight: 100;
  margin: 0;

  @media (min-width: 37.5em) {
    font-size: 8vw;
  }

  @media (min-width: 46.563em) {
    font-size: 3rem;
  }
`;

function Home(props) {
  return (
    <Wrapper>
      <EnterACity>Enter a City</EnterACity>
      <Form parentIsHomeComponent {...props} />
    </Wrapper>
  );
}

export default Home;
