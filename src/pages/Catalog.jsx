//import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CardList } from "../components/CardList/CardList";
import { Container } from "../styles/container";
import { Filter } from "components/Filter/Filter";
import { selectCatalog } from "../redux/selector";
import { useSelector } from "react-redux";

export const Catalog = () => {
  //const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const catalog = useSelector(selectCatalog);

  return (
    <Container style={{ display: "flex" }}>
      <Filter
        catalog={catalog}
        //setPage={setPage}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <CardList catalog={catalog} />
    </Container>
  );
};
