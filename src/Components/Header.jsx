
import "../Header.css"; // Import CSS file for styling

const Header = () => {
  return (
    <div className="header-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold text-white m-0 animate__animated animate__fadeInDown">
        Shopping Cart
      </h1>
      <p className="text-light mt-2 animate__animated animate__fadeInUp">
        All the products in one place
      </p>
    </div>
  );
};

export default Header;