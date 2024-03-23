import styled from "styled-components";

export const List = styled.ul`
  width: 526px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Listitem = styled.li`
  height: 44px;
  border-radius: 100px;
  background-color: ${(p) => p.theme.colors.darkWhileColor};
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const StyledSpan = styled.span`
  margin-left: 8px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.blackColor};
`;
