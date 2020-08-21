import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from '../components/LargeHeading/LargeHeading';
import AuthContext from '../context/AuthContext';

const HomePage = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <LargeHeading title='HomePage' subtitle='Subtitle' />
      <div className='container'>
        <Link
          className='button is-primary'
          to={auth.isLoggedIn ? `/${auth.userId}/report/edit` : '/login'}
        >
          Get Your Report Now
        </Link>
      </div>
    </>
  );
};

export default HomePage;
