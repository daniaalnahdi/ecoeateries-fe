import React from 'react';

const BoardColumn = ({ title, children, updateGoalStatus, id }) => {
  const handleOnDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('card_id');

    const card = document.getElementById(cardId);
    card.style.display = 'block';

    e.target.appendChild(card);
    updateGoalStatus(cardId, id);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='column'>
        <h3 className='title is-4'>{title}</h3>
        <div
          className='notification board-column'
          id={id}
          onDrop={handleOnDrop}
          onDragOver={handleOnDragOver}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default BoardColumn;
