import { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookItem from "./BookItem";

export default function BookList() {
  const { books } = useContext(BookContext);
  return (
    <div>
      {books.map((b) => (
        <BookItem key={b._id} book={b} />
      ))}
    </div>
  );
}
