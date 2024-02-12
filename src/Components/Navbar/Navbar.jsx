import React from "react";
import logo from "../../Assets/images/freshcart-logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="Fresh Cart" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"cart"}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"categories"}>
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"brands"}>
                  Brands
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <i className="fab fa-tiktok"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link" to={"signin"}>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"register"}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"signout"}>
                    Sign Out
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
