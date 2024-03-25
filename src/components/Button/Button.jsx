import { CustomButton, Text } from "./Button.styled";

export const Button = ({ text, style, color, onClick, type, disabled }) => {
  return (
    <CustomButton
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <Text style={{ color }}>{text}</Text>
    </CustomButton>
  );
};
