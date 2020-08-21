import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <>
      <label className='checkbox'>
        <input type='checkbox' />
        Question 1
      </label>
      <Link to='/reports/123'>
        <button className='button is-primary'>Submit Report</button>
      </Link>
    </>
  );
};

export default Form;
