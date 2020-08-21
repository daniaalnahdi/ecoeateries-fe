import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewReportPage from './pages/NewReportPage';
import ReportResultPage from './pages/ReportResultPage';
import ReportViewPage from './pages/ReportViewPage';
import NavBar from './components/NavBar/NavBar';

import './App.sass';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/reports/new' exact>
        <NewReportPage />
      </Route>
      <Route path='/reports/:reportId/view'>
        <ReportViewPage />
      </Route>
      <Route path='/reports/:reportId'>
        <ReportResultPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes />
      </main>
    </Router>
  );
};

export default App;
