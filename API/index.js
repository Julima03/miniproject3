const express = require("express");
const app = express();
app.use(express.json());

let dbConnect = require("./dbConnect");

const booksRoutes = require("./src/Routes/booksRoutes"); 
const bookSeed = require("./src/Seed/bookSeed");
bookSeed();

const port = 5050;

app.use("/", express.static("./public"));
app.use("/api/books", booksRoutes);  

app.listen(port, () => {
  console.log("server is up");
});