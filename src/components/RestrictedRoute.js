import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import getAuthSelectors from 'redux/auth/selectors';

export const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(getAuthSelectors.selectIsLoggedIn);
  const { state } = useLocation();

  return !isLoggedIn ? children : <Navigate to={state ? state : '/contacts'} />;
};