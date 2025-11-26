const BookService = require("../Services/BookService");

exports.getBooks = async (req, res) => {
  const books = await BookService.getBooks();
  res.json(books);
};

exports.addBook = async (req, res) => {
  const newBook = await BookService.addBook(req.body);
  res.status(201).json(newBook);
};

exports.updateBook = async (req, res) => {
  const updated = await BookService.updateBook(req.params.id, req.body);
  res.json(updated);
};

exports.deleteBook = async (req, res) => {
  await BookService.deleteBook(req.params.id);
  res.json({ message: "Book deleted" });
};
