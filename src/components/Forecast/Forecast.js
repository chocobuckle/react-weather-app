import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { string, shape } from 'prop-types';
import axios from 'axios';
import './Forecast.css';
import Loading from '../Loading/Loading';
import DayItem from '../DayItem/DayItem';

class Forecast extends Component {
  static propTypes = {
    location: shape({
      search: string
    }).isRequired
  }

  state = {
    error: false,
    loading: true
  }

  componentDidMount() {
    const { city } = queryString.parse(this.props.location.search);
    // const currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe`;
    const sevenDayForecastURL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7`;
    axios.get(sevenDayForecastURL)
      .then(response => {
        const { city, list: forecastArr } = response.data;
        this.setState({
          error: false,
          loading: false,
          city: city.name,
          forecastArr
        });
      })
      .catch(error => {
        console.warn(error);
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.error === true) {
      return (
        <div className='forecast__error'>
          <h2>No data available for that city.</h2>
          <h2>Please <Link to='/' className='forecast__error__link'>choose another city.</Link></h2>
        </div>
      )
    }

    if (this.state.loading === true) {
      return <Loading />;
    }

    const { city, forecastArr } = this.state;

    return (
      <div className='forecast-container'>
        <h1 className='forecast__h1'>{city}</h1>
        <div className='forecast__grid'>
          {forecastArr.map(forecast => {
            return (
              <Link
                className='forecast__grid__link'
                key={forecast.dt}
                to={{
                  pathname: `/detail/${city}`,
                  state: { forecast }
                }}>
                  <DayItem forecast={forecast} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Forecast;
