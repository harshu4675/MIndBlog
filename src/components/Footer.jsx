import React from "react";
import { Globe, Zap, Shield, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 py-16 border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-8 mb-10">
            <Github
              size={20}
              className="text-gray-600 hover:text-cyan-400 cursor-pointer transition-colors"
            />
            <Twitter
              size={20}
              className="text-gray-600 hover:text-cyan-400 cursor-pointer transition-colors"
            />
            <Linkedin
              size={20}
              className="text-gray-600 hover:text-cyan-400 cursor-pointer transition-colors"
            />
          </div>

          {/* Center Branding */}
          <div className="flex items-center space-x-3 mb-6 opacity-40">
            <div className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center">
              <Zap size={14} className="text-black" />
            </div>
            <span className="text-sm font-black tracking-[0.3em] uppercase">
              Core.OS Interface
            </span>
          </div>

          {/* System Status Line */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-[10px] font-bold text-gray-700 uppercase tracking-[0.2em]">
            <span className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></div>{" "}
              Network: Online
            </span>
            <span>Security: 256-Bit AES</span>
            <span>Environment: Production</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-[9px] tracking-[0.5em] uppercase text-center">
            © {currentYear} CORE.OS TRANSMISSION TERMINATED // BUILT FOR BTECH
            FINAL SUBMISSION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
