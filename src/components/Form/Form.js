import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import './Form.css';

class Form extends Component {
  static propTypes = {
    flexDirection: string.isRequired
  }

  state = {
    cityName: ''
  }

  handleOnChange = (e) => {
    // This line caters for when the user is typing in the input, and also when they select
    // a city name from the autocomplete drop-down menu.
    const value = e.target ? e.target.value : e.formatted_address;
    this.setState({
      cityName: value
    });
  }

  render() {
    const { cityName } = this.state;
    const { match } = this.props;

    return (
      <form className='form' style={{flexDirection: this.props.flexDirection}}>
        <Autocomplete
          onChange={(e) => {
            this.handleOnChange(e);
          }}
          onPlaceSelected={(e) => {
            this.handleOnChange(e);
          }}
          className='form__input'
          placeholder='Dublin, Ireland'
          types={['(regions)']}
          value={cityName}
        />
        <Link
          className='form__button'
          to={cityName && {
            pathname: `${match.url}forecast`,
            search: `?city=${cityName}`
          }}>
          Get Weather
        </Link>
      </form>
    );
  }
}

export default Form;
