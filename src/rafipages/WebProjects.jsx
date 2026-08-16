import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Laptop, Camera, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";

const webProjects = [
  {
    id: 1,
    title: "Dwella",
    description: "A modern real estate platform connecting buyers, agents, and admins seamlessly.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
    liveLink: "https://rafi-a12.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/Dwella",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  },
  {
    id: 2,
    title: "FlavorFusion",
    description: "Restaurant Management Website for smooth order and menu handling.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true",
    liveLink: "https://rafi-a11.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/FlavorFusion",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  },
  {
    id: 3,
    title: "EquiSports",
    description: "E-commerce platform for sports equipment with reviews and secure checkout.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true",
    liveLink: "https://rafi-a10.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/EquiSports",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  },
  {
    id: 4,
    title: "Gadget Heaven",
    description: "Premium electronics e-commerce platform with an intuitive interface.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true",
    liveLink: "https://rafi-a09.netlify.app/",
    githubLink: "https://github.com/hasanRafi2002/EquiSports",
    tech: ["React", "Firebase", "Tailwind", "MongoDB", "Express"]
  }
];

const WebProjects = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-screen bg-black grid-bg p-6">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Laptop className="w-6 h-6 text-omni animate-spin-slow" />
          <h2 className="text-2xl font-display font-bold text-white md:text-4xl text-glow">My Web Projects</h2>
          <Camera className="w-6 h-6 text-omni/70 animate-bounce-slow" />
        </div>
        <p className="text-emerald-100/60">Some of my best web development work</p>
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 mb-6 mt-4 px-4 py-2 rounded-lg text-omni border border-omni/30 bg-black/40 hover:border-omni hover:shadow-glow-sm transition-all duration-300">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {webProjects.map((project, i) => (
          <motion.div key={project.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: i * 0.05 }} className="relative transition-all duration-500 ease-out group" onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}>

            <div className={"relative w-full lg:w-[75%] h-[250px] lg:h-[400px] rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-omni-dim via-omni to-omni-dim transition-all duration-500 transform " + (hoveredId === project.id ? "md:scale-105 shadow-glow" : "")}>
              <img src={project.image} alt={project.title} className="object-cover w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-110" />
            </div>

            <Card className={"relative xl:absolute right-0 top-0 lg:top-1/2 w-full xl:w-[45%] mt-4 lg:mt-0 transform xl:-translate-y-1/2 bg-black/70 backdrop-blur-sm border border-omni/25 rounded-xl transition-all duration-500 " + (hoveredId === project.id ? "md:translate-x-4 md:scale-105 shadow-glow border-omni/60" : "")}>
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-omni md:text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-emerald-100/60 md:text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs rounded-full border border-omni/25 text-omni/90 bg-omni/5 md:text-sm md:px-3">{tech}</span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="neon-btn inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm rounded-lg sm:w-auto md:px-6 md:py-3 md:text-base font-display">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm rounded-lg sm:w-auto md:px-6 md:py-3 md:text-base font-display bg-black/60 border border-omni/25 text-emerald-100/80 hover:border-omni hover:text-omni transition-all duration-300">GitHub</a>
                <Link to={"/project/" + project.id} className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm rounded-lg sm:w-auto md:px-6 md:py-3 md:text-base font-display bg-black/60 border border-omni/25 text-emerald-100/80 hover:border-omni hover:text-omni transition-all duration-300">View More</Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebProjects;
