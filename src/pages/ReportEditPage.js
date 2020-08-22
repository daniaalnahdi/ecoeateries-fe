import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import HeaderPrimary from '../components/HeaderPrimary';
import BoardColumn from '../components/BoardColumn';
import BoardCard from '../components/BoardCard';
import AuthContext from '../context/AuthContext';

const DUMMY_GOALS = [
  { goalId: 1, goalName: 'Conserve water', goalCategory: 'Water', status: 0.0 },
  { goalId: 2, goalName: 'Fix leaks promptyl', goalCategory: 'Water', status: 0.5 },
  {
    goalId: 3,
    goalName: 'Use recycled utinsels',
    goalCategory: 'Recycle',
    status: 0.5,
  },
  {
    goalId: 4,
    goalName: 'Recycle 50% of waster',
    goalCategory: 'Recycle',
    status: 1.0,
  },
];

const ReportEditPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  //add last updated timestamp

  const renderGoalCard = (goal, statusReq) => {
    const { goalId, goalName, goalCategory, status } = goal;
    if (status === statusReq) {
      return (
        <BoardCard
          key={goalId}
          goalId={goalId}
          goalName={goalName}
          goalCategory={goalCategory}
        />
      );
    }
  };

  const updateGoalStatus = (goalId, colId) => {
    //fetch and update goal here
    console.log(colId);
    console.log(goalId);
  };

  return (
    <>
      <HeaderPrimary title='Submit Your Report' subtitle='Subtitle' />
      <div className='container'>
        <section className='section'>
          <div className='has-text-right'>
            <Link to='/report/results' className='button is-info is-large my-3'>
              Generate New Report
            </Link>
          </div>
          <div className='columns'>
            <BoardColumn
              className='column'
              title='Not Done'
              id='col-1'
              updateGoalStatus={updateGoalStatus}
            >
              {DUMMY_GOALS.map((goal) => renderGoalCard(goal, 0.0))}
            </BoardColumn>
            <BoardColumn
              title='In Progress'
              id='col-2'
              updateGoalStatus={updateGoalStatus}
            >
              {DUMMY_GOALS.map((goal) => renderGoalCard(goal, 0.5))}
            </BoardColumn>
            <BoardColumn
              title='Done'
              id='col-3'
              updateGoalStatus={updateGoalStatus}
            >
              {DUMMY_GOALS.map((goal) => renderGoalCard(goal, 1.0))}
            </BoardColumn>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportEditPage;
