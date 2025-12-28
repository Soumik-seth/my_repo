import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowAllBooks(){

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(()=>{
      if(!localStorage.getItem("token")){
        alert("Login first");
        navigate("/login");
      }
      if(role === "admin"){
        navigate("/admin");
      }
  },[]);

  const [search,setSearch] = useState("");

  const [books,setBooks] = useState([
    {id:1,title:"Harry Potter",author:"J.K Rowling",img:"https://picsum.photos/200?1", borrowed:false},
    {id:2,title:"Rich Dad Poor Dad",author:"Robert Kiyosaki",img:"https://picsum.photos/200?2", borrowed:false},
    {id:3,title:"Atomic Habits",author:"James Clear",img:"https://picsum.photos/200?3", borrowed:false}
  ]);

  function borrowBook(id){
    setBooks(
      books.map(b => 
        b.id === id ? {...b, borrowed:true} : b
      )
    );
    alert("Book Borrowed!");
  }

  function returnBook(id){
    setBooks(
      books.map(b => 
        b.id === id ? {...b, borrowed:false} : b
      )
    );
    alert("Book Returned!");
  }

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <div className="container mt-4">
      <h2 className="text-center">📚 All Books</h2>

      <input 
        className="form-control mb-3"
        placeholder="Search Book"
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />

      <div className="row">
        {filtered.map(book=>(
          <div className="col-md-4" key={book.id}>
            <div className="card mb-3">
              <img src={book.img} className="card-img-top"/>
              <div className="card-body">
                <h5>{book.title}</h5>
                <p>{book.author}</p>

                {!book.borrowed ? (
                  <button className="btn btn-primary w-100" onClick={()=>borrowBook(book.id)}>
                    Borrow
                  </button>
                ):(
                  <button className="btn btn-warning w-100" onClick={()=>returnBook(book.id)}>
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
