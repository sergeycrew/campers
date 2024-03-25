import styled from "styled-components";
import { CustomModal } from "../CustomModal/CustomModal";

export const CustomModalWrap = styled(CustomModal)``;

export const Layout = styled.div`
  padding: 40px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const ReviewLocationWrap = styled.div`
  width: 526px;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 13px;
`;

export const ImageWrapper = styled.ul`
  width: 902px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ImageItem = styled.li``;

export const FeatureRewiewWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 902px;
  height: 48px;
  margin-top: 44px;
  border-bottom: 1px solid #10182833;
  pudding-bottom: 24px;
  gap: 40px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  background: none;
  color: inherit;
  border: none;
  padding-bottom: 24px;
  position: relative;
  &.active {
    border-bottom: 5px solid #e44848;
  }
  &.active:hover {
    border-bottom: 1px solid #e44848;
  }
  &:hover {
    transform: scaleX(1);
    color: #e44848;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0")};;
    height: 5px;
    background-color: #e44848;

`;

export const ButtonItem = styled.li``;
