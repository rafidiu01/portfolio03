import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Clock, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const iosProjects = [
  {
    id: 1,
    title: "Smart Task Manager",
    shortDescription: "A task management iOS app built using Swift, MVVM, and Firebase.",
    longDescription: "Smart Task Manager is a productivity-focused iOS application designed to help users manage daily tasks efficiently. The app follows MVVM architecture, ensuring a clean separation of concerns and scalability. Firebase Authentication and Firestore enable real-time synchronization across devices.",
    screenshots: ["https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-task.png?raw=true"],
    githubLink: "https://github.com/hasanRafi2002/SmartTaskManager",
    tech: ["Swift", "SwiftUI", "MVVM", "Firebase", "Async/Await"],
    features: ["User authentication with Firebase", "Create, update, and delete tasks", "Real-time task synchronization", "MVVM-based scalable architecture", "Clean UI using SwiftUI"],
    duration: "2 months",
    status: "Completed",
    lastUpdate: "2024-02-10",
  },
  {
    id: 2,
    title: "API-Based iOS App",
    shortDescription: "An iOS app consuming REST APIs using URLSession and async/await.",
    longDescription: "This project demonstrates real-world API consumption in iOS. The app fetches data from public REST APIs, handles loading states, errors, pagination, and displays results efficiently using Swift concurrency.",
    screenshots: ["https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-api.png?raw=true"],
    githubLink: "https://github.com/hasanRafi2002/API-iOS-App",
    tech: ["Swift", "URLSession", "REST API", "JSON", "Async/Await"],
    features: ["REST API integration", "Async/Await based networking", "JSON decoding with Codable", "Error and loading state handling", "Scalable networking layer"],
    duration: "1.5 months",
    status: "Completed",
    lastUpdate: "2024-01-20",
  },
  {
    id: 3,
    title: "Vapor Backend for iOS",
    shortDescription: "Swift-based backend using Vapor and PostgreSQL for iOS clients.",
    longDescription: "This project focuses on backend development using Vapor. RESTful APIs were built to support iOS clients with authentication and CRUD operations. PostgreSQL was used as the primary database with a clean relational schema.",
    screenshots: ["https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/ios-vapor.png?raw=true"],
    githubLink: "https://github.com/hasanRafi2002/Vapor-iOS-Backend",
    tech: ["Swift", "Vapor", "PostgreSQL", "REST API"],
    features: ["RESTful API design", "PostgreSQL database integration", "Authentication and CRUD endpoints", "Designed for iOS client consumption", "Clean backend architecture"],
    duration: "2 months",
    status: "Completed",
    lastUpdate: "2024-03-01",
  },
];

const IOSProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = iosProjects.find((p) => p.id === Number(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-12 h-12 border-4 border-omni/30 rounded-full border-t-omni animate-spin shadow-glow" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-3xl font-display font-bold text-white">Project Not Found</h1>
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg text-omni border border-omni/30 bg-black/40 hover:border-omni hover:shadow-glow-sm transition-all duration-300">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-black grid-bg">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg text-omni border border-omni/30 bg-black/40 hover:border-omni hover:shadow-glow-sm transition-all duration-300">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>

        <div className="overflow-hidden rounded-xl border border-omni/25 shadow-glow">
          <img src={project.screenshots[0]} alt={project.title} className="object-cover w-full h-64 md:h-96" />
        </div>

        <h1 className="mt-6 text-3xl font-display font-bold text-white text-glow md:text-4xl">{project.title}</h1>
        <p className="mt-2 text-emerald-100/60">{project.shortDescription}</p>

        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
          <Card className="bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
            <CardContent className="flex items-center gap-3 p-4"><Clock className="text-omni" /><span className="text-emerald-100/80">{project.duration}</span></CardContent>
          </Card>
          <Card className="bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
            <CardContent className="flex items-center gap-3 p-4"><CheckCircle className="text-omni" /><span className="text-emerald-100/80">{project.status}</span></CardContent>
          </Card>
          <Card className="bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
            <CardContent className="flex items-center gap-3 p-4"><Calendar className="text-omni" /><span className="text-emerald-100/80">{new Date(project.lastUpdate).toLocaleDateString()}</span></CardContent>
          </Card>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
          <h2 className="text-2xl font-display font-bold text-white">Overview</h2>
          <p className="mt-3 text-emerald-100/60">{project.longDescription}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
          <h2 className="text-2xl font-display font-bold text-white">Key Features</h2>
          <ul className="grid gap-3 mt-4 md:grid-cols-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-emerald-100/70">
                <CheckCircle className="w-5 h-5 mt-1 text-omni" /> {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-10">
          <h2 className="text-2xl font-display font-bold text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 text-sm rounded-full border border-omni/25 text-omni/90 bg-omni/5">{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="neon-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display">
            <Github className="w-5 h-5" /> View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default IOSProjectDetails;
