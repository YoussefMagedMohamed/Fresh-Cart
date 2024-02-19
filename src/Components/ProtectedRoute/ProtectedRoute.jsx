import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  // Check if User Logged In Or Not
  if (localStorage.getItem("userToken")) {
    // Go To Next Page If User Logged IN
    return props.children;
  } else {
    // Navigate To Sign In Page
    return <Navigate to={"/"} />;
  }
}
