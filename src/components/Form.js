import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import Autocomplete from 'react-google-autocomplete';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  // Hides Google logo in the autocomplete drop-down.
  .pac-logo::after {
    display: none;
  }
`;

const Wrapper = styled.form`
  display: flex;
  ${props => props.parentIsHomeComponent && 'flex-direction: column; align-items: center;'}
  ${props => props.parentIsHeaderComponent && 'justify-content: space-around; margin: 0.4em;'}
`;

function fontSizeAndMediaQueries() {
  return `
    font-size: 4.45vw;

    @media (min-width: 31.875em) {
      font-size: 3.5vw;
    }

    @media (min-width: 37.5em) {
      font-size: 3vw;
    }

    @media (min-width: 46.563em) {
      font-size: 1.3rem;
    }
  `;
}

const Input = styled(Autocomplete)`
  ${props => props['data-parentIsHomeComponent'] && 'margin: 0.4em auto 0.5em;'}
  ${fontSizeAndMediaQueries()}
`;

const Button = styled.button`
  background-color: #5cb85c;
  color: white;
  cursor: pointer;
  text-decoration: none;
  ${props => props.parentIsHomeComponent && 'width: 7em;'}
  ${props => props.parentIsHeaderComponent && 'margin-left: 0.725em;'}
  ${fontSizeAndMediaQueries()}
`;

class Form extends Component {
  static propTypes = {
    parentIsHomeComponent: PropTypes.bool,
    match: PropTypes.object,
    history: PropTypes.object,
    push: PropTypes.object
  }

  state = {
    cityName: ''
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
    const { cityName } = this.state;
    return (
      <Wrapper onSubmit={this.handleSubmit} {...this.props}>
        <Input
          onChange={e => this.handleOnChange(e)}
          onPlaceSelected={e => this.handleOnChange(e)}
          placeholder='Dublin, Ireland'
          types={['(regions)']}
          value={cityName}
          data-parentIsHomeComponent={this.props.parentIsHomeComponent}
        />
        <Button type='submit' {...this.props}>Get Weather</Button>
      </Wrapper>
    );
  }
}

export default Form;
