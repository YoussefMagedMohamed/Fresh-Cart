import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function ProductItem() {
  // Create State For Store And Use Data
  const [products, setProducts] = useState([]);

  // Create State For Loading
  const [loading, setLoading] = useState(true);

  // Create Function Get All Products
  async function getAllProducts() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setProducts(data.data);
    setLoading(false);
  }

  // Call Get All Product Function
  useEffect(() => {
    getAllProducts();
  }, []);

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
        <div  className="row gy-5">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-4 col-xs-6 col-lg-2">
              <Link to={`/productDetails/${product.id}`}>
                <div className="product p-2">
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
                  <button className="btn bg-main text-main-light w-100 btn-sm">
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
