import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import { theme } from "./constants/theme";
import "./index.css";
import { fetchTrendingMovies } from "./services/tmdbAPI.service";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

console.log(fetchTrendingMovies());