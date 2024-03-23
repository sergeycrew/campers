import { CardList } from "../components/CardList/CardList";
import { Container } from "../styles/container";
import { Filter } from "components/Filter/Filter";

export const Catalog = () => {
  return (
    <Container style={{ display: "flex" }}>
      <Filter />
      <CardList />
    </Container>
  );
};
