import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;

  &.active {
    color: #2196F3;
    background: lightgrey;
  }

  &:hover,
  &:focus {
    background: rgb(200, 200, 200);
    color: #2196F3;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;