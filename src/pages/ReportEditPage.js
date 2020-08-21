import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from '../components/LargeHeading/LargeHeading';
import BoardColumn from '../components/BoardColumn/BoardColumn';
import BoardCard from '../components/BoardCard/BoardCard';
import AuthContext from '../context/AuthContext';

const DUMMY_GOALS = [
  { goalId: 1, goal: 'Conserve water', categoryName: 'Water', status: 0.0 },
  { goalId: 2, goal: 'Fix leaks promptyl', categoryName: 'Water', status: 0.5 },
  {
    goalId: 3,
    goal: 'Use recycled utinsels',
    categoryName: 'Recycle',
    status: 0.5,
  },
  {
    goalId: 4,
    goal: 'Recycle 50% of waster',
    categoryName: 'Recycle',
    status: 1.0,
  },
];

const ReportEditPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  const renderGoalCard = (goalInfo, statusReq) => {
    const { goalId, goal, categoryName, status } = goalInfo;
    if (status === statusReq) {
      return (
        <BoardCard
          key={goalId}
          id={goalId}
          goal={goal}
          category={categoryName}
        />
      );
    }
  };

  const updateGoalStatus = (goalId) => {
    //fetch and update goal here
    console.log(goalId);
  };

  return (
    <>
      <LargeHeading title='Submit Your Report' subtitle='Subtitle' />
      <div className='container'>
        <div class='has-text-right'>
         <Link to={`/${userId}/report`} className='button is-link is-large my-3'>
            Generate Report
          </Link>
        </div>
        <div className='columns'>
          <BoardColumn
            className='column'
            title='Not Done'
            id='col-1'
            updateGoalStatus={updateGoalStatus}
          >
            {DUMMY_GOALS.map((goalInfo) => renderGoalCard(goalInfo, 0.0))}
          </BoardColumn>
          <BoardColumn
            title='In Progress'
            id='col-2'
            updateGoalStatus={updateGoalStatus}
          >
            {DUMMY_GOALS.map((goalInfo) => renderGoalCard(goalInfo, 0.5))}
          </BoardColumn>
          <BoardColumn
            title='Done'
            id='col-3'
            updateGoalStatus={updateGoalStatus}
          >
            {DUMMY_GOALS.map((goalInfo) => renderGoalCard(goalInfo, 1.0))}
          </BoardColumn>
        </div>
      </div>
    </>
  );
};

export default ReportEditPage;
