import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Globe, Github, Users, Calendar, Clock, Star, MessageCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    "id": 1,
    "title": "Dwella",
    "description": "A modern real estate platform that connects buyers, agents, and admins seamlessly.",
    "longDescription": "Dwella revolutionizes the real estate experience by providing a comprehensive platform where buyers can explore properties, agents can manage listings, and administrators can oversee all operations efficiently. The platform features advanced search capabilities, real-time notifications, and interactive virtual tours.",
    "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
    "screenshots": [
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true",
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-12.png?raw=true"
    ],
    "liveLink": "https://rafi-a12.netlify.app/",
    "githubLink": "https://github.com/hasanRafi2002/Dwella",
    "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
    "features": [
      "Advanced property search and filtering",
      "Real-time chat between buyers and agents",
      "Virtual tour scheduling",
      "Admin dashboard with analytics",
      "Mobile-responsive design"
    ],
    "team": "3 developers",
    "duration": "3 months",
    "status": "Completed",
    "lastUpdate": "2024-01-15"
  },
  {
    "id": 2,
    "title": "FlavorFusion",
    "description": "A restaurant management website for seamless ordering, menu management, and table reservations.",
    "longDescription": "FlavorFusion helps restaurant owners manage their business efficiently with an online ordering system, menu customization, and real-time table booking. It also provides customer analytics and feedback integration.",
    "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true",
    "screenshots": [
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true",
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-11.png?raw=true"
    ],
    "liveLink": "https://rafi-a11.netlify.app/",
    "githubLink": "https://github.com/hasanRafi2002/FlavorFusion",
    "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
    "features": [
      "Real-time table reservation system",
      "Menu customization for restaurant owners",
      "Order tracking for customers",
      "Customer feedback and rating system",
      "Admin dashboard with sales analytics"
    ],
    "team": "2 developers",
    "duration": "2.5 months",
    "status": "Completed",
    "lastUpdate": "2023-12-10"
  },
  {
    "id": 3,
    "title": "EquiSports",
    "description": "An e-commerce platform for browsing, purchasing, and reviewing sports equipment.",
    "longDescription": "EquiSports is a responsive e-commerce website tailored for sports enthusiasts, offering a variety of sports gear and accessories. Users can browse products, leave reviews, and make purchases securely.",
    "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true",
    "screenshots": [
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true",
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-10.png?raw=true"
    ],
    "liveLink": "https://rafi-a10.netlify.app/",
    "githubLink": "https://github.com/hasanRafi2002/EquiSports",
    "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
    "features": [
      "Product search and category filtering",
      "Secure checkout and payment integration",
      "User reviews and ratings",
      "Wishlist and cart management",
      "Admin dashboard for inventory control"
    ],
    "team": "3 developers",
    "duration": "4 months",
    "status": "In Progress",
    "lastUpdate": "2024-02-01"
  },
  {
    "id": 4,
    "title": "Gadget Heaven",
    "description": "A premium e-commerce platform for browsing and purchasing the latest gadgets and electronics.",
    "longDescription": "Gadget Heaven is a modern e-commerce website for premium electronics. Users can browse new arrivals, read product specifications, and securely purchase high-end gadgets.",
    "image": "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true",
    "screenshots": [
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true",
      "https://github.com/hasanrafi1122/photos/raw/main/ph-assignment/photo/asgn-8.png?raw=true"
    ],
    "liveLink": "https://rafi-a10.netlify.app/",
    "githubLink": "https://github.com/hasanRafi2002/GadgetHeaven",
    "tech": ["React", "Firebase", "Tailwind", "MongoDB", "Express"],
    "features": [
      "Detailed product pages with specifications",
      "AI-powered product recommendations",
      "Secure payment integration",
      "Cart and wishlist functionality",
      "User reviews and ratings"
    ],
    "team": "4 developers",
    "duration": "5 months",
    "status": "Completed",
    "lastUpdate": "2023-11-20"
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-16 h-16 border-4 border-omni/30 rounded-full border-t-omni animate-spin shadow-glow"></div>
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

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'technical', label: 'Technical Details' },
  ];

  return (
    <div className="min-h-screen mt-8 bg-black grid-bg md:mt-0">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg text-omni border border-omni/30 bg-black/40 hover:border-omni hover:shadow-glow-sm transition-all duration-300">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>

        <div className="relative overflow-hidden rounded-xl border border-omni/25 shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/80 z-10"></div>
          <img src={project.screenshots[currentImageIndex]} alt={project.title} className="object-cover w-full h-64 md:h-96" />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
            <h1 className="mb-2 text-3xl font-display font-bold text-white text-glow md:text-4xl lg:text-5xl">{project.title}</h1>
            <p className="max-w-2xl text-emerald-100/70">{project.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
          <Card className="p-4 bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
            <CardContent className="flex items-center gap-3"><Users className="w-5 h-5 text-omni" /><div><p className="text-sm text-emerald-100/50">Team Size</p><p className="font-semibold text-white">{project.team}</p></div></CardContent>
          </Card>
          <Card className="p-4 bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
            <CardContent className="flex items-center gap-3"><Clock className="w-5 h-5 text-omni" /><div><p className="text-sm text-emerald-100/50">Duration</p><p className="font-semibold text-white">{project.duration}</p></div></CardContent>
          </Card>
          <Card className="p-4 bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
            <CardContent className="flex items-center gap-3"><Star className="w-5 h-5 text-omni" /><div><p className="text-sm text-emerald-100/50">Status</p><p className="font-semibold text-white">{project.status}</p></div></CardContent>
          </Card>
          <Card className="p-4 bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
            <CardContent className="flex items-center gap-3"><Calendar className="w-5 h-5 text-omni" /><div><p className="text-sm text-emerald-100/50">Last Update</p><p className="font-semibold text-white">{new Date(project.lastUpdate).toLocaleDateString()}</p></div></CardContent>
          </Card>
        </div>

        <div className="flex gap-4 mt-8 border-b border-omni/15">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={"px-4 py-2 -mb-px transition-colors font-display " + (activeTab === tab.id ? "border-b-2 border-omni text-omni" : "text-emerald-100/50 hover:text-omni")}>{tab.label}</button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-display font-bold text-white">Project Overview</h2>
                <p className="text-emerald-100/60">{project.longDescription}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-display font-semibold text-omni">Screenshots</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {project.screenshots.map((screenshot, index) => (
                    <img key={index} src={screenshot} alt={"Screenshot " + (index + 1)} className="object-cover w-full h-48 rounded-lg border border-omni/20 hover:border-omni/60 cursor-pointer transition-all duration-300 hover:shadow-glow-sm" onClick={() => setCurrentImageIndex(index)} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="mb-6 text-2xl font-display font-bold text-white">Key Features</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.features.map((feature, index) => (
                  <Card key={index} className="p-4 bg-black/50 border border-omni/20 hover:border-omni/50 hover:shadow-glow-sm transition-all duration-300">
                    <CardContent className="flex items-start gap-3"><MessageCircle className="w-5 h-5 mt-1 text-omni shrink-0" /><p className="text-emerald-100/70">{feature}</p></CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'technical' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-display font-bold text-white">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full border border-omni/25 text-omni/90 bg-omni/5">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="neon-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display"><Globe className="w-5 h-5" /><span>Visit Live Site</span></a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display bg-black/60 border border-omni/25 text-emerald-100/80 hover:border-omni hover:text-omni transition-all duration-300"><Github className="w-5 h-5" /><span>View Source Code</span></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
