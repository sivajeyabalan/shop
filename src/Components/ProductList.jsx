import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json();
        setTimeout(() => {
          setData(products.slice(0, 12)); // Fetch only 10 products
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary animate__animated animate__fadeIn" role="status" style={{ width: "4rem", height: "4rem" }}></div>
          <p className="mt-3 animate__animated animate__fadeIn animate__delay-1s">Loading products...</p>
        </div>
      ) : (
        <div className="row">
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};




import PropTypes from "prop-types";

const Product = ({ product }) => {
  
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">${product.price.toFixed(2)}</p>
          <button className="btn btn-primary mt-auto" style={{backgroundColor : "green"}} ><Link to={`/product/${product.id}`}>Add to Cart</Link></button>
        
        </div>
      </div>
    </div>
  );
};




Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductList;