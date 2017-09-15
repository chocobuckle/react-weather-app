import React, { Component } from 'react';
import queryString from 'query-string';
import { string, shape } from 'prop-types';
import axios from 'axios';
import Loading from '../Loading/Loading';


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
    // const currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=eaf616267bbf2cc9d4b24b9f0d52bbb4`;
    const sevenDayForecastURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=eaf616267bbf2cc9d4b24b9f0d52bbb4&cnt=7`;
    axios.get(sevenDayForecastURL)
      .then((response) => {
        console.log(response.data);
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
