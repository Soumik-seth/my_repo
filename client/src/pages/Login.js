import { useState } from "react";
import { login, registerUser } from "../api";

function Login(){

  const [isRegister,setIsRegister]=useState(false);
  const [form,setForm]=useState({name:"",email:"",password:""});

  function handle(e){ setForm({...form,[e.target.name]:e.target.value}); }

  async function submit(){
    const res = isRegister ? await registerUser(form) : await login(form);
    if(res.token){
      localStorage.setItem("token",res.token);
      localStorage.setItem("role",res.role);
      window.location.href = "/";
    }
    alert(res.msg || "Success");
  }

  return(
    <div className="container mt-5" style={{maxWidth:"400px"}}>
      <h3>{isRegister ? "Register" : "Login"}</h3>

      {isRegister && (
        <input name="name" className="form-control mb-2" placeholder="Name" onChange={handle}/>
      )}

      <input name="email" className="form-control mb-2" placeholder="Email" onChange={handle}/>
      <input name="password" className="form-control mb-2" placeholder="Password" type="password" onChange={handle}/>

      <button className="btn btn-primary w-100" onClick={submit}>
        {isRegister ? "Register" : "Login"}
      </button>

      <p className="text-center mt-2" onClick={()=>setIsRegister(!isRegister)}>
        {isRegister ? "Already have account? Login" : "Don't have account? Register"}
      </p>
    </div>
  );
}
export default Login;
