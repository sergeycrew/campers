import styled from "styled-components";

export const ReviewList = styled.ul`
  padding-top: 44px;
  width: 430px;
  height: 532px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ListItem = styled.li``;

export const ImgNameRatingWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: #f2f4f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarName = styled.span`
  color: ${(p) => p.theme.colors.redColor};
  font-weight: 600;
  font-size: 2rem;
`;

export const NameRatingWrapper = styled.div``;

export const Name = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: ${(p) => p.theme.colors.blackColor};
  margin-bottom: 4px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Rating = styled.span``;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const ReviewText = styled.p`
text-align: justify;
font-size: 16px
font-weight: 400;
line-height: 24px;
`;
