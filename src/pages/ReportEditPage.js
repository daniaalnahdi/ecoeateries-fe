import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import HeaderPrimary from '../components/HeaderPrimary';
import BoardColumn from '../components/BoardColumn';
import BoardCard from '../components/BoardCard';
import AuthContext from '../context/AuthContext';

const DUMMY_GOALS = [
  {
    goalId: 11,
    goalName: 'Conserve water',
    goalCategory: 'Water',
    goalStatus: 0.0,
  },
  {
    goalId: 22,
    goalName: 'Fix leaks promptyl',
    goalCategory: 'Water',
    goalStatus: 0.5,
  },
  {
    goalId: 33,
    goalName: 'Use recycled utinsels',
    goalCategory: 'Recycle',
    goalStatus: 0.5,
  },
  {
    goalId: 44,
    goalName: 'Recycle 50% of waster',
    goalCategory: 'Recycle',
    goalStatus: 1.0,
  },
];

const ReportEditPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  //add last updated timestamp

  const renderGoalCard = (goal) => {
    const { goalId, goalName, goalCategory } = goal;
    return (
      <BoardCard
        key={goalId}
        goalId={goalId}
        goalName={goalName}
        goalCategory={goalCategory}
      />
    );
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
              title='Not Started'
              id='0.0'
              updateGoalStatus={updateGoalStatus}
            >
              {DUMMY_GOALS.filter(
                (goal) => goal.goalStatus === 0.0
              ).map((goal) => renderGoalCard(goal))}
            </BoardColumn>
            <BoardColumn
              title='In Progress'
              id='0.5'
              updateGoalStatus={updateGoalStatus}
            >
              {DUMMY_GOALS.filter(
                (goal) => goal.goalStatus === 0.5
              ).map((goal) => renderGoalCard(goal))}
            </BoardColumn>
            <BoardColumn
              title='Done'
              id='1.0'
              updateGoalStatus={updateGoalStatus}
            >
              {DUMMY_GOALS.filter(
                (goal) => goal.goalStatus === 0.0
              ).map((goal) => renderGoalCard(goal))}
            </BoardColumn>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportEditPage;
