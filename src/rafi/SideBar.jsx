import React, { useState } from "react";
import {
  Github, Linkedin, Twitter, Mail, Phone, MapPin, FileText,
  Code2, GraduationCap, Brain
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const skills = {
    languages: [
      { name: "Swift", level: 95 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 }
    ],
    tech: [
      { name: "UIKit / SwiftUI", level: 90 },
      { name: "Xcode", level: 95 },
      { name: "MVVM Architecture", level: 85 },
      { name: "Firebase (Auth, Firestore)", level: 80 },
      { name: "REST APIs & URLSession", level: 85 },
      { name: "Swift Concurrency (async/await)", level: 85 }
    ]
  };

  const SkillBar = ({ level }) => (
    <div className="w-full h-1.5 bg-black/60 rounded-full border border-omni/15 overflow-hidden">
      <div className="h-full rounded-full bg-gradient-to-r from-omni-dim via-omni to-omni-bright shadow-glow-sm" style={{ width: level + "%" }} />
    </div>
  );

  const asideClass = "fixed top-12 md:top-0 left-0 h-screen w-72 bg-black/85 backdrop-blur-md grid-bg border-r border-omni/25 transform transition-all duration-500 ease-out z-40 flex flex-col shadow-[10px_0_40px_rgba(0,0,0,0.6)] md:translate-x-0 " + (isOpen ? "translate-x-0" : "-translate-x-full");
  const mailHref = "https://mail.google.com/mail/?view=cm&to=rafi2002ten@gmail.com";

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed z-[1000] p-2 text-omni transition-all duration-300 rounded-lg shadow-glow md:hidden top-4 left-4 bg-black/70 border border-omni/50 hover:border-omni" aria-label="Toggle Sidebar">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside className={asideClass}>
        <div className="relative p-6 border-b border-omni/20">
          <div className="absolute inset-0 bg-gradient-to-b from-omni/10 to-transparent" />
          <div className="relative flex flex-col items-center">
            <div className="relative w-28 h-28 group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-omni-dim to-omni opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-omni/70 shadow-glow">
                <img src="https://avatars.githubusercontent.com/u/173989431?v=4" alt="Profile" className="object-cover w-full h-full" />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-display font-bold text-white text-glow tracking-wide">Md Tawhid Hasan Rafi</h2>
            <p className="mt-1 font-medium text-omni/80 text-sm tracking-widest uppercase font-display">iOS Software Engineer</p>
            <div className="w-12 h-[2px] mt-3 rounded-full bg-gradient-to-r from-transparent via-omni to-transparent shadow-glow" />
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          <div className="p-3 rounded-lg bg-black/40 border border-omni/15 hud-corners relative">
            <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><Phone size={13} className="text-omni" /> Contact Info</h3>
            <div className="mt-2 space-y-1">
              <a href={mailHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 text-sm text-emerald-100/70 transition rounded-md hover:bg-omni/10 hover:text-omni">
                <Mail size={14} className="text-omni/70" /> rafi2002ten@gmail.com
              </a>
              <a href="https://wa.me/8801540050626" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 text-sm text-emerald-100/70 transition rounded-md hover:bg-omni/10 hover:text-omni">
                <FaWhatsapp size={14} className="text-omni/70" /> +880 1540-050626
              </a>
              <p className="flex items-center gap-2 p-1.5 text-sm text-emerald-100/60"><MapPin size={14} className="text-omni/70" /> DSC, Savar, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/40 border border-omni/15">
            <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><GraduationCap size={13} className="text-omni" /> Education</h3>
            <div className="mt-2 space-y-2">
              <div className="p-2 text-sm bg-black/40 rounded-md border border-omni/10">
                <p className="font-medium text-emerald-50">BSc in Software Engineering</p>
                <p className="mt-1 text-emerald-100/60">Daffodil International University</p>
                <p className="text-emerald-100/40">2024 - 2028</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/40 border border-omni/15">
            <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><Code2 size={13} className="text-omni" /> Languages</h3>
            <div className="mt-2 space-y-2">
              {skills.languages.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-100/80">{skill.name}</span>
                    <span className="text-omni/70 font-mono">{skill.level}%</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/40 border border-omni/15">
            <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><Brain size={13} className="text-omni" /> Technologies</h3>
            <div className="mt-2 space-y-2">
              {skills.tech.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-100/80">{skill.name}</span>
                    <span className="text-omni/70 font-mono">{skill.level}%</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/40 border border-omni/15">
            <h3 className="flex items-center gap-2 text-xs font-display font-semibold tracking-widest uppercase text-omni/80"><FileText size={13} className="text-omni" /> Resume</h3>
            <a href="https://drive.google.com/file/d/1vm7-CmGXOSiyxVyuOBGNAo44jMVOPXsu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="neon-btn flex items-center justify-center gap-2 px-3 py-2 mt-2 text-sm font-semibold rounded-md font-display">
              <FileText size={14} /> Download Resume
            </a>
          </div>
        </div>

        <div className="p-4 border-t border-omni/20 bg-black/40">
          <div className="flex justify-center gap-3 mb-3">
            <a href="https://github.com/hasanRafi2002" target="_blank" rel="noopener noreferrer" className="p-2 transition bg-black/50 rounded-md border border-omni/20 hover:border-omni hover:text-omni"><Github size={16} className="text-emerald-100/70" /></a>
            <a href="https://www.linkedin.com/in/serock01/" target="_blank" rel="noopener noreferrer" className="p-2 transition bg-black/50 rounded-md border border-omni/20 hover:border-omni hover:text-omni"><Linkedin size={16} className="text-emerald-100/70" /></a>
            <a href="https://x.com/rafi_hasan_03" target="_blank" rel="noopener noreferrer" className="p-2 transition bg-black/50 rounded-md border border-omni/20 hover:border-omni hover:text-omni"><Twitter size={16} className="text-emerald-100/70" /></a>
          </div>
          <p className="text-xs text-center text-emerald-100/40 font-display tracking-wide">&copy; {new Date().getFullYear()} Tawhid Hasan Rafi</p>
        </div>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;
