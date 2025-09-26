import React from "react";
import { useRouteError } from "react-router";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      {error && (
        <div className="text-center fs-1 fw-bold text-danger p-5">
          <div>🥲 {error.data}</div>
          <div>Status Code : {error.status} 🙅</div>
          <div>Status Text 📝 : {error.statusText}!</div>
        </div>
      )}
    </>
  );
};

export default NotFound;
