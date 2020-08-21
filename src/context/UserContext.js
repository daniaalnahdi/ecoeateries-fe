import { createContext } from 'react';

const userContext = createContext({
  user: {
    id: 1,
    email: 'email',
    password: 'password',
    // restaurantName: 'Name',
    // restaurantLocation: 'Location, could be Google Maps link',
    // goals: [
    //   { goal: 'Conserve water', categoryName: 'Water', status: 0.0 },
    //   { goal: 'Fix leaks promptyl', categoryName: 'Water', status: 0.5 },
    //   {
    //     goalId: 'Use recycled utinsels',
    //     categoryName: 'Recycle',
    //     status: 0.5,
    //   },
    //   {
    //     goalId: 'Recycle 50% of waster',
    //     categoryName: 'Recycle',
    //     status: 0.5,
    //   },
    // ],
  },
});

export default userContext;
