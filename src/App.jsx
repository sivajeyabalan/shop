import {useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap styles
import 'animate.css';  // Import Animate.css for animations


const App = () => {
  return (
    <div className="container mt-5">
      <Header />
      <ProductList />
    </div>
  );
}

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json();
        setTimeout(() => { // Simulate a delay for better animation visibility
          setData(products.slice(0, 10));
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      {loading ? (
        // Animated Loading Screen
        <div className="text-center w-100">
          <div className="spinner-border text-primary animate__animated animate__fadeIn" role="status" style={{ width: "4rem", height: "4rem" }}></div>
          <p className="mt-3 animate__animated animate__fadeIn animate__delay-1s">Loading products...</p>
        </div>
      ) : (
        data.map((product) => <Product key={product.id} product={product} />)
      )}
    </div>
  );
};




import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "250px", objectFit: "contain" }} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
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


const Header = () => {
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center"  >
        <span className="fs-2 fw-bold animate__animated animate__slideInLeft">Shopping</span>
        <span className="fs-2 fw-bold animate__animated animate__slideInRight ms-2">Cart</span>
      </div>
      <p className="fs-4 mt-3 animate__animated animate__fadeInUp" >All the products in one place</p>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;


