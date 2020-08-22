import React from 'react';

import ProgressIcon from './ProgressIcon';

const ScoreBreakdownCard = ({ category }) => {
  const { categoryName, categoryScore, goals } = category;

  return (
    <article className='message is-medium is-primary'>
      <div className='message-header'>
        <p>{categoryName}</p>
        <p>{categoryScore}% Completed</p>
      </div>
      <div className='message-body'>
        <ul>
          {goals.map(({ goalStatus, goalName }, i) => {
            return (
              <li key={i}>
                <span className='mr-3'>
                  <ProgressIcon goalStatus={goalStatus} />
                </span>
                {goalName}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default ScoreBreakdownCard;
