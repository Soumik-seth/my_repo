const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  img: String,
  status: {
    type: String,
    enum: ["Available", "Borrowed"],
    default: "Available"
  },
  borrowedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  }
});

module.exports = mongoose.model("Book", bookSchema);
