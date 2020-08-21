import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

import './NavBar.scss';

const NavBar = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <div className='navbar-item'>
          <Link to='/'>
            <img
              alt='logo'
              src='https://bulma.io/images/bulma-logo.png'
              width='112'
              height='28'
            />
          </Link>
        </div>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <Link to='/'>Home</Link>
        </div>
        {!auth.isLoggedIn && (
          <>
            <div className='navbar-item'>
              <Link to='/login' className='button is-primary is-light'>
                Login
              </Link>
            </div>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <div className='navbar-item'>
              <Link
                to='/reports/:userId/edit'
                className='button is-primary is-light'
              >
                Update Report
              </Link>
            </div>
            <div className='navbar-item'>
              <Link to='/' onClick={auth.logout}>
                Logout
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
