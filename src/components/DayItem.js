import React from 'react';
import { shape, number, array, bool } from 'prop-types';
import styled from 'styled-components';
import formatDate from '../utils/formatDate';

function dateFont() {
  return `
    color: #808080;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    font-weight: 100;
    margin: 0 0 6vh;
    text-decoration: none;
  `;
}
const Wrapper = styled.div`
  text-decoration: none;
  width: 100%;
`;

const Icon = styled.img`
  height: 25vh;
  width: 100%;

  @media (min-width: 46.563em) {
    margin-bottom: 1.1em;
  }
`;

const ForecastScreenDate = styled.h2`
  ${dateFont()}
  font-size: 6.5vw;

  @media (min-width: 31.875em) {
    font-size: 8vw;
  }

  @media (min-width: 37.5em) {
    font-size: 5.75vw;
  }

  @media (min-width: 46.563em) {
    font-size: 2rem;
  }
`;

const DetailScreenDate = styled.h2`
  ${dateFont()}
  font-size: 9vw;

  @media (min-width: 31.875em) {
    font-size: 8vw;
  }

  @media (min-width: 37.5em) {
    font-size: 6.75vw;
  }

  @media (min-width: 46.563em) {
    font-size: 3rem;
  }
`;

DayItem.propTypes = {
  detailScreen: bool,
  forecast: shape({
    dt: number,
    weather: array
  }).isRequired
};

function DayItem(props) {
  const formatttedDate = formatDate(props.forecast.dt);
  return (
    <Wrapper>
      <Icon
        src={`${process.env.PUBLIC_URL}/weather-icons/${props.forecast.weather[0].icon}.svg`}
        alt='weather icon'
      />
      {props.detailScreen
        ? <DetailScreenDate>{formatttedDate}</DetailScreenDate>
        : <ForecastScreenDate>{formatttedDate}</ForecastScreenDate>}
    </Wrapper>
  );
}

export default DayItem;
