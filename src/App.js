import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Forecast from './components/Forecast/Forecast';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/forecast' component={Forecast} />
          <Route path='/detail' component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
