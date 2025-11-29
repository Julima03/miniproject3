export default function CategoryFilter({ value, onChange, categories }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "8px" }}
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}