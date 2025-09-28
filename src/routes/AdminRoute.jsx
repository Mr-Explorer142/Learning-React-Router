import React from "react";
import { Outlet } from "react-router";
import SignIn from "../pages/SignIn";

const AdminRoute = () => {
  const isSignedIn = true;
  const isAdmin = true;
  return isSignedIn && isAdmin ? <Outlet></Outlet> : <SignIn></SignIn>;
};

export default AdminRoute;
