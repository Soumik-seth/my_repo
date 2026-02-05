import { useState } from "react";
import { login } from "../api";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [data,setData] = useState({email:"",password:""});
  const navigate = useNavigate();

  const submit = async () => {
    const res = await login(data);
    if(res.token){
      localStorage.setItem("token",res.token);
      localStorage.setItem("role",res.role);
      navigate(res.role === "admin" ? "/admin" : "/books");
    } else {
      alert(res.msg);
    }
  };

  return (
    <div className="container mt-5" style={{maxWidth:"400px"}}>
      <h3>Login</h3>
      <input className="form-control mb-2" placeholder="Email"
        onChange={e=>setData({...data,email:e.target.value})}/>
      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={e=>setData({...data,password:e.target.value})}/>
      <button className="btn btn-primary w-100" onClick={submit}>Login</button>
      <p className="mt-2 text-center">
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
export default Login;
