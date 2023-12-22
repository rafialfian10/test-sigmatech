/* eslint-disable no-unused-vars */
// components
// eslint-disable-next-line no-unused-vars
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// api
import { API, setAuthToken } from "./config/api";

// pages
import Navbars from "./components/navbar/Navbar";
import Home from "./Home/Home";

function App() {

  // state search
  const [search, setSearch] = useState("");

  // state data books
  const [books, setBooks] = useState();

  // handle search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbars search={search} handleSearch={handleSearch} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home books={books} search={search} />}
        />
      </Routes>
    </>
  );
}

export default App;
