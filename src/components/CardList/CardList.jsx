import { CardItem } from "../CardItem/CardItem";
import { Wrapper, Button, Text } from "./CardList.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import { useSearchParams } from "react-router-dom";
import {
  selectItemsPerPage,
  selectPage,
  selectIsLoading,
  selectTotal,
  selectCatalog,
} from "../../redux/selector";
import { getAllAdverts } from "../../redux/operation";
import { setPage } from "../../redux/slice";
import { Loader } from "../Loader/Loader";
import { useEffect } from "react";

export const CardList = ({ catalog }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const totalAdverts = useSelector(selectTotal);
  const currentCatalog = useSelector(selectCatalog);

  const currentPage = useSelector(selectPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const lastElement = currentPage < Math.ceil(totalAdverts / itemsPerPage);
  const onLastElementFetching = currentCatalog.length >= totalAdverts;

  useEffect(() => {
    if (onLastElementFetching) {
      return;
    }
    dispatch(getAllAdverts({ currentPage }));
  }, [dispatch, currentPage, onLastElementFetching]);

  const handleLoadMore = () => {
    dispatch(setPage(1));
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {catalog.map((card) => (
        <CardItem card={card} key={card._id} />
      ))}

      {lastElement && !isLoading && (
        <Button onClick={handleLoadMore}>
          <Text>Load More</Text>
        </Button>
      )}
    </Wrapper>
  );
};
