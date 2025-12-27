import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  function handel(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function submit() {
    const res = registerUser(data);
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
      <div className="container mt-5" style={{ maxWidth: "400px" }}>
        <h3>Register</h3>
        <input name="name"
          placeholder="Enter your name"
          className="form-control mb-2"
          onChange={handel} />
        <input name="email"
          placeholder="Enter your email"
          className="form-control mb-2"
          onChange={handel} />
        <input type="password"
          name="password"
          placeholder="Enter your password"
          className="form-control mb-2"
          onChange={handel} />
        <button className="btn btn-success w-100" onClick={submit}>Register</button>
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }

export default Register;