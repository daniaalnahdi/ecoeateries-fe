import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReportsSearch = ({ reports }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = reports.filter(({ restaurantName }) =>
      restaurantName.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  }, [reports, searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className='field'>
        <label className='label'>Find Reports</label>
        <input
          className='input'
          type='text'
          placeholder='Search a restaurant...'
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      {searchResults.map(({ userId, restaurantName, restaurantLocation }, i) => {
        return (
          <div className='box' key={i}>
            <p>{restaurantName}</p>
            <p>{restaurantLocation}</p>
            <Link to={`/${userId}/report`} target='_blank' className="button is-info is-light">
              View Report
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ReportsSearch;
