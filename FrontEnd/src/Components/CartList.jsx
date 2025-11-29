import CartItem from "./CartItem";
import { useContext } from "react";
import { BookContext } from "../Context/BookContext";

export default function CartList() {
  const { cart } = useContext(BookContext);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
}