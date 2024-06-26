import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #454545;
  padding: 5px 0;
  margin: 16px 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  &.active {
    text-shadow: 0px 2px 15px rgba(246, 246, 246, 1);
    color: #e44848;
  }
  &.active {
    border-bottom: 1px solid #e44848;
    color: #e44848;
  }
  &:hover {
    transform: scaleX(1);
    color: #e44848;
  }
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
`;
