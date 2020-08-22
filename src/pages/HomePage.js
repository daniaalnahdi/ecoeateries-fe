import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import HeaderPrimary from '../components/HeaderPrimary';
import ReportsSearch from '../components/ReportsSearch';
import AuthContext from '../context/AuthContext';

const DUMMY_USERS = [
  { userId: 1, restaurantName: 'Name 1', restaurantLocation: 'Location 1' },
  { userId: 2, restaurantName: 'Name 2', restaurantLocation: 'Location 2' },
  { userId: 3, restaurantName: 'Name 3', restaurantLocation: 'Location 3' },
];

const HomePage = () => {
  const auth = useContext(AuthContext);
  //show dashboard if user is logged in
  return (
    <>
      <HeaderPrimary title='EcoEateries' subtitle='Catchy tagline' />
      <div className='container'>
        <Link
          className='button is-primary'
          to={auth.isLoggedIn ? '/report/edit' : '/login'}
        >
          Get Your Report Now
        </Link>
        <ReportsSearch reports={DUMMY_USERS} />
      </div>
    </>
  );
};

export default HomePage;
