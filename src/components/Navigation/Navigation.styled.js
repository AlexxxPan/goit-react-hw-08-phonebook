import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: 20px;
`;

export const StyledLink = styled(NavLink)`
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
    background: rgb(239, 235, 233);
    color: #2196F3;
  }
`;