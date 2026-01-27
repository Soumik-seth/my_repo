import { Link, useNavigate } from "react-router-dom";



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


            </footer>
    );
}

export default Footer;