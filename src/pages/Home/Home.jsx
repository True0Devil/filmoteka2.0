import MovieList from "components/MovieList/MovieList";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingMovies } from "services/tmdbAPI.service";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = movies?.total_pages;
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    fetchTrendingMovies(page).then(setMovies);
  }, [page]);

  const handlePageChange = (page) => {
    if (page === "...") return;
    setSearchParams({
      page,
    });
  };

  if (!movies) return;

  console.log("render in component");
  return (
    <main>
      <Pagination
        page={page}
        total={totalPages}
        onPageChange={handlePageChange}
      />
      <MovieList movies={movies.results} />
      <Pagination
        page={page}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default Home;
