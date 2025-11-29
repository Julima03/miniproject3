const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, trim: true, required: true },
  author: { type: String, required: true },
   category: { type: String, required: true},
  year: { type: Number, required: false }, // year is optional
 price: { type: Number, required: true },
  deleted: { type: Boolean, default: false }, 

});
module.exports = mongoose.model("Book", BookSchema);
