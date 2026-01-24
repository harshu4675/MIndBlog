import React from "react";
import { Menu, X } from "lucide-react";
import "./Styles/Navbar.css";

const Navbar = ({
  scrolled,
  navigateTo,
  currentPage,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const navLinks = ["home", "about", "labs", "saved"];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className={`navbar-box ${scrolled ? "navbar-shadow" : ""}`}>
          {/* LOGO */}
          <div
            onClick={() => {
              navigateTo("home");
              setIsMenuOpen(false);
            }}
            className="navbar-logo"
          >
            <div className="logo-icon">
              <div className="logo-dot"></div>
            </div>
            <h1 className="logo-text">
              MIND<span>BLOG</span>
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <div className="navbar-links">
            {navLinks.map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`nav-link ${currentPage === page ? "active" : ""}`}
              >
                {page === "saved" ? "Saved" : page}
                <span className="nav-underline"></span>
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((page) => (
              <button
                key={page}
                onClick={() => {
                  navigateTo(page);
                  setIsMenuOpen(false);
                }}
                className={`mobile-link ${
                  currentPage === page ? "active" : ""
                }`}
              >
                {page === "saved" ? "Saved" : page}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
