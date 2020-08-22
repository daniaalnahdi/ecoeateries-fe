import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import HeaderSecondary from '../components/HeaderSecondary';
import RestaurantInfoLabel from '../components/RestaurantInfoLabel';
import ScoreTotalSection from '../components/ScoreTotalBanner';
import ScoreBreakdownGrid from '../components/ScoreBreakownGrid';

//TO FETCH:
//total score
//categories with individual score and goals
// restaurant name and location
const DUMMY_RESTAURANT = {
  restaurantName: 'Res Name',
  restaurantLocation: 'Res Loc',
};

const DUMMY_REPORT = {
  restaurantScore: 60,
  categories: [
    {
      categoryName: 'Water',
      categoryScore: '50',
      categoryId: 1,
      goals: [
        { goalId: 1, goalName: 'Conserve water', goalStatus: 0.0 },
        {
          goalId: 2,
          goalName: 'Fix leaks promptyl',
          goalStatus: 0.5,
        },
      ],
    },
    {
      categoryName: 'Recycle',
      categoryScore: '50',
      categoryId: 2,
      goals: [
        { goalId: 1, goalName: 'Conserve water', goalStatus: 0.0 },
        {
          goalId: 2,
          goalName: 'Fix leaks promptyl',
          goalStatus: 0.5,
        },
      ],
    },
    {
      categoryName: 'Compost',
      categoryScore: '50',
      categoryId: 2,
      goals: [
        { goalId: 1, goalName: 'Compost waste', goalStatus: 0.0 },
        {
          goalId: 2,
          goalName: 'Something else',
          goalStatus: 0.5,
        },
      ],
    },
  ],
};

const ReportViewPage = () => {
  const userId = useParams().userId;

  const queryParams = useLocation().search;
  const isEmbedded = queryParams.includes('view=embedded');

  const urlNoParams = window.location.href.split('?')[0];

  //check is userId exists
  //if authUser, check if they submitted a report before

  //FETCH
  const restaurantName = DUMMY_RESTAURANT.restaurantName;
  const restaurantLocation = DUMMY_RESTAURANT.restaurantLocation;
  const totalScore = DUMMY_REPORT.restaurantScore;
  const categories = DUMMY_REPORT.categories;

  if (isEmbedded) {
    return (
      <div className='has-text-centered'>
        <ScoreTotalSection score={totalScore} small />
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
            score={totalScore}
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
