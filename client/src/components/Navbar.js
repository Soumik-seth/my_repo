import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/library_log.png";

function Navbar() {
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);


  /// when local stroage update it will tigger 
  useEffect(() => {
  const syncAuth = () => {
    setRole(localStorage.getItem("role"));
    setIsLoggedIn(!!localStorage.getItem("token"));
  };

  window.addEventListener("storage", syncAuth);

  return () => window.removeEventListener("storage", syncAuth);
}, []);


  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setRole(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
         <img
    src={logo}
    alt="S Library Logo"
    style={{ height: "40px", marginRight: "10px" }}
  />
  <span className="fw-bold">Soumik Library</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  Show All Books
                </Link>
              </li>
            )}

            {role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            )}

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger ms-2"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
