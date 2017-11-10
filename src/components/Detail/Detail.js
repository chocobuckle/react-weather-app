import React from 'react';
import PropTypes from 'prop-types';
import './Detail.css';
import DayItem from '../DayItem/DayItem';

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
    <div className='detail-container'>
      <DayItem forecast={forecast} />
      <h1>{city}</h1>
      <h1>{description}</h1>
      <h1>Min Temp: {min} °C</h1>
      <h1>Max Temp: {max} °C</h1>
      <h1>Humidity: {humidity}%</h1>
    </div>
  );
}

export default Detail;
