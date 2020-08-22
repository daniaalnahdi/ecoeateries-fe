import React from 'react';

import ScoreRing from '../assets/ScoreRing';

const ScoreTotalSection = ({ restaurantName, score, small }) => {
  return (
    <div className={`notification ${small ? 'px-3 py-3' : 'px-6 py-6'}`}>
      <div className='columns is-vcentered'>
        <div className='column is-half has-text-centered'>
          <h2 className='title is-3'>{restaurantName}</h2>
          <h3 className='title is-4'>EcoEateries Score</h3>
        </div>
        <div className='column is-half has-text-centered my-2'>
          <ScoreRing score={score} dimensions={small ? 150 : 200} />
        </div>
      </div>
    </div>
  );
};

export default ScoreTotalSection;
