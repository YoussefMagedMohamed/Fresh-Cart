import "./App.css";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import Brands from "./Components/Brands/Brands";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Signin /> },
        { path: "cart", element: <ProtectedRoute> <Cart/> </ProtectedRoute> },
        { path: "products", element:  <ProtectedRoute> <Products/> </ProtectedRoute> },
        { path: "categories", element:  <ProtectedRoute> <Categories/> </ProtectedRoute> },
        { path: "brands", element:  <ProtectedRoute> <Brands/> </ProtectedRoute> },
        { path: "home", element: <ProtectedRoute> <Home/> </ProtectedRoute> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  // Handle User Refresh
  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
