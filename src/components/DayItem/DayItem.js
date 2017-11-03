import React from 'react';
import { shape, number, array } from 'prop-types';
import formatDate from '../../utils/formatDate';
import './DayItem.css';

DayItem.propTypes = {
  forcast: shape({
    dt: number,
    weather: array
  }).isRequired
};

function DayItem({ forcast }) {
  return (
    <div className='day-item-container'>
      <img
        className='day-item__icon'
        src={`${process.env.PUBLIC_URL}/weather-icons/${forcast.weather[0].icon}.svg`}
        alt='weather icon'
      />
      <h2 className='day-item__date'>{formatDate(forcast.dt)}</h2>
    </div>
  );
}

export default DayItem;
