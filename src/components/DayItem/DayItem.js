import React from 'react';
import { shape, number, array, bool } from 'prop-types';
import formatDate from '../../utils/formatDate';
import './DayItem.css';

DayItem.propTypes = {
  detailScreen: bool,
  forecast: shape({
    dt: number,
    weather: array
  }).isRequired
};

function DayItem(props) {
  return (
    <div className='day-item-container'>
      <img
        className='day-item__icon'
        src={`${process.env.PUBLIC_URL}/weather-icons/${props.forecast.weather[0].icon}.svg`}
        alt='weather icon'
      />
      <h2 className={props.detailScreen ? 'day-item__date--detailScreen' : 'day-item__date'}>
        {formatDate(props.forecast.dt)}
      </h2>
    </div>
  );
}

export default DayItem;
