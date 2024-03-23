import styled from "styled-components";

export const Wrapper = styled.div`
  width: 360px;
  margin-top: 14px;
  margin-bottom: 32px;
`;
export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 24px;
  border-bottom: 1px solid #10182833;
  color: ${(p) => p.theme.colors.blackColor};
`;
export const EquipmentList = styled.ul`
  width: 360px;
  flex-wrap: wrap;
  align-items: flex-end;
  display: flex;
  gap: 10px;
  padding-top: 24px;
`;
export const ListItem = styled.li``;
