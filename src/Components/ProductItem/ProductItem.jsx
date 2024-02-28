import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Bars } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import toast from "react-hot-toast";

export default function ProductItem() {
  // Use Add To Cart Context
  let { addToCart } = useContext(CartContext);

  async function postToCart(id) {
    let { data } = await addToCart(id);
    if (data.status == "success") {
      toast.success("Added Successfully");
    }
  }

  // Create Function Get All Products
  function getAllProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  // Use useQuery Hook To manage Data
  let { data, isLoading } = useQuery("allProduct", getAllProducts);

  return (
    <>
      {isLoading ? (
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
        <div className="row gy-5">
          {data.data.data.map((product) => (
            <div
              key={product.id}
              className="col-md-3 col-sm-4 col-xs-6 col-lg-2"
            >
              <div className="product p-2">
                <Link to={`/productDetails/${product.id}`}>
                  <img
                    src={product.imageCover}
                    className="w-100"
                    alt={product.title}
                  />
                  <span className="font-sm text-main">
                    {product.category.name}
                  </span>
                  <h3 className="h5">
                    {product.title.split(" ").splice(0, 2).join(" ")}
                  </h3>
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <span className="font-sm">{product.price} EGP</span>
                    <span className="font-sm">
                      <i className="fas fa-star rating-color mx-2"></i>
                      {product.ratingsAverage}{" "}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => postToCart(product.id)}
                  className="btn bg-main text-main-light w-100 btn-sm"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
