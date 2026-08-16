import React, { useState } from "react";
import { motion } from "framer-motion";
import { Apple, Phone, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const iosProjects = [
  {
    id: 1,
    title: "Smart Task Manager",
    description: "A task management iOS app using Swift, MVVM, and Firebase for real-time sync.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-task.png?raw=true",
    githubLink: "https://github.com/hasanRafi2002/SmartTaskManager",
    tech: ["Swift", "SwiftUI", "Firebase", "MVVM"],
  },
  {
    id: 2,
    title: "API-Based iOS App",
    description: "An iOS application consuming REST APIs with URLSession and async/await.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-api.png?raw=true",
    githubLink: "https://github.com/hasanRafi2002/API-iOS-App",
    tech: ["Swift", "URLSession", "JSON", "Async/Await"],
  },
  {
    id: 3,
    title: "Vapor Backend iOS",
    description: "RESTful backend built with Vapor and PostgreSQL supporting iOS clients.",
    image: "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-vapor.png?raw=true",
    githubLink: "https://github.com/hasanRafi2002/Vapor-iOS-Backend",
    tech: ["Vapor", "PostgreSQL", "Swift", "REST API"],
  },
];

const IOSProjects = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-screen bg-black grid-bg p-6">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Apple className="w-6 h-6 text-white animate-spin-slow" />
          <h2 className="text-3xl font-display font-bold text-white text-glow">My iOS Projects</h2>
          <Phone className="w-6 h-6 text-omni animate-bounce-slow" />
        </div>
        <p className="text-emerald-100/60">Apps built with Swift, SwiftUI, and modern iOS architecture</p>
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 mb-6 mt-4 px-4 py-2 rounded-lg text-omni border border-omni/30 bg-black/40 hover:border-omni hover:shadow-glow-sm transition-all duration-300">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>

      <div className="space-y-8 md:space-y-24">
        {iosProjects.map((project, i) => (
          <motion.div key={project.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: i * 0.05 }} className="relative transition-all duration-500 group" onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}>

            <div className={"relative w-full lg:w-[75%] h-[250px] lg:h-[400px] rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-omni-dim via-omni to-omni-dim transition-all duration-500 " + (hoveredId === project.id ? "md:scale-105 shadow-glow" : "")}>
              <img src={project.image} alt={project.title} className="object-cover w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-110" />
            </div>

            <Card className={"relative xl:absolute right-0 top-0 lg:top-1/2 w-full xl:w-[45%] mt-4 lg:mt-0 transform xl:-translate-y-1/2 bg-black/70 backdrop-blur-sm border border-omni/25 rounded-xl transition-all duration-500 " + (hoveredId === project.id ? "md:translate-x-4 md:scale-105 shadow-glow border-omni/60" : "")}>
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-omni md:text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-emerald-100/60">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs rounded-full border border-omni/25 text-omni/90 bg-omni/5">{tech}</span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 sm:flex-row">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-full px-4 py-2 rounded-lg font-display bg-black/60 border border-omni/25 text-emerald-100/80 hover:border-omni hover:text-omni transition-all duration-300">GitHub</a>
                <Link to={"/ios-projects/" + project.id} className="neon-btn inline-flex justify-center w-full px-4 py-2 rounded-lg font-display">View Details</Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IOSProjects;
