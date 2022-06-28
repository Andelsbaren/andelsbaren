import img1 from './BAS.jpg'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>    <div className="nav-container">
<iframe width="100%" height="70" src="https://rss.app/embed/v1/ticker/JC40fKJgHRHlyUtG" frameborder="0"></iframe>
   </div> 
      <nav className="navbar">
{/* 
        <NavLink exact to="/" className="nav-logo">
          ANDELSBAREN
        </NavLink> */}
          
        <ul className={click ? "nav-menu active" : "nav-menu"}>
     
          <li className="nav-item">
         
            <NavLink
              exact
              to="/services"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Tjänster
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/aboutus"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Om            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              exact
              to="/Media"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Media
            </NavLink> */}
          {/* </li> */}
          {/* <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Andelsspel
            </NavLink>
          </li> */}
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>

        </div>
            <div className="nav-horse">
              <NavLink to="/" className="home-button">  
              <img
          className="navbar-logo"
          src={img1} alt="" onClick={!handleClick} /> 
          </NavLink>
          </div>
      </nav>
    </>
  );
}

export default NavBar;