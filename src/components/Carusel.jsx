import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {caruselItems } from "../utils/consttanta";
import { useTranslation } from "react-i18next";



const Carousel = () => {
  const {t}=useTranslation()


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true, 
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true, 
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, 
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...settings}>
        {caruselItems.map((item, index) => (
          <div key={index} className="p-2 cursor-grab active:cursor-grabbing" >
            <div 
              className="bg-black rounded-xl overflow-hidden shadow-lg relative"
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", height: "145px" }}
            >
              <div className="absolute bottom-0 left-0  text-white p-4 w-full">
                <h3 className="text-lg font-bold">{t(item.name)}</h3>
                <p>{item.booked} {t("Booked")}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;