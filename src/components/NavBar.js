import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import AuthContext from '../auth/AuthContext';

const NavBar = () => {
  const auth = useContext(AuthContext);

  const LoggedOutNav = () => {
    return (
      <>
        <div className='navbar-item'>
          <Link to='/register'>Register</Link>
        </div>
        <div className='navbar-item '>
          <Link to='/login' className='button is-primary is-light'>
            Login
          </Link>
        </div>
      </>
    );
  };

  const LoggedInNav = () => {
    return (
      <>
        <div className='navbar-item '>
          <Link to={`/${auth.userId}/report`}>Your Report</Link>
        </div>
        <div className='navbar-item '>
          <Link to={`/report/results`} className='button is-info is-light'>
            Share Report
          </Link>
        </div>
        <div className='navbar-item '>
          <Link to='/report/edit' className='button is-primary is-light'>
            New Report
          </Link>
        </div>
        <div className='navbar-item'>
          <Link to='/' onClick={auth.logout}>
            Logout
          </Link>
        </div>
      </>
    );
  };

  return (
    <nav className='navbar hide-nav'>
      <div className='container'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <Link to='/'>
              <Logo className='nav-logo title is-3' />
            </Link>
          </div>
        </div>
        <div className='navbar-end'>
          {auth.isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
