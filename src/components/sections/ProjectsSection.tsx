import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Study Group Finder System",
    category: "Algorithm Design",
    description: "Enhanced peer learning through intelligent group formation, automated reshuffling, and AI-assisted collaboration.",
    tags: ["Python", "Data Structures", "Algorithms"],
    icon: "👥",
    gradient: "from-lavender to-soft-pink",
  },
  {
    title: "Embedded Game Console",
    category: "Embedded Systems",
    description: "Developed a basic gaming console featuring ADC-based joystick control, SysTick timing, and custom games.",
    tags: ["STM32F401", "C", "Bare-Metal"],
    icon: "🎮",
    gradient: "from-peach to-soft-pink",
  },
  {
    title: "Accident Detection System",
    category: "AI & Computer Vision",
    description: "Developing a system to detect accidents using image processing techniques and real-time data analysis.",
    tags: ["Python", "OpenCV", "ML"],
    icon: "🚗",
    gradient: "from-mint to-soft-blue",
  },
  {
    title: "CI Model Training",
    category: "Machine Learning",
    description: "Trained a hybrid neural architecture combining Fuzzy Logic, GRU, and 1D CNN to enhance decision-making under uncertainty.",
    tags: ["Python", "Fuzzy-GRU", "CNN", "AI"],
    icon: "🧠",
    gradient: "from-lavender to-soft-blue",
  },
  {
    title: "Hybrid Cryptography Simulation",
    category: "Cybersecurity",
    description: "Developed a hybrid encryption demo integrating RSA and AES algorithms for secure data transmission.",
    tags: ["Python", "RSA", "AES", "Cryptography"],
    icon: "🔐",
    gradient: "from-soft-pink to-lavender",
  },
  {
    title: "WordForge Game",
    category: "Web Development",
    description: "Interactive game website with an animal companion that follows the mouse and keyword-triggered effects.",
    tags: ["JavaScript", "HTML/CSS", "AI"],
    icon: "🎨",
    gradient: "from-peach to-mint",
  },
  {
    title: "Thermal Fruit Dataset",
    category: "Image Processing",
    description: "Uploaded a custom thermal fruit dataset to Figshare for research. Currently working on accurate fruit classification.",
    tags: ["Python", "Computer Vision", "Dataset"],
    icon: "🍎",
    gradient: "from-soft-blue to-peach",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="relative rounded-3xl glass-card overflow-hidden cursor-pointer"
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image/Icon Area */}
        <div className={`h-56 relative bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Icon */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl opacity-70"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {project.icon}
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-foreground/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-full bg-card"
            >
              <ExternalLink className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-xs font-semibold text-soft-pink uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-soft-pink uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
