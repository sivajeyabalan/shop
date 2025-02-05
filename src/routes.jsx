import App from './App';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Carts';
const routes = [
  {
    path: '/', 
    element : <App />,
    exact: true,

  },
  {
    path: '/product/:id',
    element: <ProductDetails />
  },
  {
    path: '/cart',
    element: <Cart />

  }
]

export default routes;