import {
  Icon,
  InfoContainer,
  Wrapper,
  ReviewLocationWrap,
  HeaderContainer,
  PriceContainer,
  Btn,
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
import { useDispatch } from "react-redux";
import { changeFavorite } from "../../redux/slice";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selector";

export const CardItem = ({ card }) => {
  const dispatch = useDispatch();

  const favorite = useSelector(selectFavorite);

  const handleFavorite = (card) => {
    dispatch(changeFavorite(card));
  };

  return (
    <Wrapper>
      <CardPicture img={card.gallery[0]} name={card.name} />
      <InfoContainer>
        <HeaderContainer>
          <CardTitle title={card.name} />
          <PriceContainer onClick={() => handleFavorite(card)}>
            <CardPrice price={card.price} />
            <Btn>
              <Icon>
                <use
                  href={
                    favorite.some((item) => item._id === card._id)
                      ? `${sprite}#heart-liked`
                      : `${sprite}#heart`
                  }
                  aria-label="heart icon"
                ></use>
              </Icon>
            </Btn>
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
};
