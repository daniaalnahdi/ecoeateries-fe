import React from 'react';

import BoardColumn from '../BoardColumn/BoardColumn';
import BoardCard from '../BoardCard/BoardCard';

const Board = () => {
  return (
    <div className='columns'>
      <BoardColumn title='Not Done'>
        <BoardCard category='Category Name' goal='Goal Name' />
      </BoardColumn>
      <BoardColumn title='In Progress'>
        <BoardCard category='Category Name' goal='Goal Name' />
      </BoardColumn>
      <BoardColumn title='Done'>
        <BoardCard category='Category Name' goal='Goal Name' />
      </BoardColumn>
    </div>
  );
};

export default Board;
