import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/ProductDetails.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productDetail = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    productDetail();
  }, [id]);

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <h1 className="product-title">Product Details</h1>
        <h2 className="product-name">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-info">
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating?.rate}</p>
        </div>
        <img src={product.image} alt={product.title} className="product-image" />
        <button className="btn-add-to-cart"  ><Link to="../cart">Add to Cart</Link></button>
      </div>
    </div>
  );
}

export default ProductDetails;


