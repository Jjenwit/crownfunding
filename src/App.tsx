import React from 'react';
import './App.css';

import LandingPage from './pages/LandingPage';
import YourInfoPage from './pages/YourInfoPage';
import ResultsPage from './pages/ResultsPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/yourinfo">
        <YourInfoPage />
      </Route>
      <Route exact path="/results">
        <ResultsPage />
      </Route>
      <Route exact path="/refinance/home">
        <LandingPage />
      </Route>
      <Route exact path="/refinance/car">
        <LandingPage />
      </Route>
    </Switch>
  );
}

export default App;
