import logo from "./logo.svg";
import buscar from "./buscar.png";
import "./navbar.css";
import Cart from "../Cart/CartWidget.js"

function Navbar() {
  return (
    <header>
      <a href="#" className="logo">
        <img src={logo} alt="logo" />
        <h2>React Store</h2>
      </a>
      <div className="lista">
        <ul>
          <li>
            <a className="home" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="products" href="#">
              Products
            </a>
          </li>
          <li>
            <a className="about" href="#">
              About Us
            </a>
          </li>
          <li>
            <div className="busqueda">
              <input type="search" placeholder="search..."></input>
              <img src={buscar} className="imgBuscar" />
            </div>
          </li>
          <li>
            <Cart/>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
