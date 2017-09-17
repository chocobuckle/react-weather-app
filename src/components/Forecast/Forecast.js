import React, { Component } from 'react';
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
    if (this.state.loading === true) {
      return <Loading />;
    }

    const { city, forcastArr } = this.state;

    return (
      <div className='forcast-container'>
        <h1 className='forcast__h1'>{city}</h1>
        <div className='forcast__grid'>
          {
            forcastArr.map((forcast) => {
              return (
                <DayItem
                  forcast={forcast}
                  key={forcast.dt}
                  city={city}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Forecast;
