import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/forecast' component={Forecast} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
