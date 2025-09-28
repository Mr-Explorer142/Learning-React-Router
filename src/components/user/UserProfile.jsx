import React from "react";
import { useLocation } from "react-router";

const UserProfile = () => {
  const { state } = useLocation();

  return (
    <>
      {state ? (
        <div className="container d-flex justify-content-center mt-5">
          <div className="card w-25 shadow-sm border border-success">
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">
                User Information
              </h5>
              <div className="card-text mt-3">
                <p>
                  <span className="fw-bold">Name : </span> {state.name}
                </p>
                <p>
                  <span className="fw-bold">Email : </span> {state.email}
                </p>
                <p>
                  <span className="fw-bold">City : </span> {state.city}
                </p>
                <p>
                  <span className="fw-bold">Country : </span> {state.country}
                </p>
              </div>
              <a href="#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <p className="fw-bold fs-1 text-center shadow-sm text-danger border border-5 border-danger p-5 rounded-4">
            No Profile 🙅 exists!
          </p>
        </div>
      )}
    </>
  );
};

export default UserProfile;
