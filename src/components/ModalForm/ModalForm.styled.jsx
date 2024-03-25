import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  align-self: flex-start;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
  margin-top: 44px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;

export const TitleBlock = styled.div`
  text-align: left;

  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #101828;
  }

  p {
    font-size: 16px;
    color: #475466;
    margin: 8px 0 14px 0;
  }
`;

export const Label = styled.label`
  position: relative;
  input {
    width: 100%;
    padding: 18px;
    background-color: #f7f7f7;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    border-radius: 10px;
    border: none;
    opacity: 0.7;

    transition: opacity 150ms linear;

    &:hover,
    &:focus {
      opacity: 1;
    }

    &::placeholder {
      color: rgba(16, 24, 40, 0.6);
    }
  }

  textarea {
    width: 100%;
    padding: 18px;
    background-color: #f7f7f7;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    border-radius: 10px;
    border: none;
    opacity: 0.7;
    height: 114px;

    transition: opacity 150ms linear;

    &:hover,
    &:focus {
      opacity: 1;
    }

    &::placeholder {
      color: rgba(16, 24, 40, 0.6);
    }
    resize: none;
  }

  svg#calendar {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  font-size: 12px;
  color: #e44848;
`;
