import genres from "services/genres";
import {
  List,
  ListItem,
  MovieDescription,
  MovieImage,
  MovieTitle,
  ReleaseDate,
} from "./MovieList.styled";

const MovieList = ({ movies }) => {
  const getGenres = (ids) => {
    return genres
      .reduce((acc, genre) => {
        if (ids.includes(genre.id)) {
          acc.push(genre.name);
        }
        return acc;
      }, [])
      .join(", ");
  };

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
            <span>
              {movie.genre_ids.length
                ? getGenres(movie.genre_ids)
                : "No genres for this movie"}
            </span>

            {movie.release_date && (
              <ReleaseDate>{movie.release_date?.slice(0, 4)}</ReleaseDate>
            )}
          </MovieDescription>
        </ListItem>
      ))}
    </List>
  );
};

export default MovieList;
