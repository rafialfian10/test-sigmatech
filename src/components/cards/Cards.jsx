/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
// components react bootstrap
import { Button, Card, Form } from "react-bootstrap";
import { Pagination } from "swiper";

// component
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// api
import { API } from "../../config/api";

// scss
import "./Cards.scss";
import "swiper/css";
import "swiper/css/pagination";
import Swal from "sweetalert2";

const Cards = () => {
  const navigate = useNavigate();

  // books promo
  let { data: UniversitiesHipolabs, refetch: refetchUniversitiesHipolabs } =
    useQuery("UniversitiesHipolabsCache", async () => {
      const response = await API.get(`/search`);
      return response.data.data;
    });

  console.log(UniversitiesHipolabs);

  return (
    <>
      {UniversitiesHipolabs?.map((data, i) => {
        return "";
      })}
    </>
  );
};

export default Cards;
