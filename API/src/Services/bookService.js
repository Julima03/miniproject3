const Book = require("../Models/booksModel");

//Create 
const addBook = async (BookData) => {
  const savedBook = await Book.create(BookData);
  console.log(savedBook);
  return savedBook;
};


// Read ALL books
const getAllBooksFromService = async () => {
  const books = await Book.find({ deleted: false });
  return books;
};

// Read by ID
const getBookById = async (id) => {
  const book = await Book.findById(id);
  return book;
};


const deleteBook = async (id) => {
 return await Book.findByIdAndUpdate(id, { deleted: true }, { new: true });
};


const updateBook = async (id, body) => {
  return await Book.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
  addBook,
  getAllBooksFromService,
  deleteBook,
  updateBook,
  getBookById,
};