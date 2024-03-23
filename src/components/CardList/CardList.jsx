import { useEffect } from "react";
import { CardItem } from "../CardItem/CardItem";
import { Wrapper } from "./CardList.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCatalog } from "../../redux/selector";
import { fetchCatalog } from "../../redux/operation";

export const CardList = () => {
  const dispatch = useDispatch();
  //const isLoading = useSelector(selectIsLoading);
  const catalog = useSelector(selectCatalog);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  console.log(catalog);

  return (
    <Wrapper>
      <CardItem />
    </Wrapper>
  );
};
