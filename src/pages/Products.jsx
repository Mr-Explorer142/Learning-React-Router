import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be fetched!😢");
        }
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-5">
        <h1 className="text-center my-5 text-success">All Products</h1>
        {isLoading && <h2>Data is loading...</h2>}
        {error && <p>error</p>}
        {!isLoading && !error && (
          <section className="row">
            {products &&
              products.length > 0 &&
              products.map((product) => {
                const { id, title, category, price, description, images } =
                  product;
                return (
                  <div key={id} className="col-md-3 p-3">
                    <div className="card h-100 shadow-sm">
                      <img
                        src={images[0]}
                        className="card-img-top img-fluid"
                        alt={title}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                          <strong>Category : </strong> {category}
                        </p>
                        <p className="card-text text-success fw-bold">
                          {price} $
                        </p>
                        <p className="card-text">
                          {description && description.substring(0, 100)}...
                        </p>

                        <div className="mt-auto">
                          <Link
                            to={`/products/${id}`}
                            state={product}
                            className="btn btn-success"
                          >
                            Show Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </section>
        )}
      </div>
    </>
  );
};

export default Products;
