import styled from "styled-components";

export const Span = styled.span`
  text-align: center;
`;

export const FilterButtonItem = styled.input`
  appearance: none;
`;
export const Icon = styled.svg`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;

export const Text = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 95px;

  border: 1px solid #10182833;

  border-opacity: 0.2;
  border-radius: 10px;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background-color: ${(p) => p.theme.colors.whiteColor};
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
