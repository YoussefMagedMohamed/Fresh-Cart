import axios from 'axios';
import React from 'react'
import { Bars } from 'react-loader-spinner';
import { useQuery } from 'react-query';

export default function Brands() {
    // Create Function Get All Products
    function getAllBrands() {
      return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
    }
  
    // Use useQuery Hook To manage Data
    let { data, isLoading } = useQuery("allbrands", getAllBrands);
  return <>
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
          {data.data.data.map((brand) => (
            <div className="col-md-4 p-5" key={brand._id}>
              <div className="product p-2">
                <img src={brand.image} className="w-100" alt="" />
                <h2 className="bg-main text-light p-3 text-center">{brand.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  </>
}
