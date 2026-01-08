import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

function Register(){
  const [data,setData] = useState({name:"",email:"",password:""});
  const navigate = useNavigate();

  const submit = async () => {
    const res = await registerUser(data);
    if(res.msg){
      alert(res.msg);
      navigate("/login");
    }
  };

  return (
    <div className="container mt-5" style={{maxWidth:"400px"}}>
      <h3>Register</h3>
      <input className="form-control mb-2" placeholder="Name"
        onChange={e=>setData({...data,name:e.target.value})}/>
      <input className="form-control mb-2" placeholder="Email"
        onChange={e=>setData({...data,email:e.target.value})}/>
      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={e=>setData({...data,password:e.target.value})}/>
      <button className="btn btn-success w-100" onClick={submit}>Register</button>
      <p className="mt-2 text-center">
        Have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
export default Register;
