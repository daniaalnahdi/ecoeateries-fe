import React from 'react';

const BoardCard = ({ goal, category }) => {
  return (
    <div className='box'>
      <p>Category: {category}</p>
      <p>Goal: {goal}</p>
    </div>
  );
};

export default BoardCard;
