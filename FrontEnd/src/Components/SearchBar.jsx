export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "8px", width: "300px", marginRight: "10px" }}
    />
  );
}
