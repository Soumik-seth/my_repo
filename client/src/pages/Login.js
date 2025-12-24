function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <button className="btn btn-primary w-100">
        Login
      </button>
    </div>
  );
}

export default Login;
