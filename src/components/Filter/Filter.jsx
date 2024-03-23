import {
  FilterWrap,
  LocationWrap,
  LocationInputWrapper,
  Form,
  LocationInput,
  Label,
  Icon,
  FilterText,
  ButtonWrapper,
} from "./Filter.styled";
import { VehicleEquipment } from "components/VehicleEquipment/VehicleEquipment";
import sprite from "assets/Images/sprite.svg";
import { Button } from "../Button/Button";

export const Filter = () => {
  return (
    <FilterWrap>
      <Form>
        <LocationWrap>
          <LocationInputWrapper>
            <Label>Location</Label>
            <Icon>
              <use href={`${sprite}#map-pin`} aria-label="pin icon"></use>
            </Icon>
            <LocationInput />
          </LocationInputWrapper>
        </LocationWrap>
        <FilterText>Filters</FilterText>
        <VehicleEquipment />
        <ButtonWrapper>
          <Button text={"Search"} />
        </ButtonWrapper>
      </Form>
    </FilterWrap>
  );
};
