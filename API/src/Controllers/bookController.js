const {
getAllBooksFromService,
addBook,
updateBook,
deleteBook,
getBookById,

} = require("../Services/bookService");

const Book = require("../Models/booksModel")


// Get All Book
const getBooks = async () => {
    return await getAllBooksFromService();
};

//Create Book
const createBook = async (BookData) => {
    const newBook = await addBook(BookData);
    return newBook;
};

// Update Book

const updateBookAction = async (id, body) => {
    const targetBook = await getBookById(id);
    if (targetBook) {
        const updatedBook = await updateBook(id,body);
        return updatedBook;
    } else {
        return undefined
    }
    };

    // Delete Book

    const removeBooks = async (id) => {
        const targetBook = await getBookById(id);
        if (targetBook) {
        await deleteBook(id);
        return true;
    } else {
        return false;
    }
};

const getDeletedBooks = async () => {
  return await Book.find({ deleted: true });
};

    module.exports = {
        getBooks,
        createBook,
        updateBookAction,
        removeBooks,
        getDeletedBooks,

    };

    



