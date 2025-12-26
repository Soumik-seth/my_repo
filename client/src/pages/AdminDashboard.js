import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");

function AdminDashboard(){

  const [book,setBook] = useState({title:"",author:"",image:""});
  const [list,setList] = useState([]);

  function load(){
    fetch(`${API}/borrow`,{headers:{Authorization:`Bearer ${token}`}})
    .then(r=>r.json()).then(setList);
  }

  function addBook(){
    fetch(`${API}/books/add`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      },
      body:JSON.stringify(book)
    }).then(r=>r.json()).then(()=>alert("Book Added"));
  }

  useEffect(()=>{load()},[]);

  return(
    <div className="container mt-3">
      <h3>Admin Dashboard</h3>

      <h5>Add Book</h5>
      <input placeholder="Title" className="form-control mb-2" onChange={e=>setBook({...book,title:e.target.value})}/>
      <input placeholder="Author" className="form-control mb-2" onChange={e=>setBook({...book,author:e.target.value})}/>
      <input placeholder="Image URL" className="form-control mb-2" onChange={e=>setBook({...book,image:e.target.value})}/>
      <button className="btn btn-success" onClick={addBook}>Add</button>

      <hr/>
      <h5>Issued Books</h5>
      {list.map(l=>(
        <p key={l._id}>{l.user} → {l.book} ({l.status})</p>
      ))}
    </div>
  );
}
export default AdminDashboard;
