import CartItem from "./CartItem";

export default function CartList() {
  return (
    <div>
      <h2>Your Cart (static for now)</h2>
      <CartItem item={{ title: "Example Item" }} />
    </div>
  );
}
