import React from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const projectCategories = [
  {
    id: "web",
    title: "Web Development (Earlier Work)",
    description: "A collection of full-stack web apps I built with React, Tailwind, Firebase, and MongoDB before moving into iOS development.",
    icon: <Laptop className="w-6 h-6 text-omni" />,
    link: "/project/web"
  },
  {
    id: "ios",
    title: "iOS Development (Current Focus)",
    description: "My current work as an iOS Software Engineer — apps built with Swift, SwiftUI, UIKit, and Firebase.",
    icon: <Smartphone className="w-6 h-6 text-omni" />,
    link: "/project/ios"
  }
];

const Projects = () => {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-screen bg-black grid-bg p-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-black/40 text-omni/90">
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Project Archive
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white text-glow mb-3">My Projects</h1>
          <p className="text-base md:text-lg text-emerald-100/60">I'm currently focused on iOS development — here's that work, plus earlier web projects I built along the way.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projectCategories.map((category, i) => (
            <motion.div key={category.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <Card className="flex flex-col justify-between h-full p-6 rounded-xl bg-black/50 border border-omni/20 hover:border-omni/60 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                <CardHeader className="flex flex-col items-center gap-4 mb-4">
                  <div className="p-4 rounded-full bg-omni/10 border border-omni/25">{category.icon}</div>
                  <CardTitle className="text-xl font-display font-bold text-center text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-emerald-100/60 mb-6 text-sm md:text-base leading-relaxed">{category.description}</CardContent>
                <CardFooter className="flex justify-center">
                  <Link to={category.link} className="neon-btn w-full max-w-sm px-6 py-3 text-center font-display font-semibold rounded-lg">
                    View {category.title.replace(/\s*\(.*\)/, '')} Projects
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
