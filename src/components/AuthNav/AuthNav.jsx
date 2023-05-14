import { AuthNavWrapper, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthNavWrapper>
  );
};