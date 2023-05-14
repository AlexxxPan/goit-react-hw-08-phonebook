import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import getAuthSelectors from 'redux/auth/selectors';
import { LogOutBTN, MenuWrapper, WelcomeUser } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(getAuthSelectors.selectUserName);
  const dispatch = useDispatch();

  return (
    <MenuWrapper>
      <WelcomeUser>Welcome, {userName}</WelcomeUser>
      <LogOutBTN onClick={() => dispatch(logOut())}>LogOut</LogOutBTN>
    </MenuWrapper>
  );
};