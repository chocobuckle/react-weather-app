import React, { Component } from 'react';
import axios from 'axios';
import { string } from 'prop-types';
import './Form.css';

class Form extends Component {
  static propTypes = {
    flexDirection: string.isRequired
  };

  state = {
    cityName: ''
  }

  handleOnChange = (e) => {
    const { value } = e.target;
    this.setState(() => {
      return {
        cityName: value
      };
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&type=accurate&APPID=eaf616267bbf2cc9d4b24b9f0d52bbb4`;
    // const fiveDayForecastURL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&APPID=eaf616267bbf2cc9d4b24b9f0d52bbb4`;
    axios.get(currentWeatherURL)
      .then((currentWeather) => {
        console.log(currentWeather.data);
      });
  }

  render() {
    const { cityName } = this.state;

    return (
      <form className='form' style={{flexDirection: this.props.flexDirection}} onSubmit={e => this.handleOnSubmit(e)}>
        <input
          onChange={e => this.handleOnChange(e)}
          value={cityName}
          className='form__input'
          type='text'
          placeholder='Dublin'
        />
        <button type='submit' className='form__button'>Get Weather</button>
      </form>
    );
  }
}

export default Form;
