import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    role: "Founder & iOS Developer",
    company: "RafiTech Apps",
    duration: "2025 - Present",
    description: "Developing iOS apps independently using Swift, SwiftUI, and UIKit. Focused on building real-world apps, integrating REST APIs, Firebase, and deploying apps to the App Store. Emphasizing clean code, performance optimization, and modern mobile design.",
    link: "#",
  },
  {
    id: 2,
    role: "Personal iOS Projects",
    company: "Self-Initiated",
    duration: "2024 - Present",
    description: "Built multiple iOS apps to practice Swift, SwiftUI, CoreData, and Combine. Projects include a task manager, weather app, and a small social media app. Demonstrated ability to handle app lifecycle, offline storage, and user authentication.",
    link: "#",
  },
];

const Experience = () => {
  const fadeUp = { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-screen bg-black grid-bg">
      <div className="container max-w-6xl px-4 py-20 mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-black/40 text-omni/90">
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Timeline Log
          </div>
          <h2 className="mb-4 text-4xl font-display font-bold text-white text-glow">Work Experience</h2>
          <p className="text-emerald-100/60">My professional journey</p>
        </div>

        <div className="relative space-y-8">
          <div className="absolute left-8 top-2 bottom-0 w-[2px] bg-gradient-to-b from-omni via-omni/40 to-transparent shadow-glow" />

          {experienceData.map((exp, i) => (
            <motion.div key={exp.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="relative pl-16">
              <div className="absolute w-4 h-4 -translate-x-1/2 bg-omni rounded-full left-6 shadow-glow ring-4 ring-black" />

              <div className="p-6 rounded-xl bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow transition-all duration-300 hud-corners relative">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-display font-semibold text-white"><FaBriefcase className="text-omni" /> {exp.role}</h4>
                      <p className="flex items-center gap-2 mt-2 text-emerald-100/70"><FaBuilding className="text-omni/70" /> {exp.company}</p>
                    </div>
                    <p className="flex items-center gap-2 text-sm text-omni/70 font-mono"><FaCalendarAlt className="text-omni/70" /> {exp.duration}</p>
                  </div>

                  <p className="leading-relaxed text-emerald-100/60">{exp.description}</p>

                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-omni/10 border border-omni/30 text-omni hover:border-omni hover:shadow-glow-sm transition-all duration-300">
                    <FaExternalLinkAlt className="text-xs" /> Company Website
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
