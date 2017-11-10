import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-google-autocomplete';
import './Form.css';

class Form extends Component {
  static propTypes = {
    formStyles: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object,
    push: PropTypes.object
  }

  state = {
    cityName: '',
    formStyles: this.props.formStyles
  }

  handleOnChange = e => {
    // This line caters for when the user is typing in the input, and also when they select
    // a city name from the autocomplete drop-down menu.
    const value = e.target ? e.target.value : e.formatted_address;
    this.setState({
      cityName: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { cityName } = this.state;
    const { match } = this.props;
    if (cityName) {
      this.props.history.push({
        pathname: `${match.url}forecast`,
        search: `?city=${cityName}`
      });
    }
    this.setState({
      cityName: ''
    });
  }

  render() {
    const { cityName, formStyles } = this.state;
    return (
      <form
        className='form'
        onSubmit={this.handleSubmit}
        style={formStyles.container}>
        <Autocomplete
          className='form__input'
          onChange={e => this.handleOnChange(e)}
          onPlaceSelected={e => this.handleOnChange(e)}
          placeholder='Dublin, Ireland'
          style={formStyles.input}
          types={['(regions)']}
          value={cityName}
        />
        <button
          className='form__button'
          style={formStyles.button}
          type='submit'>Get Weather
        </button>
      </form>
    );
  }
}

export default Form;
