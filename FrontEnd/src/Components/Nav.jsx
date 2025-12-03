import { NavLink } from "react-router-dom";
import logo from "../assets/BookStoreLogo.png"

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Bookstore Logo" className="logo" />
      </div>



     <ul className="nav-links">
       <li> <NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/books">Books</NavLink></li>
      <li><NavLink to="/cart">Cart</NavLink></li>
              
      </ul>
    </nav>
  );
}