
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap styles
import 'animate.css';  // Import Animate.css for animations
import Header from './Components/Header';
import ProductList from './Components/ProductList';
const App = () => {
  return (
    <div className="container mt-5">
      <Header />
      <ProductList />
    </div>
  );
}




export default App;


