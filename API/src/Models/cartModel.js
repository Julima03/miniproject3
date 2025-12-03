const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  items: [
    {
      bookId: mongoose.Schema.Types.ObjectId,
      title: String,
      price: Number,
      quantity: { type: Number, default: 1 }
    }
  ],
});

module.exports = mongoose.model("Cart", CartSchema);