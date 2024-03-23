import { CustomButton, Text } from "./Button.styled";

export const Button = ({ text, style, color, onClick }) => {
  return (
    <CustomButton style={style} onClick={onClick}>
      <Text style={{ color }}>{text}</Text>
    </CustomButton>
  );
};
