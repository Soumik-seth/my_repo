import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard(){

  const navigate = useNavigate();

  useEffect(()=>{
    const role = localStorage.getItem("role");
    if(role !== "admin"){
      alert("Only Admin Allowed");
      navigate("/");
    }
  },[]);

  const [books,setBooks] = useState([]);

  const [newBook,setNewBook] = useState({
    title:"",
    author:"",
    img:""
  });

  const addBook = ()=>{
    if(!newBook.title || !newBook.author || !newBook.img){
      alert("Please fill all fields");
      return;
    }

    setBooks([...books,{id:Date.now(),...newBook,status:"Available",borrowedBy:""}]);
    setNewBook({title:"",author:"",img:""});
    alert("Book added successfully!");
  };

  const deleteBook = (id)=>{
    setBooks(books.filter(b=>b.id !== id));
  };

  const approveReturn = (id)=>{
    setBooks(
      books.map(b =>
        b.id === id
        ? {...b,status:"Available",borrowedBy:""}
        : b
      )
    );
  };

  return(
    <div className="container mt-4">
      <h2 className="text-center mb-3">⚙️ Admin Dashboard</h2>

      {/* Add Book */}
      <div className="card p-3 mb-3">
        <h4>Add New Book</h4>

        <input
          className="form-control mb-2"
          placeholder="Title"
          value={newBook.title}
          onChange={e=>setNewBook({...newBook,title:e.target.value})}
        />

        <input
          className="form-control mb-2"
          placeholder="Author"
          value={newBook.author}
          onChange={e=>setNewBook({...newBook,author:e.target.value})}
        />

        <input
          className="form-control mb-2"
          placeholder="Image URL"
          value={newBook.img}
          onChange={e=>setNewBook({...newBook,img:e.target.value})}
        />

        <button className="btn btn-success" onClick={addBook}>
          Add Book
        </button>
      </div>

      {/* Books List */}
      <h4>Books List</h4>

      <div className="row">
        {books.map(b=>(
          <div className="col-md-4" key={b.id}>
            <div className="card mb-3">
              <img src={b.img} className="card-img-top"/>
              <div className="card-body">
                <h5>{b.title}</h5>
                <p>{b.author}</p>
                <p>Status: {b.status}</p>
                {b.borrowedBy && <p>Borrowed By: {b.borrowedBy}</p>}

                <button className="btn btn-danger w-100 mb-2" onClick={()=>deleteBook(b.id)}>
                  Delete
                </button>

                {b.status==="Borrowed" && (
                  <button className="btn btn-warning w-100" onClick={()=>approveReturn(b.id)}>
                    Approve Return
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

export default AdminDashboard;
