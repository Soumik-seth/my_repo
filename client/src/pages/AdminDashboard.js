import { useEffect,useState } from "react";
import { useNavigate, useNavigate } from "react-router-dom";
function AdminDashboard(){
  const navigate = useNavigate();
  //if it is not admin, redirect to home
  useEffect(()=>{
    const role = localStorage.getItem("role");
    if(role !== "admin"){
      //("/" is home route)
      navigate("/");
    }
  },[])
  // ALL laibarary books
  const [books, setBooks] = useState([
    {id:1,title:"Harry Potter",author:"J.K Rowling",img:"https://picsum.photos/200?1", borrowedBy:"Soumik", status:"Borrowed"},
    {id:2,title:"Rich Dad Poor Dad",author:"Robert Kiyosaki",img:"https://picsum.photos/200?2", borrowedBy:"", status:"Available"}
  ]);
  // Add new book form state
  const [newBook, setNewBook] =useState({
    title:"",
    author: "",
    img:""
  });
  // Add Book function
  const addBook=()=>{
    setBooks([...books,{id:books.length+1,...newBook,status:"Available", borrowedBy:""}]);
    //clearform
    setNewBook({title:"",author:"",img:""});
    alert("Book added successfully!");
  }
   return(
   <div className="container mt-4">
    <h2 className="text-center mb-3">⚙️ Admin Dashboard</h2>
    {/* Add New Book Form */}
    <div className="card p-3 mb-3">
      <h4>Add New Book</h4>
       <input className="form-control mb-2" placeholder="Title" 
          value={newBook.title} onChange={e=>setNewBook({...newBook,title:e.target.value})}/>

       <input className="form-control mb-2" placeholder="Author" 
          value={newBook.author} onChange={e=>setNewBook({...newBook,author:e.target.value})}/>

       <input className="form-control mb-2" placeholder="Image URL" 
          value={newBook.img} onChange={e=>setNewBook({...newBook,img:e.target.value})}/>
       <button className="btn btn-success"
       onClick={addBook}>Add Book</button>
    </div>

   </div>
  );
}