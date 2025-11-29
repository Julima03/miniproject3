export default function CartItem({ item }) {
  return (
    <div>
      <p>{item.title} — ${item.price}</p>
    </div>
  );
}