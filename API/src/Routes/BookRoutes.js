const express = require("express");
const router = express.Router();
const BookController = require("../Controllers/BookController");

router.get("/", BookController.getBooks);
router.post("/", BookController.addBook);
router.put("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

module.exports = router;
