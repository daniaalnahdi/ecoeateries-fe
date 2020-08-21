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
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid) => {
    setUserId(uid);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path={`/${userId}/report/edit`} exact>
          <ReportEditPage />
        </Route>
        <Route path={`/${userId}/report`} exact>
          <ReportResultPage />
        </Route>
        <Route path='/:userId/report/view' exact>
          <ReportViewPage />
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
        <Route path='/:userId/report/view' exact>
          <ReportViewPage />
        </Route>
        <Redirect to='/login' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <NavBar />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
