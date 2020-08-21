import React from 'react';

import './BoardCard.scss';

const BoardCard = ({ goal, category, id }) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className='box board-card'
      id={id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable='true'
    >
      <p>Category: {category}</p>
      <p>Goal: {goal}</p>
    </div>
  );
};

export default BoardCard;
