import React from "react";
import { Github, Linkedin, Twitter, Zap } from "lucide-react";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Glow Line */}
      <div className="footer-glow-line"></div>

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-logo">
            <Zap />
          </div>
          <h2 className="brand-title">MindBlog</h2>
          <p className="brand-desc">
            A futuristic tech blog exploring development, tools, design, and
            emerging technologies. Built for curious minds.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigate</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Labs</li>
            <li>Articles</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>Web Trends</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/harshu4675" className="social-btn">
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-solanki-2b3a04310/"
              className="social-btn"
            >
              <Linkedin size={18} />
            </a>
            <a className="social-btn">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span>© 2026 MindBlog. All rights reserved.</span>
          <span>Built with React • Vite • Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
