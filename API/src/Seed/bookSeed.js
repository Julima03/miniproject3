const { addBook, getAllBooksFromService } = require("../Services/bookService");
const mongoose = require("mongoose");
const Book = require("../Models/booksModel");


// Lista de livros
let seedbooks = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", year: 1937, price: 19.99 },
  { id: 2, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", category: "Fantasy", year: 1997, price: 24.99 },
  { id: 3, title: "Atomic Habits", author: "James Clear", category: "Self-Help", year: 2018, price: 17.5 },
  { id: 4, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Self-Help", year: 2016, price: 18.0 },
  { id: 5, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Technology", year: 1999, price: 39.9 },
  { id: 6, title: "Clean Code", author: "Robert C. Martin", category: "Technology", year: 2008, price: 42.0 },
  { id: 7, title: "It Ends With Us", author: "Colleen Hoover", category: "Romance", year: 2016, price: 14.99 },
  { id: 8, title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", year: 1813, price: 9.99 },
  { id: 9, title: "The Girl on the Train", author: "Paula Hawkins", category: "Thriller", year: 2015, price: 14.5 },
  { id: 10, title: "Gone Girl", author: "Gillian Flynn", category: "Thriller", year: 2012, price: 15.2 },
  { id: 11, title: "Sapiens", author: "Yuval Noah Harari", category: "History", year: 2011, price: 22.99 },
  { id: 12, title: "Educated", author: "Tara Westover", category: "Biography", year: 2018, price: 16.8 },
  { id: 13, title: "Harry Potter", author: "J.K. Rowling", category: "Fantasy", year: 1997, price: 31.99 },
  { id: 14, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", year: 1925, price: 19.99 },
  { id: 15, title: "The Very Hungry Caterpillar", author: "Eric Carle", category: "Kids", year: 1969, price: 12.5 },
];


const seedBooks = async () => { 
    const books = await getAllBooksFromService();
  
    if  ( books.length == 0 ){
  await Promise.all(seedbooks.map(book => Book.create(book))); // promisse all return  a single promisses from a list of promisses.
  console.log("📚 Books seeds loaded!"); 
}
};


module.exports = seedBooks;

