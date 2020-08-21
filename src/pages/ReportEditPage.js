import React from 'react';
import { Link } from 'react-router-dom';

import LargeHeading from '../components/LargeHeading/LargeHeading';
import Board from '../components/Board/Board';

const ReportEditPage = () => {
  return (
    <>
      <LargeHeading title='Submit A Report' subtitle='Subtitle' />
      <div className='container'>
        <Board />
        <Link to='/reports/:reportId'>Submit Report</Link>
      </div>
    </>
  );
};

export default ReportEditPage;
