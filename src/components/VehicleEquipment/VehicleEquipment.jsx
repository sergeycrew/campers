import {
  EquipmentList,
  ListItem,
  Title,
  Wrapper,
} from "./VehicleEquipment.styled";
import { FilterButton } from "components/FilterButton/FilterButton";
import sprite from "assets/Images/sprite.svg";
import { useState } from "react";

export const VehicleEquipment = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Wrapper>
        <Title>Vehicle equipment</Title>
        <EquipmentList>
          <ListItem>
            <FilterButton
              type={"checkbox"}
              value="AC"
              checked={selectedOption === "AC"}
              onChange={() => handleOptionChange("AC")}
              sprite={sprite}
              id={"AC"}
              text={"AC"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              type={"checkbox"}
              value="transmission"
              checked={selectedOption === "transmission"}
              onChange={() => handleOptionChange("transmission")}
              sprite={sprite}
              id={"transmission"}
              text={"Automatic"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              type={"checkbox"}
              value="kitchen"
              checked={selectedOption === "kitchen"}
              onChange={() => handleOptionChange("kitchen")}
              sprite={sprite}
              id={"kitchen"}
              text={"Kitchen"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              type={"checkbox"}
              value="TV"
              checked={selectedOption === "TV"}
              onChange={() => handleOptionChange("TV")}
              sprite={sprite}
              id={"TV"}
              text={"TV"}
              width={"32px"}
              height={"32px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              type={"checkbox"}
              value="shower"
              checked={selectedOption === "shower"}
              onChange={() => handleOptionChange("shower")}
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
              type={"radio"}
              value="panelTruck"
              checked={selectedOption === "panelTruck"}
              onChange={() => handleOptionChange("panelTruck")}
              sprite={sprite}
              id={"panelTruck"}
              text={"Van"}
              width={"40px"}
              height={"28px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              type={"radio"}
              value="fullyIntegrated"
              checked={selectedOption === "fullyIntegrated"}
              onChange={() => handleOptionChange("fullyIntegrated")}
              sprite={sprite}
              id={"fullyIntegrated"}
              text={"Fully Integrated"}
              width={"40px"}
              height={"28px"}
            />
          </ListItem>
          <ListItem>
            <FilterButton
              type={"radio"}
              value="alcove"
              checked={selectedOption === "alcove"}
              onChange={() => handleOptionChange("alcove")}
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
