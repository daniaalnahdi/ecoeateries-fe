import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import HeaderSecondary from '../components/HeaderSecondary';
import RestaurantInfoLabel from '../components/RestaurantInfoLabel';
import ScoreTotalSection from '../components/ScoreTotalBanner';
import ScoreBreakdownGrid from '../components/ScoreBreakownGrid';
import PageNotFound from '../components/PageNotFound';
import useRestaurantInfo from '../hooks/restaurant-hook';
import useReportInfo from '../hooks/report-hook';


//TO FETCH:
//total score
//categories with individual score and goals

const ReportViewPage = () => {
  const [userId, setUserId] = useState(useParams().userId);

  const queryParams = useLocation().search;
  const isEmbedded = queryParams.includes('view=embedded');
  const urlNoParams = window.location.href.split('?')[0];

  const {categories, restaurantScore} = useReportInfo(userId)

  useEffect(() => {
    const url = new URL('http://127.0.0.1:5000/user/exists');
    const params = { userId: userId };

    url.search = new URLSearchParams(params).toString();

    async function getUser() {
      const responseData = await fetch(url);
      const responseJson = await responseData.json();

      setUserId(responseJson.exists === 'true' ? userId : null);
    }

    try {
      getUser();
    } catch (err) {
      //TODO handle errors
      console.log(err);
    }

  }, [userId]);

  //if authUser, check if they submitted a report before
  const { restaurantName, restaurantLocation } = useRestaurantInfo(userId);

  if (!userId) {
    return <PageNotFound />;
  }

  if (isEmbedded) {
    return (
      <div className='has-text-centered'>
        <ScoreTotalSection score={restaurantScore} small />
        <a
          href={urlNoParams}
          target='_blank'
          rel='noopener noreferrer'
          className='button is-primary'
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} className='mr-2' />
          See Full Report
        </a>
      </div>
    );
  }

  return (
    <>
      <HeaderSecondary
        title='EcoEateries Report'
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
      <div className='container'>
        <section className='section'>
          <ScoreTotalSection
            score={restaurantScore}
            restaurantName={restaurantName}
          />
        </section>
        <hr />
        <section className='section'>
          <ScoreBreakdownGrid categories={categories} />
        </section>
      </div>
    </>
  );
};

export default ReportViewPage;
