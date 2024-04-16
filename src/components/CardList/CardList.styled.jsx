import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 888px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 173px;
  height: 56px;
  padding: 10px 16px;
  text-align: center;
  border-radius: 1.5rem;
  border-radius: 200px;
  box-sizing: border-box;
  gap: 10px;
  justify-content: center;
  border: 2px solid #10182833;
  background-color: ${(p) => p.theme.colors.whiteColor};
  &:hover {
    border: ${(p) => p.theme.colors.hoverBorder};
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.blackColor};
`;
