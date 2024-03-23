import styled from "styled-components";

export const FilterButtonItem = styled.button`
  width: 113px;
  height: 95px;
  align-items: center;
  border: 1px solid #10182833;
  border-opacity: 0.2;
  box-sizing; border-box;
  border-radius: 10px;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background-color: ${(p) => p.theme.colors.whiteColor};
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  &:active {
    border: ${(p) => p.theme.colors.redColor};
}
  
`;
export const Icon = styled.svg`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;

export const Text = styled.p`
  margin-top: 5px;
`;
