import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";

export default function CategoriesSlider() {
  // Settings For Slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  let { data } = useQuery("Categories", getCategories);

  console.log(data?.data.data);

  return (
    <>
      <Slider {...settings} className="my-5">
        {data?.data.data.map((category) => (
          <div className="col-md-2" key={category._id}>
            <div className="img">
              <img src={category.image} className="w-100" height={200} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
