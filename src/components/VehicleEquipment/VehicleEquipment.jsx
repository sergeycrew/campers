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
  const [selectedOption, setSelectedOption] = useState(false);

  const handleOptionChange = (option) => {
    console.log(option);
    setSelectedOption((prev) => !prev);
    //console.log(selectedOption);
  };

  return (
    <>
      <Wrapper>
        <Title>Vehicle equipment</Title>
        <EquipmentList>
          <ListItem>
            <FilterButton
              type={"checkbox"}
              name={"AC"}
              value="AC"
              selected={selectedOption}
              //checked={selectedOption === "AC"}
              onChange={handleOptionChange}
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
              name={"transmission"}
              value="transmission"
              selected={selectedOption}
              //checked={selectedOption === "transmission"}
              onChange={(evt) => handleOptionChange(evt.target.value)}
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
              name={"kitchen"}
              selected={selectedOption}
              //checked={selectedOption === "kitchen"}
              onChange={(evt) => handleOptionChange(evt.target.value)}
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
              name={"TV"}
              selected={selectedOption}
              //checked={selectedOption === "TV"}
              onChange={(evt) => handleOptionChange(evt.target.value)}
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
              name={"shower"}
              selected={selectedOption}
              // checked={selectedOption === "shower"}
              onChange={(evt) => handleOptionChange(evt.target.value)}
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
              name={"panelTruck"}
              selected={selectedOption}
              checked={selectedOption === "panelTruck"}
              onChange={(evt) => handleOptionChange(evt.target.value)}
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
              name={"fullyIntegrated"}
              selected={selectedOption}
              checked={selectedOption === "fullyIntegrated"}
              onChange={(evt) => handleOptionChange(evt.target.value)}
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
              name={"alcove"}
              selected={selectedOption}
              checked={selectedOption === "alcove"}
              onChange={(evt) => handleOptionChange(evt.target.value)}
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
