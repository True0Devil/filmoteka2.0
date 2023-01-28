import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("pages/Home/Home"));

function App() {
  return (
    <BrowserRouter basename="filmoteka2.0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
