import { HeaderContainer } from "components/HeaderContainer/HeaderContainer";
import MovieList from "components/MovieList/MovieList";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies, fetchTrendingMovies } from "services/tmdbAPI.service";

const Home = () => {
  const [movies, setMovies] = useState(null);
  // const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || 1;

  const totalPages = movies?.total_pages;

  useEffect(() => {
    if (!searchQuery) {
      fetchTrendingMovies(page).then(setMovies);
      return;
    }

    page === 1
      ? setSearchParams({
          q: searchQuery,
        })
      : setSearchParams({
          q: searchQuery,
          page,
        });

    fetchMovies(searchQuery, page).then(setMovies);
  }, [searchQuery, page, setSearchParams]);

  const handlePageChange = (newPage) => {
    if (newPage === "...") return;
    const nextParams = searchQuery
      ? { q: searchQuery, page: newPage }
      : { page: newPage };
    setSearchParams(nextParams);
  };

  const handleSubmit = (value) => {
    const newQuery = value.toLowerCase().trim();
    setSearchParams({ q: newQuery });
  };

  if (!movies) return;

  return (
    <main>
      <HeaderContainer type="home" onSubmit={handleSubmit} />
      <Pagination
        page={page}
        total={totalPages}
        onPageChange={handlePageChange}
      />
      {movies.results && <MovieList movies={movies.results} />}
      <Pagination
        page={page}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default Home;
