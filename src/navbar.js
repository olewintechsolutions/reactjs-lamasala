import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [ showMediaIcons, setShowMediaIcons ] = useState(false);
  return (
      <>
        <nav className="main-nav">
          <div className="logo">
            <p className="nav-p">KPR</p>
          </div>
          <div className= { showMediaIcons ? "menu-links mobile-menu-links" : "menu-links"}>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>        
            </ul>
          </div>
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="#"><FaFacebookSquare/></a>
              </li>
              <li>
                <a href="#"><FaInstagramSquare/></a>
              </li>
              <li>
                <a href="#"><FaTwitterSquare/></a>
              </li>
              </ul>
            <div className="hamburger-menu" onClick = {() => setShowMediaIcons(!showMediaIcons)}> 
              <a href="#"><GiHamburgerMenu/></a>
            </div>
          </div>         
        </nav>
        <section className="text-box">
          <h1>Hello!!</h1>
        </section>
      </>  
  );
}
export default Navbar;