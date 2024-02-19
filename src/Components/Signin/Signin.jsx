import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Circles } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext/UserContext";
// import { UserContext } from "../../Context/UserContext/UserContext";

export default function Signin() {
  // State For Loading
  const [loading, setLoading] = useState(false);

  // State For API Error
  const [apiError, setApiError] = useState(null);

  // Use Navigate To Go To Sign In Page After Registeration
  let navigate = useNavigate();

  // Use User Context
  let { setUserToken } = useContext(UserContext);

  // Submit Form
  async function registerSubmit(values) {
    setLoading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {
        setApiError(err.response.data.message);
        setLoading(false);
      });
    if (data.message == "success") {
      setLoading(false);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      navigate("/home");
    }
  }

  // Validation of Our Form
  let validationSchema = Yup.object({
    email: Yup.string().required("Email is Required").email("Invalid Email"),

    password: Yup.string()
      .required("Password is Required")
      .matches(/^[A-Z][\w @]{5,8}$/, "Invalid Password"),
  });

  // Handle Our Form
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <div className="w-75 py-4 mx-auto">
        <h2>Sign In :</h2>
        <form className="my-4" onSubmit={formik.handleSubmit}>
          {apiError ? <div className="alert alert-danger">{apiError}</div> : ""}

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
              Sign In
            </button>
          )}
          <Link className="ps-3" to={"/register"}>
            Register Now
          </Link>
        </form>
      </div>
    </>
  );
}
