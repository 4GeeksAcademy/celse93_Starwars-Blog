import { Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { pages } from "./utilities/pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {pages.map((page) => {
          return <Route path={page.route} element={page.component} />;
        })}
        <Route
          path="*"
          element={<h1 style={{ color: "white" }}>Not found!</h1>}
        />
      </Routes>
    </>
  );
};
