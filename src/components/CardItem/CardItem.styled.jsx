import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 358px;
  width: 888px;
  border-radius: 20px;
  border: 1px solid #10182833;
  padding: 24px;
  margin-bottom: 32px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 526px;
  height: 30px;
  margin-bottom: 8px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flexdirection: row;
`;

export const InfoContainer = styled.div`
  margin-left: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 526px;
  height: 326px;
`;

export const ReviewLocationWrap = styled.div`
  width: 526px;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;
