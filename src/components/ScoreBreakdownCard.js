import React from 'react';

const ScoreBreakdownCard = ({ category }) => {
  const { categoryName, categoryScore, goals } = category;

  return (
    <article className='message is-medium is-primary'>
      <div className='message-header'>
        <p>{categoryName}</p>
        <p>Score: {categoryScore}%</p>
      </div>
      <div className='message-body'>
        <ul>
          {goals.map(({ goalStatus, goalName }, i) => {
            return (
              <li key={i}>
                <span>{goalStatus}</span>
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
