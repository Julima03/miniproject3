import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}