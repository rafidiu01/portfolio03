import React, { useState, useEffect } from 'react';
import {
  Home, Book, Briefcase, User, FileText, Github, Linkedin, Twitter,
  X, Sun, Moon, Code, Laptop, Send
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') !== 'false');
  const [activeSection, setActiveSection] = useState('home');

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const NavButton = ({ children, onClick, className }) => {
    const base = "relative p-2.5 rounded-lg transition-all duration-300 bg-black/40 hover:bg-omni/10 border border-omni/25 hover:border-omni/70 shadow-[0_0_8px_rgba(57,255,20,0.15)] hover:shadow-glow active:scale-95 backdrop-blur-sm";
    return <button onClick={onClick} className={base + " " + (className || "")}>{children}</button>;
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const navLinks = [
    { path: '/#home', label: 'Home', icon: <Home size={20} /> },
    { path: '/#about', label: 'About', icon: <User size={20} /> },
    { path: '/#skills', label: 'Skills', icon: <Code size={20} /> },
    { path: '/#projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { path: '/#work', label: 'Experience', icon: <Laptop size={20} /> },
    { path: '/#education', label: 'Education', icon: <Book size={20} /> },
    { path: '/#blog', label: 'Blog', icon: <FileText size={20} /> },
    { path: '/#contact', label: 'Contact', icon: <Send size={20} /> },
  ];

  const socials = [
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/hasanRafi2002" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/serock01/" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://x.com/rafi_hasan_03" }
  ];

  const handleNavigation = (path) => {
    setActiveSection(path.slice(2));
    const targetSection = document.querySelector(path.slice(1));
    if (targetSection) {
      window.history.pushState(null, '', path);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = path;
    }
    setIsOpen(false);
  };

  const drawerClass = "fixed inset-y-0 right-0 w-72 bg-black/90 backdrop-blur-md border-l border-omni/30 shadow-[-10px_0_40px_rgba(0,0,0,0.6)] transform transition-all duration-500 ease-out z-50 grid-bg " + (isOpen ? "translate-x-0" : "translate-x-full");

  return (
    <div className='fixed top-0 right-0 z-[100] flex flex-col items-center justify-center w-full gap-6 md:h-screen bg-black/60 backdrop-blur-md border-l border-omni/20 md:w-16'>
      <div className="flex flex-col items-center gap-6 mt-4">
        <NavButton onClick={handleDarkModeToggle} className="group overflow-hidden">
          {darkMode ? <Sun size={22} className="transition-transform duration-500 text-omni group-hover:rotate-180 drop-shadow-[0_0_6px_rgba(57,255,20,0.8)]" /> : <Moon size={22} className="transition-transform duration-500 text-omni/70 group-hover:-rotate-180" />}
        </NavButton>
      </div>

      <button onClick={() => setIsOpen(true)} className="fixed z-50 p-2 text-omni transition-all duration-300 shadow-glow top-4 right-4 rounded-xl bg-black/70 border border-omni/50 hover:border-omni hover:bg-omni/10 md:hidden" aria-label="Open Menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={drawerClass}>
        <button onClick={() => setIsOpen(false)} className="absolute p-2 transition-all duration-300 text-omni/70 rounded-xl hover:text-omni top-4 right-4 hover:bg-omni/10 hover:scale-105 border border-transparent hover:border-omni/40" aria-label="Close Menu">
          <X size={24} />
        </button>

        <div className="flex flex-col h-full p-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-display font-bold text-omni text-glow tracking-wider">MENU</h2>
            <div className="w-24 h-[2px] mx-auto mt-4 bg-gradient-to-r from-transparent via-omni to-transparent shadow-glow" />
          </div>

          <nav className="space-y-1">
            {navLinks.map((item, index) => {
              const active = activeSection === item.path.slice(2);
              const rowClass = "flex items-center gap-4 p-3 transition-all duration-300 rounded-lg group w-full text-left border " + (active ? "bg-omni/10 text-omni border-omni/50 shadow-glow-sm" : "hover:bg-omni/5 text-emerald-100/70 border-transparent hover:border-omni/25");
              const iconClass = "p-2 rounded-lg transition-all duration-300 group-hover:scale-110 " + (active ? "bg-omni text-black shadow-glow" : "bg-black/40 text-omni/80 group-hover:text-omni border border-omni/20");
              return (
                <button key={index} onClick={() => handleNavigation(item.path)} className={rowClass}>
                  <span className={iconClass}>{item.icon}</span>
                  <span className="text-sm font-semibold tracking-wide font-display">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto">
            <h3 className="mb-6 text-xs font-display font-semibold tracking-[0.2em] uppercase text-omni/70">Connect</h3>
            <div className="flex justify-center gap-4">
              {socials.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 text-omni/80 transition-all duration-300 rounded-lg bg-black/40 border border-omni/25 hover:border-omni hover:text-omni hover:scale-110 hover:shadow-glow" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <button onClick={handleDarkModeToggle} className="flex items-center justify-center w-full gap-3 p-3 mt-8 transition-all duration-300 rounded-lg bg-black/40 border border-omni/20 hover:border-omni/50 hover:bg-omni/5 group">
            {darkMode ? <Sun size={20} className="transition-transform duration-500 text-omni group-hover:rotate-180" /> : <Moon size={20} className="transition-transform duration-500 text-omni/70 group-hover:-rotate-180" />}
            <span className="text-sm font-semibold text-emerald-100/80 font-display">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>

      <div className="flex-col items-center hidden gap-6 mb-6 md:flex">
        {navLinks.map((item, index) => {
          const active = activeSection === item.path.slice(2);
          return (
            <NavButton key={index} onClick={(event) => { event.preventDefault(); handleNavigation(item.path); }} className={active ? "!bg-omni/15 !border-omni shadow-glow" : ""}>
              <span className={active ? 'text-omni' : 'text-emerald-100/50 group-hover:text-omni'}>{item.icon}</span>
            </NavButton>
          );
        })}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Navbar;
