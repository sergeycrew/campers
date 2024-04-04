import { CardItem } from "../CardItem/CardItem";
import { Wrapper, Button, Text } from "./CardList.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  selectItemsPerPage,
  selectPage,
  selectIsLoading,
  //selectCatalog,
  selectTotal,
} from "../../redux/selector";
import { getAllAdverts, getTotal } from "../../redux/operation";
import { setPage } from "../../redux/slice";
import { Loader } from "../Loader/Loader";
import { useEffect } from "react";

export const CardList = ({ catalog }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const totalAdverts = useSelector(selectTotal);

  const currentPage = useSelector(selectPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    //dispatch(setPage(1));
    //dispatch(getTotal());
    dispatch(getAllAdverts({ currentPage }));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(setPage(1));
    console.log(currentPage);
  };

  const visibleButton = currentPage < Math.ceil(totalAdverts / itemsPerPage);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {catalog.map((card) => (
        <CardItem card={card} key={card._id} />
      ))}

      {visibleButton && !isLoading && (
        <Button onClick={handleLoadMore}>
          <Text>Load More</Text>
        </Button>
      )}
    </Wrapper>
  );
};
