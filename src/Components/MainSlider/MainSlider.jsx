import React from "react";
import slide1 from "../../Assets/images/slider-image-3.jpeg";
import slide2 from "../../Assets/images/slider-image-2.jpeg";
import slide3 from "../../Assets/images/slider-image-1.jpeg";
import img1 from "../../Assets/images/grocery-banner.png";
import img2 from "../../Assets/images/grocery-banner-2.jpeg";
import Slider from "react-slick";

export default function MainSlider() {
  // Settings For Slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return <>
    <div className="row my-3">
      <div className="col-md-9 gx-0 ">
        <Slider {...settings}>
          <img src={slide1} height={400} className="w-100" alt="" />
          <img src={slide2} height={400} className="w-100" alt="" />
          <img src={slide3} height={400} className="w-100" alt="" />
        </Slider>
      </div>
      <div className="col-md-3 gx-0">
        <div className="images">
          <img src={img1} height={200} className="w-100" alt="" />
          <img src={img2} height={200} className="w-100" alt="" />
        </div>
      </div>
    </div>
  </>;
}
