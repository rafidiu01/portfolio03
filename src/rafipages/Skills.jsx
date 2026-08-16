import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const skills = {
  ios: [
    { name: "Swift", icon: "https://skillicons.dev/icons?i=swift" },
    { name: "SwiftUI", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/61a777f7ecdb64fe2cd15f6716aab4e30f9e9796/ph-assignment/portfolio/icons8-swiftui%20(1).svg" },
    { name: "UIKit", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/icons8-uikit-48.png?raw=true" },
    { name: "MVVM", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/mvvm.png?raw=true" },
    { name: "REST APIs & JSON", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/json.png?raw=true" },
    { name: "URLSession", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/URLSession.svg" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "Core Data", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/core-data.jpeg?raw=true" },
    { name: "Swift Concurrency", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/Swift%20Concurrency.png?raw=true" },
    { name: "Debugging", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/App%20Lifecycle%20&%20Debugging.webp?raw=true" },
    { name: "Auto Layout", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/27fa59a6a9219d084ade363676a72de01884bb12/ph-assignment/portfolio/SwiftUI%20Layout%20System.svg" },
    { name: "CocoaPods", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/CocoaPods.png?raw=true" },
    { name: "SPM", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/spm.png?raw=true" },
    { name: "Combine", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/combine.png?raw=true" }
  ],
  backend: [
    { name: "Vapor", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/Vapor.png?raw=true" },
    { name: "REST API Design", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/rest%20api.png?raw=true" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" }
  ],
  programming_languages: [
    { name: "Swift", icon: "https://skillicons.dev/icons?i=swift" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "SQL", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/SQL%20Developer.svg" }
  ],
  tools: [
    { name: "Xcode", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/Xcode.svg" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "TestFlight", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/TestFlight.jpeg?raw=true" },
    { name: "App Store Connect", icon: "https://raw.githubusercontent.com/hasanrafi1122/photos/02e0a3ac3a46be42f62721f9058961e1465386dc/ph-assignment/portfolio/icons8-app-store.svg" }
  ],
  foundations: [
    { name: "Data Structures & Algorithms", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/dsa.png?raw=true" },
    { name: "OOP", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/oop.png?raw=true" },
    { name: "Problem Solving", icon: "https://github.com/hasanrafi1122/photos/blob/main/ph-assignment/portfolio/Problem%20Solving.png?raw=true" }
  ]
};

const CategoryCard = ({ title, skillList }) => (
  <Card className="w-full border border-omni/20 bg-black/50 backdrop-blur-sm hover:border-omni/60 hover:shadow-glow transition-all duration-300">
    <CardHeader className="border-b border-omni/15">
      <CardTitle className="text-xl font-display font-bold text-omni tracking-wide">{title.replace("_", " ").toUpperCase()}</CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {skillList.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center text-center transition-all duration-300 rounded-xl hover:bg-omni/5 p-2 group">
            <div className="w-14 h-14 mb-2 transition-transform duration-300 rounded-lg bg-black/60 border border-omni/20 flex items-center justify-center group-hover:scale-110 group-hover:border-omni/60 group-hover:shadow-glow-sm">
              <img src={skill.icon} alt={skill.name} className="object-contain w-10 h-10" />
            </div>
            <span className="text-sm font-medium text-emerald-100/70">{skill.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="relative min-h-screen p-6 bg-black grid-bg">
      <div className="relative max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-black/40 text-omni/90">
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Skill Matrix
          </div>
          <h1 className="mb-3 text-4xl font-display font-bold text-white text-glow">My Tech Skills</h1>
          <p className="text-emerald-100/60">Exploring the tools and technologies that power my development journey</p>
        </motion.div>

        <div className="grid gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
            <CategoryCard title="iOS Development" skillList={skills.ios} />
          </motion.div>
          {Object.entries(skills).filter(([cat]) => cat !== 'ios').map(([category, skillList]) => (
            <motion.div key={category} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
              <CategoryCard title={category} skillList={skillList} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
