import { CustomButton, Text } from "./Button.styled";

export const Button = ({ text, style, color }) => {
  return (
    <CustomButton style={style}>
      <Text style={{ color }}>{text}</Text>
    </CustomButton>
  );
};
