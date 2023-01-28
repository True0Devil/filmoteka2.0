import axios from "axios";

const API_KEY = "94b41ec0e6f6b6ffeb7ae80dc6b59179";

const tmbdAPI = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const fetchTrendingMovies = async (page = 1) => {
  const { data } = await tmbdAPI.get("trending/movie/day", {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return data;
};
