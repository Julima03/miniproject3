import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookProvider } from "./Context/BookContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookProvider>
    <App />
  </BookProvider>
);
