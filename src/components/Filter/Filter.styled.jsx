import styled from "styled-components";

export const FilterWrap = styled.div`
  width: 360px;
  height: 790px;
`;
export const LocationWrap = styled.div`
  position: relative;
  width: 360px;
  height: 88px;
`;

export const LocationInputWrapper = styled.div`
  height: 56px;
  width: 360px;
`;

export const Form = styled.form`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
`;

export const LocationInput = styled.input`
  border: none;
  outline: none;
  color: ${(p) => p.theme.colors.blackColor};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
  width: fit-content;
  background-color: ${(p) => p.theme.colors.lightWhiteColor};
  border-radius: 10px;
  gap: 10px;
  width: 360px;
  height: 56px;
  padding: 18px 18px 18px 45px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
export const Label = styled.label`
  color: ${(p) => p.theme.colors.blackColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 360px;
  margin-bottom: 8px;
  opacity: 0.6;
`;

export const Icon = styled.svg`
  position: absolute;
  left: 18px;
  top: 50px;
  width: 18px;
  height: 20px;
`;

export const FilterText = styled.p`
  margin-top: 32px;
  margin-botton: 14px;
  color: ${(p) => p.theme.colors.grayColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ButtonWrapper = styled.div`
  padding-top: 32px;
`;
