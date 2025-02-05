
import { useContext , createContext , useState } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => {
    useContext(CartContext);
}
export const CartProvider = ({ Children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart];
    const item = newCart.find((item) => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
  };
  
  

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };
  
  const totalprice = cart.reduce((acc, item) => acc + item.price, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalprice, totalItems }}>
      {Children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  Children: PropTypes.node.isRequired,
};
