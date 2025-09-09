import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <div className="landing">
        <Navbar />

        {/* Hero Section */}
        <motion.div
          className="hero"
          id="home"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="hero-text">
            <h1>Photographers</h1>
            <p>Tiruvallur, Tamil Nadu</p>
            <button className="hire-btn">HIRE US</button>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              alt="Photographer"
            />
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="about"
          id="about"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Light Walks Studios is the vision of a young, passionate photographer...
            </p>
            <p>
              As the main founder and sponsor, he leads the journey of shaping this brand...
            </p>
            <p>
              Light Walks Studios isn’t just about photographs — it’s about preserving
              memories, celebrating moments, and building a legacy through the lens.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="About"
            />
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          className="portfolio"
          id="portfolio"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" alt="work1" />
            <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" alt="work2" />
            <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="work3" />
            <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" alt="work4" />
            <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="work5" />
            <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="work6" />
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          className="blog"
          id="blog"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Blog</h2>
          <div className="blog-list">
            {/* Blog Item */}
            <motion.div className="blog-item" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="Portrait Tips" />
              <div className="blog-content">
                <span>3.11.2023</span>
                <h3>5 Tips for Capturing Stunning Portraits</h3>
                <p>Discover simple yet powerful techniques...</p>
              </div>
            </motion.div>

            {/* more blog items... */}
          </div>
          <motion.button className="blog-btn" whileHover={{ scale: 1.1 }}>
            VIEW ALL BLOG
          </motion.button>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="contact"
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="contact-form">
            <h2>Contact Me</h2>
            <p>
              Have a project in mind or need a photographer or filmmaker...
            </p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <motion.button type="submit" whileHover={{ scale: 1.05 }}>
                SEND
              </motion.button>
            </form>
          </div>
          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              alt="Contact"
            />
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default App;
