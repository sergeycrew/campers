import { useSelector } from "react-redux";
import { selectFavorite } from "../redux/selector";
import { CardList } from "../components/CardList/CardList";
import { Container } from "../styles/container";

export const Favorites = () => {
  const favorite = useSelector(selectFavorite);

  return (
    <Container>
      <CardList catalog={favorite} />
    </Container>
  );
};
