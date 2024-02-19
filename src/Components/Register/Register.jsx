import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Circles } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {
  // State For Loading
  const [loading, setLoading] = useState(false);

  // State For API Error
  const [apiError, setApiError] = useState(null);

  // Use Navigate To Go To Sign In Page After Registeration
  let navigate = useNavigate();

  // Submit Form
  async function registerSubmit(values) {
    setLoading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((err) => {
        setApiError(err.response.data.message);
        console.log(err.response.data.message);
        setLoading(false);
      });
    if (data.message == "success") {
      setLoading(false);
      navigate("/signin");
    }
  }

  // Validation of Our Form
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is Required")
      .min(3, "Min Length is 3")
      .max(10, "Max Length is 10"),

    email: Yup.string().required("Email is Required").email("Invalid Email"),

    password: Yup.string()
      .required("Password is Required")
      .matches(/^[A-Z][\w @]{5,8}$/, "Invalid Password"),

    rePassword: Yup.string()
      .required("Re-Password is Required")
      .oneOf([Yup.ref("password")], "Re-Password Doesn't Match Password"),

    phone: Yup.string()
      .required("Phone is Required")
      .matches(/^01[0125][0-9]{8}$/, "Invalid Phone Number"),
  });

  // Handle Our Form
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: registerSubmit,
  });

  // console.log(formik.errors.name);

  return (
    <>
      <div className="w-75 py-4 mx-auto">
        <h2>Register Now :</h2>
        <form className="my-4" onSubmit={formik.handleSubmit}>
          {apiError ? <div className="alert alert-danger">{apiError}</div> : ""}

          <label htmlFor="name" className="mb-2">
            Name :
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="form-control mb-3"
            name="name"
            placeholder="Enter Your Name"
            id="name"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger py-2">{formik.errors.name}</div>
          ) : (
            ""
          )}

          <label htmlFor="email" className="mb-2">
            Email :
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            className="form-control mb-3"
            name="email"
            placeholder="Enter Your E-mail"
            id="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger py-2">{formik.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="password" className="mb-2">
            Password :
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            className="form-control mb-3"
            name="password"
            placeholder="Enter Your Password"
            id="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger py-2">
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="repassword" className="mb-2">
            Re-Password :
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            className="form-control mb-3"
            name="rePassword"
            placeholder="Enter Your Re-Password"
            id="repassword"
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger py-2">
              {formik.errors.rePassword}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="phone" className="mb-2">
            Phone :
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="tel"
            className="form-control mb-3"
            name="phone"
            placeholder="Enter Your Phone"
            id="phone"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger py-2">{formik.errors.phone}</div>
          ) : (
            ""
          )}

          {loading ? (
            <button className="btn bg-main text-light" type="button">
              <Circles
                height="30"
                width="30"
                color="#fff"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </button>
          ) : (
            <button
              disabled={!(formik.isValid && formik.dirty)}
              className="btn bg-main text-light"
              type="submit"
            >
              Register
            </button>
          )}
          <Link className="ps-3" to={"/signin"}>
            Sign In Now
          </Link>
        </form>
      </div>
    </>
  );
}
