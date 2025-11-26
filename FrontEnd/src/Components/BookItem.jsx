import { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

export default function BookItem({ book }) {
  const { addToCart, updateBook, deleteBook } = useContext(BookContext);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(book);

  return (
    <div>
      {editMode ? (
        <>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
          <input
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <button
            onClick={() => {
              updateBook(book._id, form);
              setEditMode(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p>
            {book.title} — {book.author} — ${book.price}
          </p>
          <button onClick={() => addToCart(book)}>Add to Cart</button>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </>
      )}
    </div>
  );
}
