import { CardItem } from "../CardItem/CardItem";
import { Wrapper, Button, Text } from "./CardList.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectItemsPerPage,
  selectPage,
  selectIsLoading,
} from "../../redux/selector";
import { fetchCatalog } from "../../redux/operation";
import { setPage } from "../../redux/slice";
import { Loader } from "../Loader/Loader";

export const CardList = ({ catalog }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
    dispatch(fetchCatalog());
  };

  const currentCatalog = catalog?.slice(0, currentPage * itemsPerPage);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {currentCatalog.map((card) => (
        <CardItem card={card} key={card._id} />
      ))}

      {currentCatalog.length < catalog?.length && !isLoading && (
        <Button onClick={handleLoadMore}>
          <Text>Load More</Text>
        </Button>
      )}
    </Wrapper>
  );
};
