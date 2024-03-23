import { Nav, StyledLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog">Catalog</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </Nav>
  );
};
