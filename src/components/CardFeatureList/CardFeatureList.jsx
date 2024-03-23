import sprite from "assets/Images/sprite.svg";
import { Icon, List, Listitem, StyledSpan } from "./CardFeatureList.styled";

export const CardFeatureList = ({ details, quantity }) => {
  return (
    <List>
      {/* {Object.keys(details).map(
        (item, index) =>
          index < quantity && (
            <Listitem key={item}>
              <Icon>
                <use href={`${sprite}#${item}`} />
              </Icon>
              <StyledSpan>{details[item]}</StyledSpan>
            </Listitem>
          )
      )} */}
    </List>
  );
};
