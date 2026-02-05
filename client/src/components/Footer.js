import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <ul className="footer-link">
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/contact">CONTACT</Link>
        </li>

        {/* Facebook Icon */}
        <li>
          <a
            href="https://facebook.com/your-page"
            target="_blank"
            rel="noreferrer"
            className="facebook-link"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </li>
      </ul>

      <p className="footer-text">
        © {new Date().getFullYear()} All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
