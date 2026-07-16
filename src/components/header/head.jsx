import "./head.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Head(props) {

  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className={`head ${isScrolled ? "scrolled" : ""}`}>
      <h2>{props.logo}</h2>
      <nav>
        <ul className="menu">
          <li>{props.home}</li>
          <li>{props.about}</li>
          <li>{props.contact}</li>
          <li>{props.docs}</li>
        </ul>
      </nav>
      <div className="buttons">
        <Link to="/Login">
          <button className="log">LOGIN</button>
        </Link>
        <button className="blocks">BLOCKS</button>  
      </div>
    </div>
  );
}

export default Head;        