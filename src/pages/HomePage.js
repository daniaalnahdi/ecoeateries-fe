import React from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from '../components/LargeHeading/LargeHeading';

const HomePage = () => {
  return (
    <>
      <LargeHeading title='HomePage' subtitle='Subtitle' />
      <div className='container'>
        <Link className='button is-primary' to='/reports/new'>
          Get Your Report Now
        </Link>
      </div>
    </>
  );
};

export default HomePage;
