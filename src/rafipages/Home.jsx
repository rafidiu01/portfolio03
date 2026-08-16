import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import EnergyCore from "@/components/three/EnergyCore";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const heroRef = useRef(null);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    setIsLoaded(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        mvX.set(relX);
        mvY.set(relY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
    };
  }, [mvX, mvY]);

  const skills = ["Swift", "SwiftUI", "UIKit", "Combine", "CoreData", "Xcode", "iOS SDK", "Objective-C", "Java", "C++"];

  const socials = [
    { icon: <FaGithub size={22} />, href: "https://github.com/hasanRafi2002" },
    { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/serock01/" },
    { icon: <FaTwitter size={22} />, href: "https://x.com/rafi_hasan_03" },
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } } };
  const fadeUp = { hidden: { opacity: 0, y: reduceMotion ? 0 : 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

  return (
    <div ref={heroRef} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#030503]">

      <div className="absolute inset-0 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#040a05] to-black" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="energy-cloud energy-cloud-one" />
          <div className="energy-cloud energy-cloud-two" />
          <div className="energy-cloud energy-cloud-three" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle 380px at " + mousePosition.x + "px " + mousePosition.y + "px, rgba(57,255,20,0.14), transparent 70%)" }} />
        <div className="absolute inset-0 pointer-events-none scan-overlay opacity-20" />
      </div>

      {!reduceMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
          <EnergyCore height="100%" />
        </div>
      )}

      <motion.div initial="hidden" animate={isLoaded ? "show" : "hidden"} variants={container} className="relative z-10 w-full max-w-5xl px-6">

        <motion.div variants={fadeUp} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-black/40 text-omni/90 shadow-glow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" />
            System Online
          </div>
          <h1 className="mt-5 text-4xl font-display font-black text-white md:text-6xl text-glow tracking-wide">Md Tawhid Hasan Rafi</h1>
          <p className="mt-4 text-lg text-emerald-100/70 font-display tracking-wide">iOS Software Engineer <span className="text-omni">/</span> Swift &amp; SwiftUI Developer</p>
        </motion.div>

        <motion.div variants={fadeUp} className="relative flex flex-col items-center mt-10" style={{ perspective: 1000 }}>

          <motion.div style={{ rotateX: reduceMotion ? 0 : rotateX, rotateY: reduceMotion ? 0 : rotateY }} className="relative flex items-center justify-center w-56 h-56 md:w-64 md:h-64">

            <div className="absolute w-[380px] h-[380px] rounded-full omnitrx-field md:w-[460px] md:h-[460px]" />
            <div className="absolute w-[330px] h-[330px] rounded-full omnitrx-ring omnitrx-ring-one md:w-[390px] md:h-[390px]" />
            <div className="absolute w-[290px] h-[290px] rounded-full omnitrx-ring omnitrx-ring-two md:w-[350px] md:h-[350px]" />

            <div className="absolute w-[420px] h-[420px] pointer-events-none">
              <span className="particle particle-1" /><span className="particle particle-2" /><span className="particle particle-3" />
              <span className="particle particle-4" /><span className="particle particle-5" /><span className="particle particle-6" />
            </div>

            <div className="absolute inset-0 rounded-full omnitrx-glow" />

            <div className="absolute inset-4 rounded-full omnitrx-bezel">
              <div className="absolute inset-2 rounded-full omnitrx-energy-border" />
              <div className="absolute inset-6 rounded-full bg-black/95 shadow-[inset_0_0_18px_rgba(57,255,20,0.35),0_0_20px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-3 rounded-full border-[4px] border-omni/80 shadow-[0_0_15px_rgba(57,255,20,0.8)]" />
                <div className="absolute inset-0 omnitrx-ticks">
                  <span /><span /><span /><span /><span /><span /><span /><span />
                </div>
                <div className="absolute inset-8 overflow-hidden rounded-full omnitrx-chamber">
                  <div className="absolute inset-[-30%] omnitrx-energy-wave" />
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-300/90 via-green-500/90 to-emerald-800/95" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.75),transparent_22%,transparent_60%)]" />
                  <div className="absolute inset-[14%] overflow-hidden rounded-full border-[4px] border-white/90 shadow-[0_0_25px_rgba(57,255,20,0.95)]">
                    <img src="https://avatars.githubusercontent.com/u/173989431?v=4" alt="Profile" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-green-400/10 mix-blend-screen" />
                  </div>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-[8%] -translate-x-1/2 w-0 h-0 border-l-[13px] border-r-[13px] border-b-[22px] border-l-transparent border-r-transparent border-b-black/90" />
                    <div className="absolute left-1/2 bottom-[8%] -translate-x-1/2 w-0 h-0 border-l-[13px] border-r-[13px] border-t-[22px] border-l-transparent border-r-transparent border-t-black/90" />
                    <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[13px] border-b-[13px] border-r-[22px] border-t-transparent border-b-transparent border-r-black/90" />
                    <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[13px] border-b-[13px] border-l-[22px] border-t-transparent border-b-transparent border-l-black/90" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none omnitrx-arc" />
            <div className="absolute w-6 h-6 rounded-full bg-lime-300 shadow-[0_0_15px_#39ff14,0_0_35px_#39ff14] animate-pulse" />
          </motion.div>

          <motion.div variants={fadeUp} className="relative z-30 flex flex-wrap justify-center max-w-3xl gap-2 mt-10">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm font-display tracking-wide text-emerald-100/80 transition-all duration-300 rounded-full bg-black/50 border border-omni/25 hover:border-omni hover:text-omni hover:shadow-glow-sm hover:scale-110">{skill}</span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="w-full max-w-2xl px-4 mt-6 text-center">
            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=500&color=39FF14&center=true&vCenter=true&width=650&lines=%F0%9F%9A%80+iOS+Software+Engineer+with+a+Vision;%F0%9F%92%BB+Building+Elegant+SwiftUI+Apps;%F0%9F%94%AC+Optimizing+iOS+Performance;%F0%9F%8E%AF+Problem+Solver+%26+Innovation+Enthusiast" alt="Animated Typing" className="block w-full max-w-[650px] mx-auto opacity-90" />
          </motion.div>

          <motion.div variants={fadeUp} className="relative z-30 flex gap-6 mt-6">
            {socials.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-emerald-100/60 bg-black/40 border border-omni/20 transition-all duration-300 hover:text-omni hover:border-omni hover:-translate-y-1 hover:shadow-glow">{social.icon}</a>
            ))}
          </motion.div>

          <motion.a variants={fadeUp} href="https://drive.google.com/file/d/1vm7-CmGXOSiyxVyuOBGNAo44jMVOPXsu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="neon-btn relative z-30 inline-flex items-center gap-2 px-7 py-3 mt-8 rounded-xl font-display font-semibold tracking-wide">
            <FaDownload className="relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>

        </motion.div>
      </motion.div>

      <style jsx>{`
        .energy-cloud { position: absolute; width: 500px; height: 500px; border-radius: 50%; filter: blur(90px); opacity: 0.16; background: #39ff14; animation: cloudFloat 12s ease-in-out infinite; }
        .energy-cloud-one { left: 35%; top: 25%; }
        .energy-cloud-two { right: 10%; bottom: 5%; animation-delay: -4s; opacity: 0.10; }
        .energy-cloud-three { left: 5%; bottom: 10%; animation-delay: -8s; opacity: 0.08; }
        @keyframes cloudFloat { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, -30px) scale(1.15); } }
        @media (max-width: 640px) {
          .energy-cloud { width: 300px; height: 300px; }
          .omnitrx-field { width: 330px; height: 330px; }
          .omnitrx-ring-one { width: 280px; height: 280px; }
          .omnitrx-ring-two { width: 240px; height: 240px; }
        }
      `}</style>
    </div>
  );
};

export default Home;
