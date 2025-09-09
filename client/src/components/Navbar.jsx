import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // for hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Light Walks Studios</div>

      {/* Hamburger button (shown only on mobile) */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Nav links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
        <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
