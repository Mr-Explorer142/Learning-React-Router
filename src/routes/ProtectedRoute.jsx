import React from "react";
import { Outlet } from "react-router";
import SignIn from "../pages/SignIn";

const ProtectedRoute = () => {
  const isSignedIn = true;

  return isSignedIn ? <Outlet></Outlet> : <SignIn></SignIn>;
};

export default ProtectedRoute;
