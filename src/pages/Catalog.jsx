import { CardList } from "../components/CardList/CardList";
import { Container } from "../styles/container";
import { Filter } from "components/Filter/Filter";
import { selectCatalog } from "../redux/selector";
import { useSelector } from "react-redux";

export const Catalog = () => {
  const catalog = useSelector(selectCatalog);

  return (
    <Container style={{ display: "flex" }}>
      <Filter />
      <CardList catalog={catalog} />
    </Container>
  );
};
