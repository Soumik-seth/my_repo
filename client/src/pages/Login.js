import { useState } from "react";
import { login } from "../api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  //set the data 
  function handel(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  //for summit the data
  async function submit() {
    const res = await login(data);
    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      if (res.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    }}

    return (
      <div className="container mt-5"
        style={{ maxWidth: "400px" }}>
        <h3>Login</h3>
        {/*input for email*/}
        <input name="email"
          placeholder="Enter your Email" className="form-control mb-2"
          onChange={handel} />
        {/*input for password*/}
        <input type="password" name="password"
          placeholder="Enter your Password" className="form-control mb-2"
          onChange={handel} />
      {/*button to submit*/}
        <button className="btn btn-primary w-100"
          onClick={submit}>Submit</button>

        <p className="text-center mt-2">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    );
  }

export default Login;
