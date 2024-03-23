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
  letter-spacing: 0;
  overflow: hidden;
  line-height: 24px;
  text-wrap: nowrap;
  overflow: hidden;
  text-align: justify;
`;
