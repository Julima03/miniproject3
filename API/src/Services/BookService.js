const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = {
  getBooks: async () => await Book.find(),
  addBook: async (data) => await Book.create(data),
  updateBook: async (id, data) =>
    await Book.findByIdAndUpdate(id, data, { new: true }),
  deleteBook: async (id) => await Book.findByIdAndDelete(id),
};
