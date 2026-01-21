import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/library_log.png";
import "./Navbar.css";
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
         <img
    src={logo}

    alt="S Library Logo"
    className="me-2 navbar-logo"
  />
  <span className="brand-text text-dark">Soumik Library</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/">Home</Link>
            </li>

            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/books">
                  Show All Books
                </Link>
              </li>
            )}

            {role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/admin">
                  Admin
                </Link>
              </li>
            )}

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/login">
                  Login
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item">
    <button
        className="btn btn-outline-warning ms-2"
     onClick={logout}
            >
  Logout
</button>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/contact">
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
