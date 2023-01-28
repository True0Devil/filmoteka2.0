import {
  List,
  ListItem,
  MovieDescription,
  MovieImage,
  MovieTitle,
} from "./MovieList.styled";

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.id}>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={`poster of "${movie.title}" movie`}
          />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDescription>
            <span>{movie.genre_ids.join(", ")}</span>
            <br />
            <span>{movie.release_date.slice(0, 4)}</span>
          </MovieDescription>
        </ListItem>
      ))}
    </List>
  );
};

export default MovieList;
