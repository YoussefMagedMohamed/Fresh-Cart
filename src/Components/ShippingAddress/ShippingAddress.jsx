import { useFormik } from "formik";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";

export default function ShippingAddress() {
  let { checkOutSession } = useContext(CartContext);

  let { id } = useParams();

  async function checkOut(values) {
    let { data } = await checkOutSession(id, values);
    console.log(data);
    if (data.status == "success") {
      window.location.href = data.session.url;
    }
  }

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: checkOut,
  });

  return (
    <>
      <div className="w-75 mx-auto m-5">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="details" className="fw-bold my-2">
            Details
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="details"
            name="details"
            onChange={formik.handleChange}
          />

          <label htmlFor="phone" className="fw-bold my-2">
            Phone
          </label>
          <input
            type="tel"
            className="form-control mb-3"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
          />

          <label htmlFor="city" className="fw-bold my-2">
            City
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="city"
            name="city"
            onChange={formik.handleChange}
          />

          <button className="btn bg-main text-light" type="submit">
            Check Out
          </button>
        </form>
      </div>
    </>
  );
}
