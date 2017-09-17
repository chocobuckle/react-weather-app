import React from 'react';
import { shape, number, array, string } from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import './DayItem.css';

function DayItem({ city, forcast }) {
  return (
    <Link
      className='day-item__icon-date-wrapper'
      to={{
        pathname: `/detail/${city}`
      }}>
      <img
        className='day-item__icon'
        src={`${process.env.PUBLIC_URL}weather-icons/${forcast.weather[0].icon}.svg`}
        alt='weather icon'
      />
      <h2 className='day-item__date'>{formatDate(forcast.dt)}</h2>
    </Link>
  );
}

DayItem.propTypes = {
  city: string.isRequired,
  forcast: shape({
    dt: number,
    weather: array
  }).isRequired
};

export default DayItem;
