import React from 'react';
import './Detail.css';
import DayItem from '../DayItem/DayItem';

function Detail({ location, match }) {
  const { forcast } = location.state;
  const city = match.params.city;
  const convertCase = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  const description = convertCase(forcast.weather[0].description);
  const minTemp = convertCase(forcast.temp.min.toString());
  const maxTemp = convertCase(forcast.temp.max.toString());
  const humidity = convertCase(forcast.humidity.toString());
  console.log(forcast);
  return (
    <div className='detail-container'>
      <DayItem
        forcast={forcast}
      />
      <h1>{city}</h1>
      <h1>{description}</h1>
      <h1>Min Temp: {minTemp}</h1>
      <h1>Max Temp: {maxTemp}</h1>
      <h1>Humidity: {humidity}</h1>
    </div>
  );
}

export default Detail;
