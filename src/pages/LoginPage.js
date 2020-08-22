import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
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
    if (credentials.email && credentials.password) {
      //pass in user id
      auth.login(1);
      //update usercontext
    } else {
      setDisplayError(true);
    }
  };
  return (
    <div className='container'>
      <div className='my-6 mx-6 columns is-centered'>
        <div className=' px-6 py-6 notification column is-half '>
          <h1 className='title is-2'>Login</h1>
          <p className='subtitle mt-1'>
            Don't have an account? {''}
            <Link to='/register'>Register here.</Link>
          </p>
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
            <button className='button is-info is-medium mt-2' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
