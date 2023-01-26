import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("./Layout/Layout"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
