import {
  EquipmentList,
  ListItem,
  Title,
  Wrapper,
} from "./VehicleEquipment.styled";
import { FilterButton } from "components/FilterButton/FilterButton";
import sprite from "assets/Images/sprite.svg";

export const VehicleEquipment = () => {
  return (
    <>
      <Wrapper>
        <Title>Vehicle equipment</Title>
        <EquipmentList>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"ac"}
              text={"AC"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"transmission"}
              text={"Automatic"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"kitchen"}
              text={"Kitchen"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"TV"}
              text={"TV"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"shower"}
              text={"Shower/WC"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
        </EquipmentList>
      </Wrapper>
      <Wrapper>
        <Title>Vehicle type</Title>
        <EquipmentList>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"panelTruck"}
              text={"Van"}
              width={"40px"}
              height={"28px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"fullyIntegrated"}
              text={"Fully Integrated"}
              width={"40px"}
              height={"28px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              sprite={sprite}
              id={"alcove"}
              text={"Alcove"}
              width={"40px"}
              height={"28px"}
            />
          </ListItem>
        </EquipmentList>
      </Wrapper>
    </>
  );
};
