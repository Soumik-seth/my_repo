import { Link} from "react-router-dom";



function Footer (){
    return(
        <footer className="footer">
       <ul className="footer-link">
         <li>
      <Link to="/">HOME</Link>
         </li>
         <li>
      <Link to="/about">ABOUT</Link>
         </li>
         <li>
      <Link to="/contact">CONTACT</Link>
         </li>
       </ul>
      <p className="footer-text"> © {new Date().getFullYear()}  All rights reserved.</p>

            </footer>
    );
}

export default Footer;