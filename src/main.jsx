import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./layout/Header.jsx";
import SignIn from "./pages/SignIn.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import UserProfile from "./components/user/UserProfile.jsx";
import UserOrder from "./components/user/UserOrder.jsx";
import AdminProfile from "./components/admin/AdminProfile.jsx";
import AdminProducts from "./components/admin/AdminProducts.jsx";
import AdminCategories from "./components/admin/AdminCategories.jsx";
import AdminManageUsers from "./components/admin/AdminManageUsers.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },
      {
        path: "/sign-in",
        element: <Products></Products>,
      },
      {
        path: "/sign-out",
        element: <SignIn></SignIn>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/dashboard/user",
        element: <ProtectedRoute></ProtectedRoute>,
        children: [
          {
            path: "profile",
            element: <UserProfile></UserProfile>,
          },
          {
            path: "orders",
            element: <UserOrder></UserOrder>,
          },
        ],
      },
      {
        path: "/dashboard/admin",
        element: <AdminRoute></AdminRoute>,
        children: [
          {
            path: "profile",
            element: <AdminProfile></AdminProfile>,
          },
          {
            path: "products",
            element: <AdminProducts></AdminProducts>,
          },
          {
            path: "categories",
            element: <AdminCategories></AdminCategories>,
          },
          {
            path: "users",
            element: <AdminManageUsers></AdminManageUsers>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
