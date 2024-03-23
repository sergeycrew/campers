import { Icon, InfoContainer, Wrapper } from "./CardItem.styled";
import { CardPicture } from "../CardPicture/CardPicture";
import { CardTitle } from "../CardTitle/CardTitle";
import { CardDescription } from "../CardDescription/CardDescription";
import { CardFeatureList } from "../CardFeatureList/CardFeatureList";
import { CardLocation } from "../CardLocation/CardLocation";
import { CardPrice } from "../CardPrice/CardPrice";
import { CardReview } from "../CardReview/CardReview";
import sprite from "assets/Images/sprite.svg";
import { Button } from "../Button/Button";

export const CardItem = () => {
  return (
    <Wrapper>
      <CardPicture />
      <InfoContainer>
        <CardTitle title={"Hello"} />
        <CardPrice></CardPrice>
        <Icon>
          <use href={`${sprite}#heart`} aria-label="heart icon"></use>
        </Icon>
        <CardReview></CardReview>
        <CardLocation></CardLocation>
        <CardDescription></CardDescription>
        <CardFeatureList></CardFeatureList>
        <Button text={"Show more"} />
      </InfoContainer>
    </Wrapper>
  );
};
