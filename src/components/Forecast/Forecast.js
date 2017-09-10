import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
// import { string } from 'prop-types';

class Forecast extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    const currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&type=accurate&APPID=eaf616267bbf2cc9d4b24b9f0d52bbb4`;
    // const fiveDayForecastURL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&APPID=eaf616267bbf2cc9d4b24b9f0d52bbb4`;
    axios.get(currentWeatherURL)
      .then((currentWeather) => {
        console.log(currentWeather.data);
        this.setState(() => {
          return {
            loading: false
          };
        });
      });
  }

  render() {
    const { loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div>
        Forecast Component
      </div>
    );
  }
}

export default Forecast;
