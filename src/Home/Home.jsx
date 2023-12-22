import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// scss
import "./Home.scss";

// components
import Cards from "../components/cards/Cards";

const Home = ({ books, search }) => {

  const navigate = useNavigate();

  return (
    <>
      <Cards />
    </>
  );
};

export default Home;
