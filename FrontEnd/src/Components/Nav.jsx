import { Link } from "react-router-dom";
import logo from "../assets/BookStoreLogo.png"

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Bookstore Logo" className="logo" />
      </div>

     <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/books">Books</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  );
}