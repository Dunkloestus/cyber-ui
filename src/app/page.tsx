"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("main");
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    { name: "Cyber UI", tech: "Next.js + TypeScript", desc: "This website's source code" },
    { name: "Floral OS", tech: "Python + OpenCV", desc: "Flower recognition system" },
  ];

  const skills = [
    { category: "TECHNOLOGY", items: ["JavaScript ,", "Next.js ,", "Python ,", "React ,", "Tailwind CSS "] },
    { category: "DESIGN", items: ["Web Design ,", "UI/UX ,", "Cyberpunk Aesthetics "] },
    { category: "OTHER", items: ["Floral Arrangement ,", "Supply Chain Management ,", "Excel 2 PDf system "] },
  ];

  const executeCommand = (cmd: string) => {
    const newHistory = [...history, `> ${cmd}`];
    switch (cmd.toLowerCase()) {
      case 'help':
        newHistory.push(
          "AVAILABLE COMMANDS:",
          "· connect [section] - Navigate to section (projects/skills/contact/blog/github)",
          "· clear - Clear console history",
          "· system_scan - Run diagnostic check",
          "· decrypt - Show hidden message",
          "· download cv - Initiate file transfer",
          "· ghost_protocol - Toggle glitch effect"
        );
        break;
      case 'connect projects':
        setActiveSection("projects");
        newHistory.push("Accessing project manifests...");
        break;
      case 'connect skills':
        setActiveSection("skills");
        newHistory.push("Loading skill matrix...");
        break;
      case 'connect contact':
        setActiveSection("contact");
        newHistory.push("Initializing secure channel...");
        break;
      case 'connect blog':
        setActiveSection("blog");
        newHistory.push("Establishing neural link to blog...");
        break;
      case 'connect github':
        setActiveSection("github");
        newHistory.push("Accessing code repository...");
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'download cv':
        newHistory.push("Initiating secure download...");
        window.open("https://drive.google.com/file/d/1A9T9_6dy6cYsjVkICzPv7e0GfgUlZ5-y/view", "_blank");
        break;
      case 'system_scan':
        newHistory.push(
          "RUNNING DIAGNOSTICS:",
          "· CPU Load: 23%",
          "· Memory Allocation: 4.2/8GB",
          "· Neural Uplink: STABLE",
          "· Security: ENCRYPTED"
        );
        break;
      case 'decrypt':
        newHistory.push("Decryption key accepted:", "Lain-OS-1995::Cyberia");
        break;
      case 'ghost_protocol':
        setIsGlitching(!isGlitching);
        newHistory.push(`Glitch protocol ${isGlitching ? "DEACTIVATED" : "ACTIVATED"}`);
        break;
      default:
        newHistory.push(`Command not recognized: ${cmd}`);
        break;
    }
    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    executeCommand(command.trim());
    setCommand("");
  };

  return (
    <div className={`w-full max-w-6xl mx-auto p-8 font-mono overflow-hidden relative z-[600] bg-black bg-opacity-90 rounded-lg shadow-2xl ${isGlitching ? 'glitch-effect' : ''}`}>
      {/* Header */}
      <div className="mb-12">
        <motion.div 
          className="glitch text-7xl mb-10 leading-tight text-center"
          data-text="DUNKLOESTUS://DIGITAL_SPACE"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          DUNKLOESTUS://DIGITAL_SPACE
        </motion.div>
        <div className="flex gap-8 text-2xl justify-center mb-12">
          {["main", "projects", "skills", "contact", "blog", "github"].map((section) => (
            <button 
              key={section}
              onClick={() => setActiveSection(section)} 
              className={`hover:text-red-400 transition-colors px-10 py-6 text-4xl ${
                activeSection === section ? 'text-red-500 underline' : ''
              }`}
            >
              {`/${section === 'main' ? 'root' : section}`}
            </button>
          ))}
        </div>
      </div>
      
      {/* Console Interface */}
      <div className="mb-16">
        {/* Command History */}
        <div className="h-96 overflow-y-auto mb-8 scrollbar-hide border-4 border-red-500/30 p-6">
          <AnimatePresence>
            {history.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-4xl mb-4 text-red-500/90 font-medium"
              >
                {entry}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <br/>
        {/* Command Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-4 text-4xl justify-center">
          <span className="text-red-500">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="bg-transparent border-b-4 border-red-500/50 focus:outline-none w-[600px] text-4xl placeholder-red-500/50 text-center"
            placeholder="type 'help' for commands"
            autoFocus
          />
        </form>
      </div>
      <br/>
      
      {/* Dynamic Content Sections */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeSection === "main" && (
            <motion.div 
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 text-5xl"
            >
              <div className="text-red-500/90">
                {'>'} Neural network interface active<br/>
                <br/>
                {'>'} Protocol version: 1.4.2.6a<br/>
                <br/>
                {currentTime && (
                  <>
                    {'>'} System time: {currentTime}<br/>
                    <br/>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {activeSection === "projects" && (
            <motion.div 
              key="projects"
              initial={{ x: 100 }} 
              animate={{ x: 0 }} 
              exit={{ x: -100 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className="border-4 border-red-500/30 p-10 hover:bg-red-500/10 transition-colors rounded-xl"
                  whileHover={{ scale: 1.09 }}
                >
                  <div className="text-red-500/90 text-4xl mb-6">{project.name}</div>
                  <div className="text-red-500/60 text-3xl">{project.tech}</div>
                  <div className="mt-8 text-red-500/80 text-2xl">{project.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              {skills.map((category, i) => (
                <motion.div
                  key={i}
                  className="border-4 border-red-500/30 p-10 hover:bg-red-500/10 transition-colors rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-red-500/90 text-4xl mb-8">[{category.category}]</div>
                  <div className="flex flex-wrap gap-6 justify-center">
                    {category.items.map((item, j) => (
                      <motion.span
                        key={j}
                        className="px-8 py-4 bg-red-500/20 text-red-500/90 text-2xl rounded-md hover:bg-red-500/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-16"
            >
              <div className="glitch text-6xl text-red-500/90" data-text="LET_S_ALL_LOVE_LAIN">
                LET_S_ALL_LOVE_LAIN
              </div>
              <motion.div
                className="text-5xl text-red-500/80 hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <a href="mailto:infoaibizmedia@gmail.com">
                  [MAILTO_ENCRYPTED://PROTONMAIL]
                </a>
              </motion.div>
              <div className="text-4xl text-red-500/60 mt-12">
                "You exist here..."<br/>
                "Present time... present place..."
              </div>
            </motion.div>
          )}

          {activeSection === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-16"
            >
              <div className="glitch text-6xl text-red-500/90" data-text="NEURAL_LOG_ARCHIVE">
                NEURAL_LOG_ARCHIVE
              </div>
              <motion.div
                className="text-6xl text-red-500/80 hover:text-red-400 transition-colors" // Changed from text-5xl
                whileHover={{ scale: 1.1 }}
              >
                <button 
                  onClick={() => window.open("https://dunkloestus.github.io", "_blank")}
                  className="border-4 border-red-500/50 px-16 py-12 rounded-xl hover:bg-red-500/20 transition-all text-4xl" // Increased padding and font size
                >
                  ACCESS_BRAIN_DUMP
                </button>
                
              </motion.div>
              <br/>
              <div className="text-4xl text-red-500/60 mt-12">
                "All the world's information will be free..."<br/>
                "Present your access code..."
              </div>
            </motion.div>
          )}

          {activeSection === "github" && (
            <motion.div
              key="github"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-16"
            >
              <div className="glitch text-6xl text-red-500/90" data-text="SOURCE_CODE_VAULT">
                SOURCE_CODE_VAULT
              </div>
              <motion.div
                className="text-6xl text-red-500/80 hover:text-red-400 transition-colors" // Changed from text-5xl
                whileHover={{ scale: 1.1 }}
              >
                <button 
                  onClick={() => window.open("https://github.com/Dunkloestus", "_blank")}
                  className="border-4 border-red-500/50 px-16 py-12 rounded-xl hover:bg-red-500/20 transition-all text-4xl" // Increased padding and font size
                >
                  INITIATE_CODE_DUMP
                </button>
                
              </motion.div>
              <br/>
              <div className="text-4xl text-red-500/60 mt-12">
                "The system is all in code..."<br/>
                "Ghosts in the machine..."
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <br/>
      
      {/* System Status */}
      <div className="border-t-4 border-red-500/30 mt-16 py-6 text-red-500/70 text-2xl flex justify-between">
        <span>STATUS: {isGlitching ? "[GLITCH_ACTIVE]" : "[NOMINAL]"}</span>
        <span>v1.4.2 CYBER_UI</span>
        <span>CONNECTION: {activeSection === 'contact' ? "ENCRYPTED" : "SECURE"}</span>
      </div>
    </div>
  );
}