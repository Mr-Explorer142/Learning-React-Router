import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
    {
    path: "/about",
    element: <About></About>,
  },
    {
    path: "/contact",
    element: <Contact></Contact>,
  },
    {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
