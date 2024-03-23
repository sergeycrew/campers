import styled from "styled-components";

export const CustomButton = styled.button`
  width: 173px;
  height: 56px;
  padding: 10px 16px;
  text-align: center;
  border-radius: 1.5rem;
  border-radius: 200px;
  box-sizing: border-box;
  gap: 10px;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.redColor};
  &:hover {
    background-color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.whiteColor};
`;
