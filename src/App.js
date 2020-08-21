import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ReportEditPage from './pages/ReportEditPage';
import ReportResultPage from './pages/ReportResultPage';
import ReportViewPage from './pages/ReportViewPage';
import NavBar from './components/NavBar/NavBar';
import AuthContext from './context/AuthContext';

import './App.sass';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/reports/:userId/edit' exact>
          <ReportEditPage />
        </Route>
        <Route path='/reports/:userId/view' exact>
          <ReportViewPage />
        </Route>
        <Route path='/reports/:userId' exact>
          <ReportResultPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
        <Route path='/register' exact>
          <RegisterPage />
        </Route>
        <Route path='/reports/:userId/view' exact>
          <ReportViewPage />
        </Route>
        <Redirect to='/login' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <NavBar />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
