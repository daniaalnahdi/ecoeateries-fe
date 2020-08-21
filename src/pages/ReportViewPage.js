import React from 'react';
import { Link } from 'react-router-dom';

const ReportViewPage = () => {
  return (
    <div>
      <h1 className='title is-2'>Embedded View Here</h1>
      <Link
        className='button is-primary'
        to='/reports/:userId/view'
        target='_blank'
      >
        See Full Report
      </Link>
    </div>
  );
};

export default ReportViewPage;
