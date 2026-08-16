import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio message from " + formData.name);
    const body = encodeURIComponent(formData.message + "\n\n---\nFrom: " + formData.name + "\nEmail: " + formData.email);
    window.location.href = "mailto:rafi2002ten@gmail.com?subject=" + subject + "&body=" + body;
  };

  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const mailHref = "https://mail.google.com/mail/?view=cm&to=rafi2002ten@gmail.com";
  const inputClass = "w-full px-4 py-3 rounded-lg bg-black/50 border border-omni/20 text-emerald-50 placeholder-emerald-100/30 focus:ring-2 focus:ring-omni/60 focus:border-omni/60 outline-none transition-all duration-300";

  return (
    <div className="min-h-screen bg-black grid-bg">
      <div className="container max-w-6xl px-4 py-20 mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-display tracking-[0.2em] uppercase rounded-full border border-omni/40 bg-black/40 text-omni/90">
            <span className="w-1.5 h-1.5 rounded-full bg-omni animate-pulse" /> Comm Channel
          </div>
          <h2 className="mb-4 text-4xl font-display font-bold text-white text-glow">Contact Me</h2>
          <p className="text-emerald-100/60">Let's connect and collaborate!</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="space-y-8">
            <div className="p-8 rounded-xl bg-black/50 border border-omni/20 hud-corners relative">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-omni/5 border border-omni/15">
                  <FaEnvelope className="text-2xl text-omni" />
                  <div>
                    <p className="text-sm text-emerald-100/50">Email</p>
                    <a href={mailHref} target="_blank" rel="noopener noreferrer" className="text-emerald-100/90 hover:text-omni transition-colors">rafi2002ten@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-omni/5 border border-omni/15">
                  <FaPhone className="text-2xl text-omni" />
                  <div>
                    <p className="text-sm text-emerald-100/50">Phone</p>
                    <a href="tel:+8801540050626" className="text-emerald-100/90 hover:text-omni transition-colors">+880 1540-050626</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-omni/5 border border-omni/15">
                  <FaWhatsapp className="text-2xl text-omni" />
                  <div>
                    <p className="text-sm text-emerald-100/50">WhatsApp</p>
                    <a href="https://wa.me/8801540050626" target="_blank" rel="noopener noreferrer" className="text-emerald-100/90 hover:text-omni transition-colors">+880 1540-050626</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-black/50 border border-omni/20">
              <h3 className="mb-6 text-xl font-display font-semibold text-white">Connect With Me</h3>
              <div className="flex justify-center gap-6">
                <a href="https://github.com/hasanRafi2002" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-black/40 border border-omni/20 hover:border-omni hover:shadow-glow-sm transition-all duration-300"><FaGithub className="text-2xl text-emerald-100/70" /></a>
                <a href="https://www.linkedin.com/in/serock01/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-black/40 border border-omni/20 hover:border-omni hover:shadow-glow-sm transition-all duration-300"><FaLinkedin className="text-2xl text-emerald-100/70" /></a>
                <a href="https://x.com/rafi_hasan_03" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-black/40 border border-omni/20 hover:border-omni hover:shadow-glow-sm transition-all duration-300"><FaTwitter className="text-2xl text-emerald-100/70" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: 0.1 }} className="p-8 rounded-xl bg-black/50 border border-omni/20 hud-corners relative">
            <h3 className="mb-6 text-2xl font-display font-semibold text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-emerald-100/60">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-emerald-100/60">Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-emerald-100/60">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className={inputClass} required></textarea>
              </div>
              <button type="submit" className="neon-btn flex items-center justify-center w-full gap-2 px-6 py-3 rounded-lg font-display font-semibold">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
