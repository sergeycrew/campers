import { ReviewsLink, Wrapper, Icon } from "./CardReview.styled";
import sprite from "assets/Images/sprite.svg";

export const CardReview = ({ rating, reviews }) => {
  return (
    <Wrapper>
      <Icon>
        <use href={`${sprite}#star`} aria-label="star icon"></use>
      </Icon>
      <ReviewsLink to="/">
        {/* {rating}({reviews.length}
        Reviews) */}
      </ReviewsLink>
    </Wrapper>
  );
};
