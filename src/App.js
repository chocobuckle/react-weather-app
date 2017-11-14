import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Forecast from './components/Forecast/Forecast';
import Detail from './components/Detail/Detail';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/forecast' component={Forecast} />
          <Route path='/detail/:city' component={Detail} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
