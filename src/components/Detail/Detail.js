import React from 'react';
import './Detail.css';
import DayItem from '../DayItem/DayItem';

function Detail({ location, match }) {
  const { forecast } = location.state;
  const city = match.params.city;
  const convertCase = str => str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  const description = convertCase(forecast.weather[0].description);
  const minTemp = convertCase(forecast.temp.min.toString());
  const maxTemp = convertCase(forecast.temp.max.toString());
  const humidity = convertCase(forecast.humidity.toString());
  return (
    <div className='detail-container'>
      <DayItem forecast={forecast} />
      <h1>{city}</h1>
      <h1>{description}</h1>
      <h1>Min Temp: {minTemp}</h1>
      <h1>Max Temp: {maxTemp}</h1>
      <h1>Humidity: {humidity}</h1>
    </div>
  );
}

export default Detail;
