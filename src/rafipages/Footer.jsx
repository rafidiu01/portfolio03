import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-omni/20 overflow-hidden grid-bg">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-omni to-transparent shadow-glow" />
      <div className="absolute inset-0 pointer-events-none opacity-30 scan-overlay" />

      <div className="container relative px-4 py-12 mx-auto">
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8 font-display text-sm tracking-wider uppercase text-emerald-100/60">
            <li><a href="#home" className="hover:text-omni transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-omni transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-omni transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-omni transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-omni transition-colors">Contact</a></li>
          </ul>
        </nav>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/hasanRafi2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
            className="p-3 transition-all bg-black/50 rounded-lg border border-omni/25 hover:border-omni hover:shadow-glow">
            <FaGithub className="text-xl text-emerald-100/70 hover:text-omni transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/serock01/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
            className="p-3 transition-all bg-black/50 rounded-lg border border-omni/25 hover:border-omni hover:shadow-glow">
            <FaLinkedin className="text-xl text-emerald-100/70 hover:text-omni transition-colors" />
          </a>
          <a href="https://x.com/rafi_hasan_03" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"
            className="p-3 transition-all bg-black/50 rounded-lg border border-omni/25 hover:border-omni hover:shadow-glow">
            <FaTwitter className="text-xl text-emerald-100/70 hover:text-omni transition-colors" />
          </a>
        </div>

        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-emerald-100/60 font-display tracking-wide">
            Built with <Zap className="w-4 h-4 text-omni animate-pulse" fill="currentColor" /> by Md Tawhid Hasan Rafi
          </p>
          <p className="mt-1 text-sm font-semibold text-omni/80 tracking-widest uppercase font-display">
            iOS Software Engineer
          </p>
          <p className="mt-2 text-xs text-emerald-100/30 font-display">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
