import React from 'react';
import './App.css';

import LandingPage from './pages/LandingPage';
import YourInfoPage from './pages/YourInfoPage';
import LoanResultsPage from './pages/LoanResultsPage';
import AdjustPage from './pages/AdjustPage';
import YourLoanPage from './pages/ํYourLoanPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HomeRefinancePage from './pages/HomeRefinancePage';
import CarRefinancePage from './pages/CarRefinancePage';
import RefinanceResultsPage from './pages/RefinanceResultsPage';

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
        <LoanResultsPage />
      </Route>
      <Route exact path="/adjust">
        <AdjustPage />
      </Route>
      <Route exact path="/yourloan">
        <YourLoanPage />
      </Route>
      <Route exact path="/confirmation">
        <ConfirmationPage />
      </Route>
      <Route exact path="/refinance/home">
        <HomeRefinancePage />
      </Route>
      <Route exact path="/refinance/home/results">
        <RefinanceResultsPage />
      </Route>
      <Route exact path="/refinance/car">
        <CarRefinancePage />
      </Route>
      <Route exact path="/refinance/car/results">
        <RefinanceResultsPage />
      </Route>
    </Switch>
  );
}

export default App;
