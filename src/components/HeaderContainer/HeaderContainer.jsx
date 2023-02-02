import { Searchbar } from "components/Searchbar/Searchbar";
import { Container } from "./HeaderContainer.styled";

export const HeaderContainer = ({ type, onSubmit }) => {
  return (
    <Container>
      {type === "home" ? <Searchbar onSubmit={onSubmit} /> : "lmao"}
    </Container>
  );
};
