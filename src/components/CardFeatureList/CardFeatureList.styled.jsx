import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Listitem = styled.li`
  height: 44px;
  border-radius: 100px;
  background-color: ${(p) => p.theme.colors.darkWhileColor};
  text-align: center;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const StyledSpan = styled.span`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.blackColor};
`;
