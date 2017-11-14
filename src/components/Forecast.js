import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { string, shape } from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import Loading from './Loading';
import DayItem from './DayItem';

function headerFonts() {
  return `
  color: #808080;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  font-weight: 100;
  `;
}

const ForecastWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ForecastHeader = styled.h1`
  ${headerFonts()}
  font-size: 9.5vw;
  margin: 0.2em 0;

  @media (min-width: 31.875em) {
    font-size: 8.75vw;
  }

  @media (min-width: 37.5em) {
    font-size: 8vw;
  }

  @media (min-width: 46.563em) {
    font-size: 3.25rem;
  }
`;

const ForeCastGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 85%;
`;

const ForeCastGridRRLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 0 3%;
  text-align: center;
  text-decoration: none;
`;

const ErrorWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

const ErrorHeader = styled.h2`
  ${headerFonts()}
  bottom: 6.5vh;
  font-size: 5.5vw;
  margin: 0;
  position: relative;
  &:nth-child(2) {
    margin-top: 0.1em;
  }

  @media (min-width: 31.875em) {
    font-size: 4.25vw;
  }

  @media (min-width: 37.5em) {
    font-size: 3.75vw;
  }

  @media (min-width: 46.563em) {
    font-size: 1.95rem;
  }
`;

const ErrorRRLink = styled(Link)`
  font-weight: 400;
  &:visited {
    color: #808080;
  }
`;

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
    this.getWeatherData(this.props.location.search);
  }

  componentDidUpdate(prevProps) {
    const prevQueryString = prevProps.location.search;
    const newQueryString = this.props.location.search;
    if (newQueryString !== prevQueryString) this.getWeatherData(newQueryString);
  }

  getWeatherData(str) {
    const { city } = queryString.parse(str);
    const sevenDayForecastURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7`;
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
          loading: false
        });
      });
  }


  render() {
    if (this.state.error === true) {
      return (
        <ErrorWrapper>
          <ErrorHeader>No data available for that city.</ErrorHeader>
          <ErrorHeader>Please <ErrorRRLink to='/'>choose another city.</ErrorRRLink></ErrorHeader>
        </ErrorWrapper>
      );
    }

    if (this.state.loading === true) {
      return <Loading />;
    }

    const { city, forecastArr } = this.state;

    return (
      <ForecastWrapper>
        <ForecastHeader>{city}</ForecastHeader>
        <ForeCastGrid>
          {forecastArr.map(forecast => {
            return (
              <ForeCastGridRRLink
                key={forecast.dt}
                to={{
                  pathname: `/detail/${city}`,
                  state: { forecast }
                }}>
                <DayItem forecast={forecast} />
              </ForeCastGridRRLink>
            );
          })}
        </ForeCastGrid>
      </ForecastWrapper>
    );
  }
}

export default Forecast;
