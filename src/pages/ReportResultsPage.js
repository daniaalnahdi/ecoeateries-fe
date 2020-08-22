import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faLink } from '@fortawesome/free-solid-svg-icons';

import HeaderPrimary from '../components/HeaderPrimary';
import ScoreTotalSection from '../components/ScoreTotalBanner';
import ScoreBreakdownGrid from '../components/ScoreBreakownGrid';
import BadgeCodeSnippet from '../components/BadgeCodeSnippet';
import BadgePreview from '../components/BadgePreview';
import AuthContext from '../auth/AuthContext';
import { Link } from 'react-router-dom';

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

const ReportResultsPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  const defaultCopyButtonText = 'Copy Report Link';
  const [copyButtonText, setCopyButtonText] = useState(defaultCopyButtonText);

  //FETCH
  const restaurantName = DUMMY_RESTAURANT.restaurantName;
  const restaurantLocation = DUMMY_RESTAURANT.restaurantLocation;
  const totalScore = DUMMY_REPORT.restaurantScore;
  const categories = DUMMY_REPORT.categories;

  //APPEND DOMAIN HERE
  const src = `/${userId}/report`;
  const codeSnippet = `<iframe src='${src}?view=embedded' height='335' width='300' title='EcoEateries ${restaurantName} Report'></iframe>`;

  //if authUser, check if they submitted a report before

  const handleCopyClick = () => {
    var textArea = document.createElement('textarea');
    textArea.value = src;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText(defaultCopyButtonText);
    }, 1500);
  };

  return (
    <>
      <HeaderPrimary
        title='Your Results'
        subtitle='View your most recent results and share them.'
      />
      <div className='container'>
        <section className='section'>
          <h2 className='title is-3'>1. Review</h2>
          <h3 className='title is-4'>Total Score</h3>
          <p className='is-size-5 mb-4'>
            Your total score is the average of all category scores.
          </p>
          <ScoreTotalSection
            score={totalScore}
            restaurantName={restaurantName}
          />
          <h3 className='title is-4'>Score Breakdown</h3>
          <p className='is-size-5 mb-4'>
            These are the individual scores for each category.
          </p>
          <ScoreBreakdownGrid categories={categories} />
        </section>
        <hr />
        <section className='section'>
          <div className='columns is-vcentered'>
            <div className='column'>
              <h2 className='title is-3'>2. Share</h2>

              <h3 className='title is-4'>Share Direct Link</h3>
              <button
                className='button is-info is-light mb-5 mr-2 is-medium'
                onClick={handleCopyClick}
                style={{ width: '250px' }}
              >
                <FontAwesomeIcon icon={faCopy} className='mr-3' />
                {copyButtonText}
              </button>
              <Link
                to={src}
                target='_blank'
                className='button is-info is-inverted mb-5 is-medium'
                style={{ width: '180px' }}
              >
                <FontAwesomeIcon icon={faLink} className='mr-3' />
                Go to Link
              </Link>
              <h3 className='title is-4'>Embed in Website</h3>
              <p className='is-size-5 mb-4'>
                Add this code snippet to your website's code, between the{' '}
                {'<body></body>'} tags.
              </p>
              <BadgeCodeSnippet codeSnippet={codeSnippet} />
            </div>
            <div className='column is-one-third'>
              <h4 className='title is-5'>Badge Preview</h4>
              <BadgePreview codeSnippet={codeSnippet} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportResultsPage;
