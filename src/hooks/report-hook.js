import { useState, useEffect } from 'react';

const useReportInfo = (userId) => {
    const [categories, setCategories] = useState([]);
    const [restaurantScore, setRestaurantScore] = useState(0);

    useEffect(() => {
        if (userId) {
          const url = new URL('http://127.0.0.1:5000/report');
          const params = { userId: userId };
    
          url.search = new URLSearchParams(params).toString();
    
          async function getReport() {
            const responseData = await fetch(url);
            const responseJson = await responseData.json();
      
            setRestaurantScore(responseJson.restaurantScore);
            setCategories((categories) => [
              ...categories,
              ...responseJson.categories,
            ]);
          }
    
          try {
            getReport();
          } catch (err) {
            //TODO handle errors
            console.log(err);
          }
        }
      }, [userId]);

      return {categories, restaurantScore}

}

export default useReportInfo;