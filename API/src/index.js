import express from "express";
import cors from "cors";
import dbConnect from "./dbConnect.js";
import bookRoutes from "./Routes/BookRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/books", bookRoutes);

app.listen(5000, () => console.log("Server on port 5000"));
