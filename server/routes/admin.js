const router = require("express").Router();
const Book = require("../models/Book");
const auth = require("../middleware/auth");

// ✅ Admin role check
function isAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Admin only" });
  }
  next();
}

// ✅ Add book
router.post("/add", auth, isAdmin, async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

// ✅ Delete book
router.delete("/:id", auth, isAdmin, async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "Book deleted" });
});

// ✅ Admin get all books
router.get("/all", auth, isAdmin, async (req, res) => {
  const books = await Book.find().populate("borrowedBy", "name email");
  res.json(books);
});

module.exports = router;
