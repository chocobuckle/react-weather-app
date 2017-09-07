import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
