import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import Home from './components/Home';
import Header from './components/Header';
import Forecast from './components/Forecast';
import Detail from './components/Detail';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

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
