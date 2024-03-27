import { Price } from "./CardPrice.styled";

export const CardPrice = ({ price }) => {
  const formattedPrice = price.toFixed(2);
  return <Price>€{formattedPrice}</Price>;
};
