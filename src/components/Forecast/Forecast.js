import React, { Component } from 'react';
import queryString from 'query-string';
import { string, shape } from 'prop-types';
import axios from 'axios';
import './Forecast.css';
import Loading from '../Loading/Loading';
import formatDate from '../../utils/formatDate';


class Forecast extends Component {
  static propTypes = {
    location: shape({
      search: string
    }).isRequired
  }

  state = {
    loading: true
  }

  componentDidMount() {
    const { city } = queryString.parse(this.props.location.search);
    // const currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe`;
    const sevenDayForecastURL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7`;
    axios.get(sevenDayForecastURL)
      .then((response) => {
        const { city, list: forcastArr } = response.data;
        this.setState(() => {
          return {
            loading: false,
            city: city.name,
            forcastArr
          };
        });
      });
  }

  render() {
    // const date = new Date(response.data.list[0].dt * 1000);
    if (this.state.loading === true) {
      return <Loading />;
    }

    const { city, forcastArr } = this.state;
    const iconNames = forcastArr.map(forcast => forcast.weather[0].icon);
    const formattedDates = forcastArr.map(forcast => formatDate(forcast.dt));

    return (
      <div>
        <h1 className='forcast__h1'>{city}</h1>
        {
          iconNames.map((iconName, i) => {
            return (
              <img
                className='forcast__icon'
                src={`${process.env.PUBLIC_URL}weather-icons/${iconName}.svg`}
                alt='weather icon'
                key={i} // eslint-disable-line react/no-array-index-key
              />
            );
          })
        }
        {
          formattedDates.map(([day, month, date]) => {
            return (
              <h2
                className='forcast__date'
                key={day}>
                {day}, {month} {date}
              </h2>
            );
          })
        }
      </div>
    );
  }
}

export default Forecast;
