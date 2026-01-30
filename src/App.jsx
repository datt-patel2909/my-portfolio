import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- DATA ---------------- */

const skills = [
  { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "Canva", "Docker"] },
];

const projects = [
  {
    title: "Todo List",
    images: ["/src/assets/projects/todo/todo.png"],
    description:
      "A task management application supporting CRUD operations with a clean backend structure.",
    tech: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/datt-patel2909/todo",
    demo: "https://github.com/datt-patel2909/todo",
  },
  {
    title: "Job Tracker",
    images: [
      "/src/assets/projects/job-tracker/job1.png",
      "/src/assets/projects/job-tracker/job2.png",
      "/src/assets/projects/job-tracker/job3.png",
    ],
    description:
      "A job application tracking system to manage applications, statuses, and deadlines efficiently.",
    tech: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/datt-patel2909/Job-Tracker",
    demo: "https://job-tracker-auwa.onrender.com/",
  },
  {
    title: "E-commerce NexKart",
    images: [
      "/src/assets/projects/E-commerce nexkart/nexkart1.png",
      "/src/assets/projects/E-commerce nexkart/nexkart2.png",
      "/src/assets/projects/E-commerce nexkart/nexkart3.png",
      "/src/assets/projects/E-commerce nexkart/nexkart4.png",
    ],
    description:
      "An e-commerce platform featuring product listings, cart management, and order workflows.",
    tech: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/datt-patel2909/e-commerce-NexKart-",
    demo: "https://nexkart.onrender.com/",
  },
];

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % project.images.length),
      3000
    );
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden
      shadow-lg hover:shadow-cyan-500/30 transition"
    >
      <div className="h-44 sm:h-48 bg-black relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={project.images[index]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-contain p-3"
          />
        </AnimatePresence>
      </div>

      <div className="p-5 space-y-4">
        <h4 className="text-lg sm:text-xl font-semibold">{project.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full
              bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            className="text-sm px-4 py-2 border border-gray-600 rounded-lg
            text-center hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="text-sm px-4 py-2 bg-cyan-500 text-black rounded-lg
            text-center hover:bg-cyan-400 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- SKILL CARD ---------------- */

function SkillCard({ category, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6
      shadow-md hover:shadow-cyan-500/30 transition"
    >
      <h4 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
        {category}
      </h4>
      <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
        {items.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ---------------- MAIN APP ---------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* FLOATING RESUME */}
      <motion.a
        href="/Datt_Patel_Resume.pdf"
        download
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        bg-cyan-500 text-black px-4 py-3 sm:px-5 sm:py-3
        rounded-full text-sm sm:text-base font-semibold shadow-lg"
      >
        📄 Resume
      </motion.a>

      {/* NAVBAR */}
      <nav className="px-4 sm:px-10 py-4 sm:py-6 sticky top-0 z-40
      bg-black/70 backdrop-blur-md border-b border-gray-800">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-cyan-400 text-center sm:text-left">
            Datt Patel
          </h1>

          <div className="flex justify-center sm:justify-end gap-6 text-gray-300 text-sm sm:text-base">
            <a href="#skills" className="suggest hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-[75vh] sm:h-[85vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Hi, I’m <span className="text-cyan-400">Datt Patel</span>
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-md sm:max-w-xl text-sm sm:text-lg">
          Backend Developer • DevOps Enthusiast • Problem Solver
        </p>

        <motion.a
          href="/Datt Patel.pdf"
          download
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-cyan-500
          text-black rounded-xl font-semibold hover:bg-cyan-400 transition"
        >
          Download Resume
        </motion.a>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-10 text-center">
          Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.category} {...skill} />
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-10 text-center">
          Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20 border-t border-gray-800 px-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h3>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          Email: dattpatel0929@gmail.com
        </p>
        <div className="flex justify-center gap-8 text-sm sm:text-lg">
          <a href="https://github.com/datt-patel2909" target="_blank" className="hover:text-cyan-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/datt-patel-934353285" target="_blank" className="hover:text-cyan-400 transition">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}
