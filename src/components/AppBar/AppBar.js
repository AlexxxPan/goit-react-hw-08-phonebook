import { useSelector } from 'react-redux';
import getAuthSelectors from 'redux/auth/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header, Container } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(getAuthSelectors.selectIsLoggedIn);

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};