import { useEffect, useState } from "react";
import { getBooks, borrowBook, returnBook } from "../api";
import { useNavigate } from "react-router-dom";
function ShowAllBooks(){
  const [books,setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
   const token =localStorage.getItem('token');
    if(!token){
      navigate('/login');
      return;
    }else{
      getBooks().then(setBooks);
    }
  },[navigate]);

  return (
    <div className="container mt-4">
      <h2>All Books</h2>
      <div className="row">
        {books.map(b=>(
          <div className="col-md-4" key={b._id}>
            <div className="card mb-3">
              <img src={b.img} className="card-img-top"/>
              <div className="card-body">
                <h5>{b.title}</h5>
                <p>{b.author}</p>
                {b.status==="Available" ? (
                  <button className="btn btn-primary w-100"
                    onClick={()=>borrowBook(b._id)}>Borrow</button>
                ):(
                  <button className="btn btn-warning w-100"
                    onClick={()=>returnBook(b._id)}>Return</button>
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
