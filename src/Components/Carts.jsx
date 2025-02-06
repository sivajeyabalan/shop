import { useContext } from "react";
import CartContext from "../CartContent";
import "../styles/Carts.css"
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart, totalprice, totalItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          
        </div>
      )}

      <div className="cart-summary">
        <h2>Total Items: {totalItems}</h2>
        <h2>Total Price: ${totalprice.toFixed(2)}</h2>
      </div>
      <button > <Link to="/" className="back-btn">Go to Home</Link>
      </button>
    </div>
  );
};

export default Cart;
