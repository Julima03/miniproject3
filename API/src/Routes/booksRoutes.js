const express = require("express");
const router = express.Router();
const {
  createBook,
  getBooks,
  removeBooks,
  updateBookAction,
  getDeletedBooks,
} = require("../Controllers/bookController");

router.get("/", async (req, res) => {
  console.log("this is get book route");
   res.json(await getBooks());
});
// create Books
router.post("/", async (req, res) => {
  const body = req.body;
  const newBook = await createBook(body);
  res.json(newBook);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const isDeleted = await removeBooks(id);
  if (isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(403);
  }
});

//update book

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedBook = await updateBookAction(id, body);
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.sendStatus(403);
  }
});

router.get("/deleted", async (req, res) => {
  const deleted = await getDeletedBooks();
  res.json(deleted);
});

module.exports = router;