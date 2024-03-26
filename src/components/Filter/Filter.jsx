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
import { useDispatch } from "react-redux";
import { fetchCatalog } from "../../redux/operation";
import { setPage } from "../../redux/slice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setPage(1));
    dispatch(fetchCatalog());
  };

  return (
    <FilterWrap>
      <Form>
        <LocationWrap>
          <LocationInputWrapper>
            <Label>Location</Label>
            <Icon>
              <use href={`${sprite}#map-pin`} aria-label="pin icon"></use>
            </Icon>
            <LocationInput placeholder="Kyiv, Ukraine" />
          </LocationInputWrapper>
        </LocationWrap>
        <FilterText>Filters</FilterText>
        <VehicleEquipment />
        <ButtonWrapper>
          <Button text={"Search"} onClick={handleOnClick} />
        </ButtonWrapper>
      </Form>
    </FilterWrap>
  );
};
