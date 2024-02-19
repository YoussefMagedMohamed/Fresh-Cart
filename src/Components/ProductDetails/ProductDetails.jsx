import axios from "axios";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  // Use useParams Hook to Get Id From Param
  let { id } = useParams();

  // Create State For Store And Use Data
  const [details, setDetails] = useState([]);

  // Create State For Loading
  const [loading, setLoading] = useState(true);

  // Create Function To Get Product Details
  async function getProductDetails(id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setDetails(data.data);
    setLoading(false);
  }

  // Use useEffect Hook To Call getProductDetails Function
  useEffect(() => {
    getProductDetails(id);
  }, []);

  // Settings For Slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      {loading ? (
        <div className="row vh-100">
          <Bars
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="d-flex justify-content-center mt-5"
            visible={true}
          />
        </div>
      ) : (
        <div className="row align-items-center">
          <div className="col-md-4">
            <Slider {...settings}>
              {details.images.map(image => <img src={image} key={details._id} className="w-100 p-3" alt={details.title}/>)}
            </Slider>
          </div>
          <div className="col-md-8">
            <div className="details">
              <h3>{details.title}</h3>
              <p className="p-3">{details.description}</p>
              <span className="font-sm">{details.category.name}</span>
              <div className="d-flex justify-content-between align-items-center py-3">
                <span className="font-sm">{details.price} EGP</span>
                <span className="font-sm">
                  <i className="fas fa-star rating-color mx-2"></i>
                  {details.ratingsAverage}{" "}
                </span>
              </div>
              <button className="btn bg-main text-main-light w-100 btn-sm">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
