import React from 'react';

const BoardColumn = ({ title, children }) => {
  return (
    <div className='column'>
      <div className='box'>
        <h3 className='title is-4'>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default BoardColumn;
