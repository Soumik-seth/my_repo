import { useEffect,useState } from "react";
import { getBooks, borrowBookAPI, returnBookAPI } from "../api";
import { useNavigate } from "react-router-dom";

function ShowAllBooks(){

 const navigate = useNavigate();
 const token = localStorage.getItem("token");
 const role = localStorage.getItem("role");

 const [search,setSearch]=useState("");
 const [books,setBooks]=useState([]);

 useEffect(()=>{
   if(!token){
     alert("Login First");
     navigate("/login");
     return;
   }
   if(role==="admin"){
     navigate("/admin");
     return;
   }

   getBooks(token).then(setBooks);
 },[]);

 const filtered = books.filter(b =>
   b.title.toLowerCase().includes(search.toLowerCase()) ||
   b.author.toLowerCase().includes(search.toLowerCase())
 );

 async function borrow(id){
   const res = await borrowBookAPI(id,token);
   alert(res.msg);
 }

 async function returnB(id){
   const res = await returnBookAPI(id,token);
   alert(res.msg);
 }

 return(
  <div className="container mt-3">

   <h2>Books</h2>

   <input className="form-control mb-2"
     value={search}
     onChange={e=>setSearch(e.target.value)}
   />

   <div className="row">

    {filtered.map(b=>(
      <div className="col-md-4" key={b.id}>

       <div className="card mb-2">
         <img src={b.img} className="card-img-top"/>

         <div className="card-body">

           <h5>{b.title}</h5>
           <p>{b.author}</p>

           {b.borrowed ? (
             <button className="btn btn-warning w-100"
               onClick={()=>returnB(b.id)}>Return</button>
           ):(
             <button className="btn btn-primary w-100"
               onClick={()=>borrow(b.id)}>Borrow</button>
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
