import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
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
      {/* const {title, description, catagory, price} = products; */}

      <div className="p-2">
        <h1>All Products</h1>
        {setLoading && <h2>Data is loading...</h2>}
        <section>
          {products &&
            products.length > 0 &&
            products.map((product) => {
              const { id, title, category, price, description } = product;
              return (
                <div key={id}>
                  <h3>Title : {title}</h3>
                  <p>Category : {category}</p>
                  <p>Price : {price} $</p>
                  <p>
                    Description : {description && description.substring(0, 100)}
                    ...
                  </p>
                  <button>Show Details</button>
                </div>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default Products;
