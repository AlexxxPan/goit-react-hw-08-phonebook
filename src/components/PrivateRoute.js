import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import getAuthSelectors from 'redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getAuthSelectors.selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};