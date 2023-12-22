/* eslint-disable no-unused-vars */
// components react
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

// api
import { API } from "./config/api";

// components
import Navbars from "./components/navbar/Navbar";
import Home from "./Home/Home";

function App() {
  // state search
  const [search, setSearch] = useState("");
  const [universities, setUniversities] = useState();

  const { data, refetch: refetchUniversities } = useQuery(
    "UniversitiesCache",
    async () => {
      try {
        const response = await API.get("/search?country=indonesia");
        if (response.data) {
          setUniversities(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data from the API");
      }
    }
  );

  useEffect(() => {
    refetchUniversities();
  });

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
          element={<Home universities={universities} search={search} />}
        />
      </Routes>
    </>
  );
}

export default App;
