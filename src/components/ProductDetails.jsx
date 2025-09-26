import React from "react";
import { useLocation, Link } from "react-router";

const ProductDetails = () => {
  const { state } = useLocation();

  return (
    <>
      <h2 className="text-center my-4 text-success">Product Details</h2>
      {state ? (
        <div className="container d-flex justify-content-center">
          <div
            className="card shadow-sm border rounded-3"
            style={{ width: "24rem" }}
          >
            {/* Product Image */}
            <img
              src={state.images[0]}
              className="card-img-top img-fluid"
              alt={state.title}
            />

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title">{state.title}</h5>
              <p className="card-text">
                <strong>Category : </strong> {state.category}
              </p>
              <p className="card-text">
                <strong>Price : </strong>{" "}
                <span className="text-success fw-bold">{state.price} $</span>
              </p>
              <p className="card-text">
                <strong>Description : </strong> {state.description}
              </p>
              <Link
                to="/products"
                className="btn btn-success"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-danger">No Product Found</p>
      )}
    </>
  );
};

export default ProductDetails;
