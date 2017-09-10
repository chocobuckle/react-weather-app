import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { shape, string, bool, object } from 'prop-types';
import './Form.css';

class Form extends Component {
  static propTypes = {
    flexDirection: string.isRequired,
    match: shape({
      isExact: bool,
      params: object,
      path: string,
      url: string
    })
  }

  static defaultProps = {
    match: {}
  }

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

  render() {
    const { cityName } = this.state;
    const { match } = this.props;

    return (
      <form className='form' style={{flexDirection: this.props.flexDirection}}>
        <input
          onChange={e => this.handleOnChange(e)}
          value={cityName}
          className='form__input'
          type='text'
          placeholder='Dublin'
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
