import { useState, useEffect } from 'react';

const useRestaurantInfo = (userId) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');

  useEffect(() => {
    if (userId) {
      const url = new URL('http://127.0.0.1:5000/restaurant-info');
      const params = { userId: userId };

      url.search = new URLSearchParams(params).toString();

      async function getRestaurantInfo() {
        const responseData = await fetch(url);
        const responseJson = await responseData.json();

        setRestaurantName(responseJson.restaurantName);
        setRestaurantLocation(responseJson.restaurantLocation);
      }

      try {
        getRestaurantInfo();
      } catch (err) {
        //TODO handle errors
        console.log(err);
      }
    }
  }, [userId]);

  return { restaurantName, restaurantLocation };
};

export default useRestaurantInfo;
