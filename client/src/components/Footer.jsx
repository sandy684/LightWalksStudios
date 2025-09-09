// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; 
import { RiFacebookFill, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section */}
        <div>
          <h2>Light Walks Studios</h2>
          <p>
            Capturing moments, creating memories. <br />
            Your vision, our lens.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3>Follow Us</h3>
          <div className="socials">
            <a href="#"><RiFacebookFill /></a>
            <a href="#"><RiInstagramLine /></a>
            <a href="#"><RiTwitterXLine /></a>
          </div>
        </div>
      </div>

      <div className="bottom-text">
        © {new Date().getFullYear()} Light Walks Studios. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
