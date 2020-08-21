import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
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
        <Link to='/' className='navbar-item'>
          Home
        </Link>
        <div className='navbar-item'>
          <Link to='/reports/new' className='button is-primary is-light'>
            Get Report
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
