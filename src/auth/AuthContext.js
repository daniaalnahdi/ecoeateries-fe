import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  restaurantName: '',
  restaurantLocation: '',
  login: () => {},
  logout: () => {},
});

export default AuthContext;
