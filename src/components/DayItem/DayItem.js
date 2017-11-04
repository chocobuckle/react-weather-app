import React from 'react';
import { shape, number, array } from 'prop-types';
import formatDate from '../../utils/formatDate';
import './DayItem.css';

DayItem.propTypes = {
  forecast: shape({
    dt: number,
    weather: array
  }).isRequired
};

function DayItem({ forecast }) {
  return (
    <div className='day-item-container'>
      <img
        className='day-item__icon'
        src={`${process.env.PUBLIC_URL}/weather-icons/${forecast.weather[0].icon}.svg`}
        alt='weather icon'
      />
      <h2 className='day-item__date'>{formatDate(forecast.dt)}</h2>
    </div>
  );
}

export default DayItem;
