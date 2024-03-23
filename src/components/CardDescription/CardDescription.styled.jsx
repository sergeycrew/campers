import styled from "styled-components";

export const Wrapper = styled.div`
  width: 515px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.grayColor};
  font-size: 16px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
