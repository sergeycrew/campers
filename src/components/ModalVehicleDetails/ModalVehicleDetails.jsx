import {
  DetailsList,
  ItemDetails,
  ListItem,
  Title,
  Value,
  Wrapper,
} from "./ModalVehicleDetails.styled";

export const ModalVehicleDetails = ({ cardInfo }) => {
  const { form, length, width, height, tank, consumption } = cardInfo;
  return (
    <Wrapper>
      <Title>Vehicle details</Title>
      <DetailsList>
        <ListItem>
          <ItemDetails>Form</ItemDetails>
          <Value>{form}</Value>
        </ListItem>
        <ListItem>
          <ItemDetails>Length</ItemDetails>
          <Value>{length}</Value>
        </ListItem>
        <ListItem>
          <ItemDetails>Width</ItemDetails>
          <Value>{width}</Value>
        </ListItem>
        <ListItem>
          <ItemDetails>Height</ItemDetails>
          <Value>{height}</Value>
        </ListItem>
        <ListItem>
          <ItemDetails>Tank</ItemDetails>
          <Value>{tank}</Value>
        </ListItem>
        <ListItem>
          <ItemDetails>Consumption</ItemDetails>
          <Value>{consumption}</Value>
        </ListItem>
      </DetailsList>
    </Wrapper>
  );
};
