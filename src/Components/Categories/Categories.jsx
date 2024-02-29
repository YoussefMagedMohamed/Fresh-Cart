import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useQuery } from "react-query";

export default function Categories() {
  // Create Function Get All Products
  function getAllCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  // Use useQuery Hook To manage Data
  let { data, isLoading } = useQuery("allcategories", getAllCategories);

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
          {data.data.data.map((category) => (
            <div className="col-md-4 p-5" key={category._id}>
              <div className="product p-2">
                <img src={category.image} className="w-100" alt="" />
                <h2 className="bg-main text-light p-3 text-center">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
