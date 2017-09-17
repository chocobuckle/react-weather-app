import React from 'react';
import { shape, number, object } from 'prop-types';
import formatDate from '../../utils/formatDate';
import './DayItem.css';

function DayItem({ forcast }) {
  return (
    <div className='day-item__icon-date-wrapper' key={forcast.dt}>
      <img
        className='day-item__icon'
        src={`${process.env.PUBLIC_URL}weather-icons/${forcast.weather[0].icon}.svg`}
        alt='weather icon'
      />
      <h2 className='day-item__date'>{formatDate(forcast.dt)}</h2>
    </div>
  );
}

DayItem.propTypes = {
  forcast: shape({
    dt: number,
    weather: object
  }).isRequired
};

export default DayItem;
