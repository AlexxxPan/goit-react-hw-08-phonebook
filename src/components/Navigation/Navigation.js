import { Item, List, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledLink to="/">Home</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/contacts">PhoneBook</StyledLink>
        </Item>
      </List>
    </nav>
  );
};