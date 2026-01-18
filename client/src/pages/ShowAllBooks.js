import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../api";

function ShowAllBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "user") {
      navigate("/login");
      return;
    }

    getBooks().then(setBooks);
  }, [navigate]);


  return (
    <div className="container mt-4">
      
      <h4>Books List</h4>

      <div className="row">
        {books.map(b => (
          <div className="col-md-4" key={b._id}>
            <div className="card mb-3">
              <img src={b.img} className="card-img-top" alt={b.title} />
              <div className="card-body">
                <h5>{b.title}</h5>
                <p>{b.author}</p>
             

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default ShowAllBooks;
