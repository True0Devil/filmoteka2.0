const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`poster of "${movie.title}" movie`}
          />
          <h2>{movie.title}</h2>
          <p>
            <span>{movie.genre_ids.join(", ")}</span>
            <br />
            <span>{movie.release_date.slice(0, 4)}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
