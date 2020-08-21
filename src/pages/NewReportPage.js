import React from 'react';

import LargeHeading from '../components/LargeHeading/LargeHeading';
import Form from '../components/Form/Form';

const NewReportPage = () => {
  return (
    <>
      <LargeHeading title='Submit A Report' subtitle='Subtitle' />
      <div className='container'>
        <Form />
      </div>
    </>
  );
};

export default NewReportPage;
