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
      auth.login();
      //update usercontext
    } else {
      setDisplayError(true);
    }
  };
  return (
    <div className='container'>
      <div class='columns is-centered'>
        <div class='column is-half'>
          <h1 className='title is-2'>Login</h1>
          <p className='subtitle'>
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
            <button className='button is-link' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
