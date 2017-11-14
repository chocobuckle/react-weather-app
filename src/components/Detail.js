import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DayItem from './DayItem';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 1.5em;
  text-align: center;
`;

const Header = styled.h1`
  color: #808080;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  font-size: 7vw;
  font-weight: 100;
  margin: 0;

  @media (min-width: 31.875em) {
    font-size: 6vw;
  }

  @media (min-width: 37.5em) {
    font-size: 5vw;
  }

  @media (min-width: 46.563em) {
    font-size: 2.5rem;
  }
`;

Detail.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

function Detail({ location, match }) {
  const { forecast } = location.state;
  const { city } = match.params;
  // Capitalises the first letter of each word...
  const convertCase = str => str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  const description = convertCase(forecast.weather[0].description);
  const { min, max } = forecast.temp;
  const { humidity } = forecast;
  return (
    <Wrapper>
      <DayItem detailScreen forecast={forecast} />
      <Header style={{ fontWeight: '400' }}>{city}</Header>
      <Header>{description}</Header>
      <Header>Min Temp: {min} °C</Header>
      <Header>Max Temp: {max} °C</Header>
      <Header>Humidity: {humidity}%</Header>
    </Wrapper>
  );
}

export default Detail;
