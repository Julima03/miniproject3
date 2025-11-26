import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  // Load books from API
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const addToCart = (book) => setCart([...cart, book]);

  const updateBook = async (id, updatedData) => {
    const res = await fetch(`http://localhost:5000/api/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const updated = await res.json();
    setBooks(books.map((b) => (b._id === id ? updated : b)));
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/api/books/${id}`, { method: "DELETE" });
    setBooks(books.filter((b) => b._id !== id));
  };

  return (
    <BookContext.Provider
      value={{ books, cart, addToCart, updateBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
}
