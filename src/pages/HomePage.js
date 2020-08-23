import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShareSquare,
  faEye,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

import HeaderPrimary from '../components/HeaderPrimary';
import Logo from '../components/Logo';
import RestaurantInfoLabel from '../components/RestaurantInfoLabel';
import RestaurantSearch from '../components/RestaurantSearch';
import DashboardCard from '../components/DashboardCard';
import MainIllustration from '../assets/MainIllustration';
import useRestaurantInfo from '../hooks/restaurant-hook';
import AuthContext from '../auth/auth-context';

const HomePage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  const { restaurantName, restaurantLocation } = useRestaurantInfo(userId);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    async function getRestaurantList() {
      const responseData = await fetch('http://127.0.0.1:5000/restaurants');
      const responseJson = await responseData.json();

      setRestaurantList(responseJson.restaurants);
    }

    try {
      getRestaurantList();
    } catch (err) {
      //TODO handle errors
      console.log(err);
    }
  }, [restaurantList]);

  const LoggedOutView = () => {
    return (
      <>
        <section className='section'>
          <div className='columns is-vcentered'>
            <div className='column'>
              <Logo className='title is-1' />
              <p className='subtitle is-3 my-5'>
                Some catchy tagline about us helping restaurants with being
                sustainable and goal-setting etc.
              </p>
              <Link className='button is-primary is-large mt-3' to='/login'>
                Get Your Report Now
              </Link>
              <p className='subtitle is-6 mt-4'>
                Based on blah system, link it here
              </p>
            </div>
            <div className='column'>
              <MainIllustration width={600} />
            </div>
          </div>
        </section>
        <section className='section'>
          <RestaurantSearch restaurants={restaurantList} />
        </section>
      </>
    );
  };

  const LoggedInView = () => {
    return (
      <section className='section'>
        <div className='columns is-vcentered'>
          <DashboardCard
            title='Get New Report'
            subtitle='Update your progress and generate a new report.'
            src='/report/edit'
          >
            <FontAwesomeIcon icon={faTasks} />
          </DashboardCard>
          <DashboardCard
            title='Review and Share'
            subtitle='Review your last saved report and learn how to share it.'
            src='/report/results'
          >
            <FontAwesomeIcon icon={faShareSquare} />
          </DashboardCard>
          <DashboardCard
            title='View Official Report'
            subtitle='View the official report that is public for viewing.'
            src={`/${userId}/report`}
          >
            <FontAwesomeIcon icon={faEye} />
          </DashboardCard>
        </div>
      </section>
    );
  };
  return (
    <>
      {auth.isLoggedIn ? (
        <HeaderPrimary
          title='Dashboard'
          subtitle={
            <>
              <RestaurantInfoLabel
                title={restaurantName}
                type='name'
                className=' is-size-4 mb-2'
              />
              <RestaurantInfoLabel
                title={restaurantLocation}
                type='location'
                className=' is-size-4'
              />
            </>
          }
        />
      ) : null}
      <div className='container'>
        {auth.isLoggedIn ? <LoggedInView /> : <LoggedOutView />}
      </div>
    </>
  );
};

export default HomePage;
