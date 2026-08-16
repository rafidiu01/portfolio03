import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Modal from './Modal';

const posts = [
  {
    title: "Smart Task Management App (iOS)",
    date: "2025-03-10",
    excerpt: "Built a Swift iOS app with MVVM architecture, Firebase integration, and real-time task sync.",
    content: "Developed a full-featured task management iOS application using Swift and MVVM. Integrated Firebase Authentication and Firestore for cloud data storage. Implemented real-time task creation, updates, and deletions. Ensured smooth UX, responsive UI, and maintainable architecture for scalable development."
  },
  {
    title: "API-Based iOS Application",
    date: "2025-02-20",
    excerpt: "Consumed public REST APIs using URLSession with async/await, error handling, and pagination.",
    content: "Created an iOS app that consumes multiple public REST APIs using Swift's URLSession and async/await. Implemented JSON parsing, proper error handling, loading states, and pagination for large datasets. Focused on performance, reliability, and clean Swift coding standards."
  },
  {
    title: "iOS Backend with Vapor",
    date: "2025-01-30",
    excerpt: "Designed and built RESTful APIs in Swift using Vapor, integrated PostgreSQL, and implemented authentication & CRUD endpoints.",
    content: "Developed a backend using Swift and the Vapor framework to support iOS applications. Implemented PostgreSQL database integration, designed authentication endpoints, and built CRUD operations. Focused on efficiency, secure data handling, and seamless iOS integration."
  },
  {
    title: "Why I Chose iOS Development",
    date: "2024-11-15",
    excerpt: "A funny story about the infamous 'I Am Rich' app that inspired me to start building apps.",
    content: "Back in 2008, when the App Store was new, a developer released an app called 'I Am Rich.' It did absolutely nothing — just a glowing red gem on the screen. And it cost $999.99, the maximum Apple allowed! Surprisingly, eight people actually bought it, and the developer made over $5,000 in one night. Apple removed it the next day for violating guidelines.\n\nWhen I first heard this story in 2024, it made me smile. That was the moment I thought: I want to build apps too. Not joke apps like that, but real ones that help people. This story taught me that even a simple idea can make an impact and that the App Store is full of opportunities if you're bold, creative, and quick to act."
  }
];

const PostCard = ({ title, date, excerpt, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card className="w-full h-full border border-omni/20 bg-black/50 hover:border-omni/60 hover:shadow-glow transition-all duration-300">
        <CardHeader className="border-b border-omni/15">
          <CardTitle className="text-xl font-display font-bold text-omni">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4 text-sm text-emerald-100/40 font-mono">{date}</div>
          <p className="mb-4 text-emerald-100/70">{excerpt}</p>
          <button onClick={openModal} className="text-omni hover:text-omni-bright transition-colors font-display font-semibold">Read more →</button>
        </CardContent>
      </Card>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-display font-bold text-omni">{title}</h2>
            <div className="mb-4 text-sm text-emerald-100/40 font-mono">{date}</div>
            <p className="text-emerald-100/70 whitespace-pre-line">{content}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

const Blog = () => {
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="relative min-h-screen p-6 bg-black grid-bg">
      <div className="relative max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-black/40 text-omni/90">
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Data Log
          </div>
          <h1 className="mb-4 text-4xl font-display font-bold text-white text-glow">My iOS Blog</h1>
          <p className="text-emerald-100/60">Sharing my iOS projects, backend work, and what inspires me</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: idx * 0.08 }}>
              <PostCard title={post.title} date={post.date} excerpt={post.excerpt} content={post.content} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
