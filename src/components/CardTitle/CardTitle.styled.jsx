import styled from "styled-components";

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.blackColor};
  font-size: 24px;
  font-weight: 600;
  height: 30px;
  width: 350px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
`;
