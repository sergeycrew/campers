import {
  EquipmentList,
  ListItem,
  Title,
  Wrapper,
} from "./VehicleEquipment.styled";
import { FilterButton } from "components/FilterButton/FilterButton";
import sprite from "assets/Images/sprite.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/selector";

export const VehicleEquipment = () => {
  const filter = useSelector(selectFilter);
  const [details, setDetails] = useState(filter.details);
  const [vehicleType, setVehicleType] = useState(filter.vehicleType || "");

  const handleVehicleType = (e) => {
    const { value } = e.target;

    setVehicleType(value === vehicleType ? "" : value);
  };

  const handleEquipment = (e) => {
    const { name, checked } = e.target;
    //console.log(e);
    //console.log(value);
    
    setDetails({ ...details, [name]: checked });
    console.log(details);
  };

  return (
    <>
      <Wrapper>
        <Title>Vehicle equipment</Title>
        <EquipmentList>
          <ListItem>
            <FilterButton
              checked={details.ac}
              onChange={handleEquipment}
              type={"checkbox"}
              name="ac"
              value="AC"
              sprite={sprite}
              id={"AC"}
              text={"AC"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              checked={details.automatic}
              onChange={handleEquipment}
              type={"checkbox"}
              name="automatic"
              value="automatic"
              sprite={sprite}
              id={"transmission"}
              text={"Automatic"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              checked={details.kitchen}
              onChange={handleEquipment}
              type={"checkbox"}
              name="kitchen"
              value="kitchen"
              sprite={sprite}
              id={"kitchen"}
              text={"Kitchen"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              checked={details.tv}
              onChange={handleEquipment}
              type={"checkbox"}
              name="tv"
              value="tv"
              sprite={sprite}
              id={"TV"}
              text={"TV"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              checked={details.bathroom}
              onChange={handleEquipment}
              type={"checkbox"}
              name="bathroom"
              value="bathroom"
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
              onChange={handleVehicleType}
              type={"radio"}
              name="vehicleTypes"
              value="panelTruck"
              sprite={sprite}
              id={"panelTruck"}
              text={"Van"}
              width={"40px"}
              height={"28px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              onChange={handleVehicleType}
              type={"radio"}
              value="fullyIntegrated"
              name={"fullyIntegrated"}
              sprite={sprite}
              id={"fullyIntegrated"}
              text={"Fully Integrated"}
              width={"40px"}
              height={"28px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              onChange={handleVehicleType}
              type={"radio"}
              value="alcove"
              name={"alcove"}
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
