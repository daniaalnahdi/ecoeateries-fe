import React from 'react';

const ScoreRing = ({ score, dimensions }) => {
  return (
      <svg
        viewBox='0 0 36 36'
        width={dimensions}
        height={dimensions}
        className='score-ring'
      >
        <path
          className='score-ring-bg'
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <path
          className='score-ring-circle'
          strokeDasharray={`${score}, 100`}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <text x='18' y='20.35' className='score-ring-percentage'>
          {score}%
        </text>
      </svg>
  );
};

export default ScoreRing;
