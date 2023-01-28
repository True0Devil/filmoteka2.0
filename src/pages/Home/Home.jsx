import MovieList from "components/MovieList/MovieList";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingMovies } from "services/tmdbAPI.service";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(movies);
  const totalPages = movies?.total_pages;
  console.log(totalPages);

  const page = searchParams.get("page") ?? 1;

  useEffect(() => {
    fetchTrendingMovies(page).then(setMovies);
  }, [page]);

  const incrementPage = (page) => {
    if (page === "...") {
      return;
    }
    setSearchParams({
      page,
    });
  };

  if (!movies) return;
  console.log(movies);

  console.log("render in component");
  return (
    <main>
      <MovieList movies={movies.results} />
      <Pagination
        page={page}
        incrementPage={incrementPage}
        total={totalPages}
      />
    </main>
  );
};

export default Home;
