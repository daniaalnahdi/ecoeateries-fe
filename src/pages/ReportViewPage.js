import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const ReportViewPage = () => {
  const userId = useParams().userId;
  const location = useLocation();

  //check is userId exists

  return (
    <div>
      <h1 className='title is-2'>Embedded View Here</h1>
      <Link
        className='button is-primary'
        to={location.pathname}
        target='_blank'
      >
        See Full Report
      </Link>
    </div>
  );
};

export default ReportViewPage;
