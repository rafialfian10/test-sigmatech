/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
// components react bootstrap
import { Button, Card, Form } from "react-bootstrap";
import { Pagination } from "swiper";

// component
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "../popup/Popup";

// api
import { API } from "../../config/api";

// scss
import "./Cards.scss";
import "swiper/css";
import "swiper/css/pagination";
import Swal from "sweetalert2";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Cards = () => {
  const navigate = useNavigate();

  // state popup
  const [popup, setPopup] = useState(false);

  // books promo
  let { data: UniversitiesHipolabs, refetch: refetchUniversitiesHipolabs } = useQuery(
    "UniversitiesHipolabsCache",
    async () => {
      const response = await API.get(`/search?country=United States`);
      return response.data.data;
    }
  );

  console.log(UniversitiesHipolabs);

  return (
    <>
      <Popup popup={popup} setPopup={setPopup} />
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper container-card-slider"
      >
        {UniversitiesHipolabs?.map((data, i) => {
          return (
            ""
          );
        })}
      </Swiper>
    </>
  );
};

export default Cards;
