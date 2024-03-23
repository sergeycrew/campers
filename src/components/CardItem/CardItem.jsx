import {
  Icon,
  InfoContainer,
  Wrapper,
  ReviewLocationWrap,
  HeaderContainer,
  PriceContainer,
} from "./CardItem.styled";
import { CardPicture } from "../CardPicture/CardPicture";
import { CardTitle } from "../CardTitle/CardTitle";
import { CardDescription } from "../CardDescription/CardDescription";
import { CardFeatureList } from "../CardFeatureList/CardFeatureList";
import { CardLocation } from "../CardLocation/CardLocation";
import { CardPrice } from "../CardPrice/CardPrice";
import { CardReview } from "../CardReview/CardReview";
import sprite from "assets/Images/sprite.svg";
import { Button } from "../Button/Button";

export const CardItem = ({ card }) => (
  <Wrapper>
    <CardPicture img={card.gallery[0]} name={card.name} />
    <InfoContainer>
      <HeaderContainer>
        <CardTitle title={card.name} />
        <PriceContainer>
          <CardPrice price={card.price} />
          <Icon>
            <use href={`${sprite}#heart`} aria-label="heart icon"></use>
          </Icon>
        </PriceContainer>
      </HeaderContainer>
      <ReviewLocationWrap>
        <CardReview rating={card.rating} reviews={card.reviews} />
        <CardLocation location={card.location} />
      </ReviewLocationWrap>
      <CardDescription description={card.description} />
      <CardFeatureList details={card.details} quantity={6} />
      <Button text={"Show more"} />
    </InfoContainer>
  </Wrapper>
);
