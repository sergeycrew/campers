import { Wrapper, Text } from "./CardDescription.styled";

export const CardDescription = ({ description, style, wrap }) => {
  return (
    <Wrapper style={style}>
      <Text style={wrap}>{description}</Text>
    </Wrapper>
  );
};
