import React from "react";
import { Menu, X, Zap } from "lucide-react";

const Navbar = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  navigateTo,
  currentPage,
}) => (
  <nav
    className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/10 py-3"
        : "bg-transparent py-6"
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div
        onClick={() => navigateTo("home")}
        className="flex items-center space-x-2 cursor-pointer group"
      >
        <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:rotate-12 transition-transform">
          <Zap size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase">
          MindBlog
        </h1>
      </div>

      {/* Increased font size to text-sm/base and font-bold */}
      <div className="hidden md:flex space-x-10 text-[13px] font-black tracking-[0.2em] uppercase">
        {["home", "about", "labs"].map((page) => (
          <button
            key={page}
            onClick={() => navigateTo(page)}
            className={`transition-all hover:scale-110 ${
              currentPage === page
                ? "text-cyan-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </nav>
);

export default Navbar;
