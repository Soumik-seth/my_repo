import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook, deleteBook, getAllBooksAdmin } from "../api";

function AdminDashboard() {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    img: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      alert("Only admin allowed");
      navigate("/login");
      return;
    }

    getAllBooksAdmin().then(setBooks);
  }, [navigate]);

  const add = async () => {
    if (!newBook.title.trim() || !newBook.author.trim()) {
      alert("Add title and author name");
      return;
    }

    await addBook(newBook);
    const updatedBooks = await getAllBooksAdmin();
    setBooks(updatedBooks);

    setNewBook({ title: "", author: "", img: "" });
  };

  const delete1Book = async (id) => {
    const res = await deleteBook(id);
    alert(res.msg);
    setBooks(await getAllBooksAdmin());
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">⚙️ Admin Dashboard</h2>

      <div className="card p-3 mb-3">
        <h4>Add New Book</h4>

        <input
          className="form-control mb-2"
          placeholder="Title"
          value={newBook.title}
          onChange={e => setNewBook({ ...newBook, title: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Author"
          value={newBook.author}
          onChange={e => setNewBook({ ...newBook, author: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Image URL"
          value={newBook.img}
          onChange={e => setNewBook({ ...newBook, img: e.target.value })}
        />

        <button className="btn btn-success" onClick={add}>
          Add Book
        </button>
      </div>

      <h4>Books List</h4>

      <div className="row">
        {books.map(b => (
          <div className="col-md-4" key={b._id}>
            <div className="card mb-3">
              <img src={b.img} className="card-img-top" alt={b.title} />
              <div className="card-body">
                <h5>{b.title}</h5>
                <p>{b.author}</p>
                <p>Status: {b.status}</p>

                <button
                  className="btn btn-danger w-100"
                  onClick={() => delete1Book(b._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
