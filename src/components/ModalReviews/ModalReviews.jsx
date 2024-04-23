import {
  ImgNameRatingWrapper,
  ListItem,
  ReviewList,
  Avatar,
  AvatarName,
  NameRatingWrapper,
  Name,
  RatingWrapper,
  Rating,
  Icon,
  ReviewText,
} from "./ModalReviews.styled";
import sprite from "../../assets/Images/sprite.svg";

export const ModalReviews = ({ cardInfo }) => {
  //console.log(cardInfo);
  return (
    <ReviewList>
      {cardInfo.reviews.map((review, index) => (
        <ListItem key={index}>
          <ImgNameRatingWrapper>
            <Avatar>
              <AvatarName>{review.reviewer_name[0]}</AvatarName>
            </Avatar>
            <NameRatingWrapper>
              <Name>{review.reviewer_name}</Name>
              <RatingWrapper>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Rating key={item}>
                    {item <= review.reviewer_rating ? (
                      <Icon>
                        <use href={`${sprite}#star`} />
                      </Icon>
                    ) : (
                      <Icon>
                        <use href={`${sprite}#star-none`} />
                      </Icon>
                    )}
                  </Rating>
                ))}
              </RatingWrapper>
            </NameRatingWrapper>
          </ImgNameRatingWrapper>
          <ReviewText>{review.comment}</ReviewText>
        </ListItem>
      ))}
    </ReviewList>
  );
};
