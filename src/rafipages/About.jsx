import React from "react";
import { motion } from "framer-motion";

const AnimatedAboutMe = () => {
  const skills = [
    "Swift (iOS)", "UIKit / SwiftUI", "MVVM Architecture", "Firebase (Auth, Firestore)",
    "REST APIs & URLSession", "Swift Concurrency (async/await)", "PostgreSQL", "Vapor (Swift Backend)"
  ];

  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section className="relative py-24 bg-black grid-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full -top-48 -left-48 bg-omni/10 blur-3xl" />
        <div className="absolute w-96 h-96 rounded-full -bottom-48 -right-48 bg-omni/10 blur-3xl" />
      </div>

      <div className="container relative px-6 mx-auto lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-5">

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="space-y-8 lg:col-span-3">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-black/40 text-omni/90">
                <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Profile Data
              </div>
              <h2 className="text-4xl font-display font-bold text-white text-glow">About Me</h2>
              <div className="w-20 h-[2px] bg-gradient-to-r from-omni to-transparent shadow-glow" />
            </div>

            <div className="space-y-6">
              <p className="leading-relaxed text-emerald-100/70">
                I'm a passionate <span className="font-semibold text-omni">iOS Software Engineer</span> and <span className="font-semibold text-white">Software Engineering student</span> at Daffodil International University.
                I build performant iOS applications using <span className="font-semibold text-omni">Swift, UIKit/SwiftUI, MVVM, and Firebase</span>.
              </p>
              <p className="leading-relaxed text-emerald-100/70">
                My expertise also includes <span className="font-semibold text-omni">Swift Concurrency, REST APIs, local data persistence, and Swift backend with Vapor</span>.
                I enjoy solving algorithmic problems, writing clean, maintainable code, and creating scalable iOS solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-omni tracking-wide">iOS Technologies &amp; Tools</h3>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 p-3 text-sm rounded-lg bg-black/40 border border-omni/15 hover:border-omni/60 hover:shadow-glow-sm transition-all duration-300">
                    <span className="text-omni">▹</span>
                    <span className="font-mono text-emerald-100/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl opacity-40 bg-gradient-to-r from-omni-dim to-omni blur-md group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative p-8 bg-black/60 rounded-xl border border-omni/30 hud-corners">
                <img src="https://avatars.githubusercontent.com/u/173989431?v=4" alt="Profile" className="w-56 h-56 mx-auto rounded-full border-4 border-omni/70 shadow-glow transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-omni/15 blur-xl" />
                <div className="absolute w-20 h-20 rounded-full -bottom-4 -left-4 bg-omni/15 blur-xl" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AnimatedAboutMe;
