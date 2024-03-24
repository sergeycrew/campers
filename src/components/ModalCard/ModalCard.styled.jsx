import styled from "styled-components";
import { CustomModal } from "../CustomModal/CustomModal";

export const CustomModalWrap = styled(CustomModal)``;

export const Layout = styled.div`
  padding: 40px;
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
`;

export const FeatureRewiewWrapperInfo = styled.div`
  margin-top: 44px;
  width: 902px;
  height: 532px;
`;
