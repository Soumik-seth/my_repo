import { useState } from "react";
import { login } from "../api";
import { useNavigate, Link } from "react-router-dom";

function Login(){

 const navigate = useNavigate();
 const [data,setData] = useState({email:"",password:""});

 function handel(e){
   setData({...data,[e.target.name]:e.target.value});
 }

 async function submit(){

   const res = await login(data);

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

   <h3>Login</h3>

   <input name="email" className="form-control mb-2"
     placeholder="Email" onChange={handel}/>

   <input type="password" name="password"
     className="form-control mb-2"
     placeholder="Password" onChange={handel}/>

   <button className="btn btn-primary w-100" onClick={submit}>
     Login
   </button>

   <p className="text-center mt-2">
     Don’t have account? <Link to="/register">Register here</Link>
   </p>

  </div>
 );
}
export default Login;
