import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  // controls the mobile version
  const [menuOpen, setMenuOpen] = useState(false);
  // nav links
  const nav = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "Gallery",
      route: "/gallery",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    // y

    <nav id="navbar">
      <div className="nav-items-container">
      <h1 className="siteName" onClick={() => navigate("/")}>
        Sammi Nails Spa
      </h1>
      
   
        {/* Mobile menu icon */}
        
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
       
      </div> <ul className={menuOpen ? "open" : "nav-items"}>
          {nav.map((link) => (
            <li key={link.name} className="navLink">
              <Link to={link.route}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="navbar-contact-us">
          <button  onClick={handleClick}>
            Contact Us
          </button>
        </div>
    </nav>
  );
};
export default Navbar;