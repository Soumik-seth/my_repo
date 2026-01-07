import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

function Register(){

 const navigate = useNavigate();

 const [data,setData] = useState({
   name:"",
   email:"",
   password:""
 });

 function handel(e){
   setData({...data,[e.target.name]:e.target.value});
 }

 async function submit(){

   const res = await registerUser(data);

   alert(res.msg);

   if(res.token){
     localStorage.setItem("token",res.token);
     localStorage.setItem("role",res.role);

     if(res.role==="admin"){
        navigate("/admin");
     }else{
        navigate("/books");
     }
   }
 }

 return(
  <div className="container mt-5" style={{maxWidth:"400px"}}>

   <h3>Create Account</h3>

   <input name="name" className="form-control mb-2"
     placeholder="Name" onChange={handel}/>

   <input name="email"
     className="form-control mb-2"
     placeholder="Email" onChange={handel}/>

   <input type="password"
     name="password"
     className="form-control mb-2"
     placeholder="Password" onChange={handel}/>

   <button className="btn btn-success w-100" onClick={submit}>
     Register
   </button>

   <p className="text-center mt-2">
     Already have account? <Link to="/login">Login</Link>
   </p>

  </div>
 );
}
export default Register;
