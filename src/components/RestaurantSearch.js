import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RestaurantInfoLabel from './RestaurantInfoLabel';

const RestaurantSearch = ({ restaurants }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = restaurants.filter(({ restaurantName }) =>
      restaurantName.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  }, [restaurants, searchTerm]);
  
  useEffect(() => {
    const results = restaurants.filter(({ restaurantName }) =>
      restaurantName.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  }, [restaurants, searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className='columns' />
      <div className='column is-half'>
        <h2 className='title is-3'>See how others scored</h2>
        <div className='field'>
          <input
            className='input is-medium'
            type='text'
            placeholder='Search a restaurant...'
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='search-results'>
        <div className='columns is-multiline mt-4'>
          {searchResults.map(
            ({ userId, restaurantName, restaurantLocation }, i) => {
              return (
                <div className='column is-half' key={i}>
                  <div className='box mx-3 px-6 py-6'>
                    <RestaurantInfoLabel
                      title={restaurantName}
                      type='name'
                      className='is-size-4 mb-1 has-text-weight-semibold'
                    />
                    <RestaurantInfoLabel
                      title={restaurantLocation}
                      type='location'
                      className=' is-size-4 mb-5 has-text-weight-medium'
                    />
                    <Link
                      to={`/${userId}/report`}
                      target='_blank'
                      className='button is-info is-light is-medium'
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantSearch;
