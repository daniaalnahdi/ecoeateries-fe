import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderPrimary from '../components/HeaderPrimary';
import BoardColumn from '../components/BoardColumn';
import BoardCard from '../components/BoardCard';
import AuthContext from '../auth/auth-context';

const ReportEditPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  //add last updated timestamp

  const [goalList, setGoalList] = useState([]);

  useEffect(() => {
    const url = new URL('http://127.0.0.1:5000/user/goals');
    const params = { userId: userId };

    url.search = new URLSearchParams(params).toString();

    async function getGoalList() {
      const responseData = await fetch(url);
      const responseJson = await responseData.json();

      setGoalList((goalList) => [...goalList, ...responseJson.goalList]);
    }
    try {
      getGoalList();
    } catch (err) {
      //TODO handle errors
      console.log(err);
    }
  }, [userId]);

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

  const updateGoalStatus = async (goalId, colId) => {
    const request = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        goalId: goalId,
        newStatus: colId,
      }),
    };

    try {
      const responseData = await fetch(
        'http://127.0.0.1:5000/user/goals',
        request
      );
    } catch (err) {
      //TODO handle error
      console.log(err);
      return;
    }
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
              {goalList
                .filter((goal) => goal.goalStatus === '0.0')
                .map((goal) => renderGoalCard(goal))}
            </BoardColumn>
            <BoardColumn
              title='In Progress'
              id='0.5'
              updateGoalStatus={updateGoalStatus}
            >
              {goalList
                .filter((goal) => goal.goalStatus === '0.5')
                .map((goal) => renderGoalCard(goal))}
            </BoardColumn>
            <BoardColumn
              title='Done'
              id='1.0'
              updateGoalStatus={updateGoalStatus}
            >
              {goalList
                .filter((goal) => goal.goalStatus === '1.0')
                .map((goal) => renderGoalCard(goal))}
            </BoardColumn>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportEditPage;
