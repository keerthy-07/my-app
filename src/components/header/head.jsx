import "./head.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {FaBars,FaTimes} from "react-icons/fa";

function Head(props) {
  const [menuOpen,setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className={`head ${isScrolled ? "scrolled" : ""}`}>
      <h2>{props.logo}</h2>
      <div className="menu-icon" 
      onClick={()=> setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes />:<FaBars />}
      </div>
      <nav className={`menuOpen ? "active : ""}`}>
        <ul >
          <li>{props.home}</li>
          <li>{props.about}</li>
          <li>{props.contact}</li>
          <li>{props.docs}</li>
        </ul>
      </nav>
      
      <div className={`buttons ${menuOpen ? "active" : ""}`}>
        <Link to="/Login">
          <button className="log">LOGIN</button>
        </Link>
        <button className="blocks">BLOCKS</button>  
      </div>
    </div>
  );
}

export default Head;        