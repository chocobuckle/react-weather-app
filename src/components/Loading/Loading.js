import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

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
      <div className='loading-container'>
        <h1 className='loading__h1'>{this.state.text}</h1>
      </div>
    );
  }
}

export default Loading;
