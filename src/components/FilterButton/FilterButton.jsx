import { FilterButtonItem, Icon, Span, Text } from "./FilterButton.styled";

export const FilterButton = ({
  sprite,
  id,
  text,
  width,
  height,
  type,
  checked,
  onChange,
}) => {
  return (
    <Text>
      <FilterButtonItem type={type} checked={checked} onChange={onChange} />
      <Icon
        style={{
          width,
          height,
        }}
      >
        <use href={`${sprite}#${id}`} aria-label="icon"></use>
      </Icon>
      <Span>{text}</Span>
    </Text>
  );
};
