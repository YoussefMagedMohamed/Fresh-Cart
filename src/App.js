import "./App.css";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import Brands from "./Components/Brands/Brands";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import Signout from "./Components/Signout/Signout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Signin /> },
        { path: "cart", element: <Cart /> },
        { path: "products", element: <Products /> },
        { path: "categories", element: <Categories /> },
        { path: "brands", element: <Brands /> },
        { path: "home", element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "signout", element: <Signout /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
