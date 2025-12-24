import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card shadow p-4" style={{ width: "400px" }}>
        
        <h3 className="text-center mb-3">Create Account</h3>
        <p className="text-center text-muted mb-4">
          Join our Library Management System
        </p>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Create password" />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm password" />
        </div>

        <button className="btn btn-success w-100 mb-3">
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary fw-bold">
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
