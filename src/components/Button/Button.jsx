import { CustomButton, Text } from "./Button.styled";

export const Button = ({ text }) => {
  return (
    <CustomButton>
      <Text>{text}</Text>
    </CustomButton>
  );
};
