import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  height: 24px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const ReviewsLink = styled(NavLink)`
  border-bottom: 1px solid;
  margin-left: 5px;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
