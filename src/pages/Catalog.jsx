import { CardList } from "../components/CardList/CardList";
import { Container } from "../styles/container";
import { Filter } from "components/Filter/Filter";
import { selectCatalog } from "../redux/selector";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCatalog } from "../redux/operation";
import { setPage } from "../redux/slice";

export const Catalog = () => {
  const catalog = useSelector(selectCatalog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <Container style={{ display: "flex" }}>
      <Filter catalog={catalog} />
      <CardList catalog={catalog} />
    </Container>
  );
};
