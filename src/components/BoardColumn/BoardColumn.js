import React from 'react';

import './BoardColumn.scss';

const BoardColumn = ({ title, children, updateGoalStatus, id }) => {
  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('card_id');

    const card = document.getElementById(cardId);
    card.style.display = 'block';

    e.target.appendChild(card);
    updateGoalStatus(cardId);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className='column board-column box'
        id={id}
        onDrop={drop}
        onDragOver={dragOver}
      >
        <h3 className='title is-4'>{title}</h3>

        {children}
      </div>
    </>
  );
};

export default BoardColumn;
