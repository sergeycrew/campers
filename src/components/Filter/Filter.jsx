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
import { useState } from "react";
import { useSelector } from "react-redux";
import { setSearchParams, resetFilter } from "../../redux/filterSlise";
import { selectFilter } from "../../redux/selector";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [location, setLocation] = useState(filter.location);
  const [details, setDetails] = useState(filter.details);
  const [vehicleType, setVehicleType] = useState(filter.vehicleType || "");

  const handleFilter = () => {
    if (
      filter.location ||
      Object.values(filter.details).some(Boolean) ||
      filter.vehicleType
    ) {
      dispatch(resetFilter());
      setLocation("");
      setDetails({
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
      });
      setVehicleType("");

      const vehicleInputs = document.querySelectorAll('[name="vehicleTypes"]');
      vehicleInputs.forEach((input) => {
        input.checked = false;
      });
    } else {
      dispatch(setSearchParams({ location, details, vehicleType }));
    }
  };

  const handleLocation = (e) => {
    const { value } = e.target;
    setLocation(value.trim());
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
            <LocationInput
              placeholder="Kyiv, Ukraine"
              onChange={handleLocation}
              value={location}
              name="location"
              type="text"
            />
          </LocationInputWrapper>
        </LocationWrap>
        <FilterText>Filters</FilterText>
        <VehicleEquipment />
        <ButtonWrapper>
          <Button text={"Search"} onClick={handleFilter}>
            {/* {filter.location ||
            Object.values(filter.details).some(Boolean) ||
            filter.vehicleType
              ? "Reset"
              : "Search"} */}
          </Button>
        </ButtonWrapper>
      </Form>
    </FilterWrap>
  );
};
