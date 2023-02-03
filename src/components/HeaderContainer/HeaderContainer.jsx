import { Searchbar } from "components/Searchbar/Searchbar";
import { Container, ErrorMessage } from "./HeaderContainer.styled";

export const HeaderContainer = ({ type, error, onSubmit }) => {
  return (
    <Container>
      {type === "home" ? <Searchbar onSubmit={onSubmit} /> : "lmao"}
      {error && (
        <ErrorMessage>
          Search result not successful. Enter the correct movie name and try
          again.
        </ErrorMessage>
      )}
    </Container>
  );
};
