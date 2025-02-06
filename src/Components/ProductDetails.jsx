import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import CartContext from "../CartContent"; // Import Cart Context
import "../styles/ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Access addToCart function
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productDetail = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    productDetail();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    navigate("/cart"); // Navigate to Cart page
  };

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
        <button className="btn-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        
      </div>
    </div>
  );
};

export default ProductDetails;
