import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faLink } from '@fortawesome/free-solid-svg-icons';

import HeaderPrimary from '../components/HeaderPrimary';
import ScoreTotalSection from '../components/ScoreTotalBanner';
import ScoreBreakdownGrid from '../components/ScoreBreakownGrid';
import BadgeCodeSnippet from '../components/BadgeCodeSnippet';
import BadgePreview from '../components/BadgePreview';
import useRestaurantInfo from '../hooks/restaurant-hook';
import AuthContext from '../auth/auth-context';

//TO FETCH:
//total score
//categories with individual score and goals

const ReportResultsPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  const defaultCopyButtonText = 'Copy Report Link';
  const [copyButtonText, setCopyButtonText] = useState(defaultCopyButtonText);

  const { restaurantName } = useRestaurantInfo(userId);
  const [restaurantScore, setRestaurantScore] = useState(0);
  const [categories, setCategories] = useState([]);

  //APPEND DOMAIN HERE
  const src = `/${userId}/report`;
  const codeSnippet = `<iframe src='${src}?view=embedded' height='335' width='300' title='EcoEateries ${restaurantName} Report'></iframe>`;

  //if authUser, check if they submitted a report before

  useEffect(() => {
    const url = new URL('http://127.0.0.1:5000/report');
    const params = { userId: userId };

    url.search = new URLSearchParams(params).toString();

    async function getReport() {
      const responseData = await fetch(url);
      const responseJson = await responseData.json();

      setRestaurantScore(responseJson.restaurantScore);
      setCategories((categories) => [
        ...categories,
        ...responseJson.categories,
      ]);
    }
    try {
      getReport();
    } catch (err) {
      //TODO handle errors
      console.log(err);
    }
  }, [userId]);

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
            score={restaurantScore}
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
