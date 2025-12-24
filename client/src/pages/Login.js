import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card shadow p-4" style={{ width: "380px" }}>
        
        <h3 className="text-center mb-3">Login</h3>
        <p className="text-center text-muted mb-4">
          Welcome back! Please login to continue.
        </p>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        <button className="btn btn-primary w-100 mb-3">
          Login
        </button>

        <p className="text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary fw-bold">
            Click here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
