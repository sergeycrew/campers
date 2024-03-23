import { FilterButtonItem, Icon, Text } from "./FilterButton.styled";

export const FilterButton = ({ sprite, id, text, width, height }) => {
  return (
    <FilterButtonItem>
      <Icon
        style={{
          width,
          height,
        }}
      >
        <use href={`${sprite}#${id}`} aria-label="icon"></use>
      </Icon>
      <Text>{text}</Text>
    </FilterButtonItem>
  );
};
