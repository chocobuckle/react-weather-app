import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

const Header = styled.h1`
  bottom: 6.5vh;
  color: #808080;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  font-size: 9vw;
  font-weight: 100;
  position: relative;
  text-align: center;

  @media (min-width: 37.5em) {
    font-size: 8vw;
  }

  @media (min-width: 46.563em) {
    font-size: 3rem;
  }
`;

class Loading extends Component {
  static propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
  }

  static defaultProps = {
    text: 'Loading',
    speed: 300
  }

  state = {
    text: this.props.text
  }

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = `${text}...`;
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(() => {
          return {
            text
          };
        });
      } else {
        this.setState(prevState => {
          return {
            text: `${prevState.text}.`
          };
        });
      }
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Wrapper>
        <Header>{this.state.text}</Header>
      </Wrapper>
    );
  }
}

export default Loading;
