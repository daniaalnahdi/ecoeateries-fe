import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    restaurantName: '',
    restaurantLocation: '',
  });
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //validate here
    if (
      credentials.email &&
      credentials.password &&
      credentials.restaurantName &&
      credentials.restaurantLocation
    ) {
      //register user
      setDisplayError(false);
      setDisplaySuccess(true);
    } else {
      setDisplayError(true);
    }
  };
  return (
    <div className='container'>
      <div className='my-6 mx-6 columns is-centered'>
        <div className=' px-6 py-6 notification column is-half '>
          <h1 className='title is-2'>Register</h1>
          <p className='subtitle mt-1'>
            Already have an account? {''}
            <Link to='/login'>Login here.</Link>
          </p>
          {displaySuccess && (
            <article className='message is-success'>
              <div className='message-body'>
                Register success! <Link to='/login'>Login</Link> to start your report.
              </div>
            </article>
          )}
          {displayError && (
            <article className='message is-danger'>
              <div className='message-body'>
                Please enter a valid email and password.
              </div>
            </article>
          )}
          <form onSubmit={handleLoginSubmit}>
            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input
                  className='input'
                  type='email'
                  id='email'
                  placeholder='Email'
                  value={credentials.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Password</label>
              <div className='control'>
                <input
                  className='input'
                  type='password'
                  id='password'
                  placeholder='Password'
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Restaurant Name</label>
              <div className='control'>
                <input
                  className='input'
                  id='restaurantName'
                  placeholder='Restaurant Name'
                  value={credentials.restaurantName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Restaurant Location</label>
              <div className='control'>
                <input
                  className='input'
                  id='restaurantLocation'
                  placeholder='Restaurant Location'
                  value={credentials.restaurantLocation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button className='button is-info is-medium mt-2' type='submit'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
