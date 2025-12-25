import { useState } from "react";

function BooksPage() {
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "Harry Potter", author: "J.K Rowling", img: "https://picsum.photos/200?1" },
    { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", img: "https://picsum.photos/200?2" },
    { id: 3, title: "Atomic Habits", author: "James Clear", img: "https://picsum.photos/200?3" }
  ];

  const filteredBooks = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-3">📚 All Books</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredBooks.map(book => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card shadow-sm">
              <img src={book.img} className="card-img-top" alt="Book" />
              <div className="card-body">
                <h5>{book.title}</h5>
                <p className="text-muted">{book.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <h4 className="text-center text-danger mt-3">No Books Found</h4>
      )}
    </div>
  );
}

export default BooksPage;
