import { Link } from "react-router-dom";
const role = localStorage.getItem("role");



function Navbar() {
  const isLoggedIn = localStorage.getItem("token");   // later use real auth

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/">
          Library
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
        
                    {/* Go to Home page (Home page) */}
             
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            

            {/* Show All Books (only after login) */}
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  Show All Books
                </Link>
              </li>
            )}

            {/* Login */}
             
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            

            {/* Facebook */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>

            {/* Contact */}
            <li className="nav-item">
             <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
            </li>
            <li className="nav-item">
            {role==="admin" && (
  <Link className="nav-link" to="/admin">Admin</Link>
)}
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
