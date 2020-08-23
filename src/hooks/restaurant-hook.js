import { useState, useEffect } from 'react';

const useRestaurantInfo = (userId) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');
  const [isRestaurantLoading, setIsRestaurantLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      const url = new URL('http://127.0.0.1:5000/user/restaurant-info');
      const params = { userId: userId };

      url.search = new URLSearchParams(params).toString();

      async function getRestaurantInfo() {
        setIsRestaurantLoading(true);
        const resInfoResponseData = await fetch(url);
        const resInfoResponseJson = await resInfoResponseData.json();
        setIsRestaurantLoading(false);

        setRestaurantName(resInfoResponseJson.restaurantName);
        setRestaurantLocation(resInfoResponseJson.restaurantLocation);
      }

      try {
        getRestaurantInfo();
      } catch (err) {
        //TODO handle errors
        console.log(err);
      }
    }
  }, [userId]);

  return { restaurantName, restaurantLocation, isRestaurantLoading };
};

export default useRestaurantInfo;
