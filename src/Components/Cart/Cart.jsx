import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Cart() {
  let { getCartItems, removeItem, updateItem } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getItems() {
    let { data } = await getCartItems();
    setCartItems(data);
    setLoading(false);
  }

  async function deleteItem(id) {
    setLoading(true);
    let { data } = await removeItem(id);
    setCartItems(data);
    setLoading(false);
  }

  async function updateCartItem(id, count) {
    setLoading(true);
    if (count < 1) {
      setLoading(true);
      let { data } = await removeItem(id);
      setCartItems(data);
      setLoading(false);
    } else {
      let { data } = await updateItem(id, count);
      setCartItems(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="bg-main-light p-2 mt-5">
        {loading ? (
          <div className="loading">
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
          cartItems?
          <>
            <p className="text-main">
              Number OF Items : {cartItems.numOfCartItems}
            </p>
            <p className="text-main">
              Total Price : {cartItems.data.totalCartPrice} EGP{" "}
            </p>
            {cartItems.data.products.map((product) => (
              <div
                className="row p-2 m-0 border-1 border-bottom align-items-center"
                key={product.product.id}
              >
                <div className="col-md-1">
                  <div className="img">
                    <img
                      src={product.product.imageCover}
                      className="w-100"
                      alt={product.product.title}
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="cart">
                    <h3 className="h5 fw-bold">
                      {product.product.title.split(" ").slice(0, 3).join(" ")}
                    </h3>
                    <p className="text-main fw-bold">
                      Price : {product.price} EGP
                    </p>
                    <button
                      onClick={() => deleteItem(product.product.id)}
                      className="btn text-main p-0"
                    >
                      {" "}
                      <i className="fas fa-trash-can"></i> Remove
                    </button>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="count">
                    <button
                      onClick={() => {
                        updateCartItem(product.product.id, product.count + 1);
                      }}
                      className="btn brdr p-2"
                    >
                      {" "}
                      +{" "}
                    </button>
                    <span className="mx-2">{product.count}</span>
                    <button
                      onClick={() => {
                        updateCartItem(product.product.id, product.count - 1);
                      }}
                      className="btn brdr p-2"
                    >
                      {" "}
                      -{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Link to={`/shippingaddress/${cartItems.data._id}`} className="btn bg-main text-light m-4">Online Payment</Link>
          </>
          : <h2>Your Cart is Empty...</h2>
        )}
      </div>
    </>
    
  );
}
