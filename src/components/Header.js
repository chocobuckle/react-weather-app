import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from './Form';

// This outer wrapper with 'width: 100% ' is to prevent margin/padding collapse of sub elements
const OuterWrapper = styled.div`
  width: 100%
`;

const Wrapper = styled.section`
  align-items: center;
  background-color: #fc6c43;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 46.563em) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.1em 0.525em;
  }
`;

const RRLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  font-size: 11vw;
  font-weight: 100;
  text-decoration: none;

  @media (min-width: 31.875em) {
    font-size: 9.75vw;
  }

  @media (min-width: 37.5em) {
    font-size: 8.75vw;
  }

  @media (min-width: 46.563em) {
    bottom: 0.105em;
    font-size: 3.3rem;
    position: relative;
  }
`;

function Header(props) {
  return (
    <OuterWrapper>
      <Wrapper>
        <RRLink to='/'>Weather App</RRLink>
        <Form parentIsHeaderComponent {...props} />
      </Wrapper>
    </OuterWrapper>
  );
}

export default Header;
