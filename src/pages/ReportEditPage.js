import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from '../components/LargeHeading/LargeHeading';
import Board from '../components/Board/Board';
import AuthContext from '../context/AuthContext';

const ReportEditPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  return (
    <>
      <LargeHeading title='Submit Your Report' subtitle='Subtitle' />
      <div className='container'>
        <Board />
        <Link to={`/${userId}/report`}>Get Report</Link>
      </div>
    </>
  );
};

export default ReportEditPage;
