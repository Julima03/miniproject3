const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const BookRoutes = require("./Routes/BookRoutes");

const app = express();
app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/books", BookRoutes);

app.listen(5000, () => console.log("API running on port 5000"));
