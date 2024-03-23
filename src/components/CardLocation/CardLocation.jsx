import { LocationCity, Wrapper, Icon } from "./CardLocation.styled";
import sprite from "assets/Images/sprite.svg";

export const CardLocation = ({ location }) => {
  return (
    <Wrapper>
      <Icon>
        <use href={`${sprite}#map-pin-2`} aria-label="pin icon"></use>
      </Icon>
      <LocationCity>
        {/* {location.split(",")[1]}, {location.split(",")[0]} */}
      </LocationCity>
    </Wrapper>
  );
};
