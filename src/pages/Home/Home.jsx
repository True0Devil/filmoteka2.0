import { HeaderContainer } from "components/HeaderContainer/HeaderContainer";
import { Loader } from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies, fetchTrendingMovies } from "services/tmdbAPI.service";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || 1;

  const totalPages = movies?.total_pages;

  useEffect(() => {
    setIsLoading(true);
    if (!searchQuery) {
      fetchTrendingMovies(page).then(setMovies).then(setIsLoading(false));
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

    fetchMovies(searchQuery, page)
      .then((movies) => {
        if (!movies.results.length) {
          throw new Error();
        }
        setMovies(movies);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

  // if (!movies) return;

  return (
    <main>
      <h1 className="visually-hidden">Trending today</h1>
      <div className="container">
        <HeaderContainer type="home" onSubmit={handleSubmit} error={error} />
        <Pagination
          page={page}
          total={totalPages}
          onPageChange={handlePageChange}
        />
        {movies?.results && <MovieList movies={movies.results} />}
        <Pagination
          page={page}
          total={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {isLoading && <Loader />}
    </main>
  );
};

export default Home;
