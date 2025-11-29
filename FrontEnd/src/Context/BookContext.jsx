import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load books from API
 const loadBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    } catch (e) {
      console.error("Failed to load books", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const addBook = async (book) => {
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    const created = await res.json();
    setBooks((s) => [...s, created]);
    return created;
  };

  const updateBook = async (id, updatedFields) => {
    const res = await fetch(`/api/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    });
    const updated = await res.json();
    setBooks((s) => s.map((b) => (b._id === id || b.id === id ? updated : b)));
    return updated;
  };

  const deleteBook = async (id) => {
    await fetch(`/api/books/${id}`, { method: "DELETE" });
    setBooks((s) => s.filter((b) => b._id !== id && b.id !== id));
  };

  const addToCart = (book) => {
    setCart((c) => [...c, book]);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        cart,
        loading,
        loadBooks,
        addBook,
        updateBook,
        deleteBook,
        addToCart,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}