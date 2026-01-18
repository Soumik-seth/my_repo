const router = require("express").Router();
const Book = require("../models/Book");
const auth = require("../middleware/auth");

// ✅ Get all books (USER)
router.get("/", auth, async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// ✅ Borrow book
router.post("/borrow/:id", auth, async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, {
    status: "Borrowed",
    borrowedBy: req.user.id
  });

  res.json({ msg: "Book borrowed successfully" });
});

// ✅ Return book
router.post("/return/:id", auth, async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, {
    status: "Available",
    borrowedBy: null
  });

  res.json({ msg: "Book returned successfully" });
});

module.exports = router;
