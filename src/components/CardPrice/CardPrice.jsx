import { Price } from "./CardPrice.styled";

export const CardPrice = ({ price }) => {
  return (
    <Price>
      `{/* {price} */}
      +,00`
    </Price>
  );
};
