import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartList from "../Components/CartList";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <CartList items={cart.items} />
    </div>
  );
}