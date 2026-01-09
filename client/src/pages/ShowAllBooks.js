import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks, borrowBook, returnBook } from "../api";

function ShowAllBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const role = localStorage.getItem("role");
    if(role !== "admin"){
      alert("Only Admin Allowed");
      navigate("/");
    }
  },[]);

  const handleBorrow = async (id) => {
    await borrowBook(id);
    getBooks().then(setBooks); // refresh list
  };

  const handleReturn = async (id) => {
    await returnBook(id);
    getBooks().then(setBooks); // refresh list
  };

  return (
    <div className="container mt-4">
      <h2>All Books</h2>
      <div className="row">
        {books.map((b) => (
          <div className="col-md-4" key={b._id}>
            <div className="card mb-3">
              <img src={b.img} className="card-img-top" alt={b.title} />
              <div className="card-body">
                <h5>{b.title}</h5>
                <p>{b.author}</p>

                {b.status === "Available" ? (
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleBorrow(b._id)}
                  >
                    Borrow
                  </button>
                ) : (
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleReturn(b._id)}
                  >
                    Return
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowAllBooks;
