import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  {
    name: "Python",
    level: "Advanced",
    icon: "🐍",
    description: "Proficient in Python for algorithms, data structures, AI/ML projects, and automation scripts.",
    tags: ["NumPy", "Pandas", "TensorFlow"],
  },
  {
    name: "Java",
    level: "Advanced",
    icon: "☕",
    description: "Strong OOP concepts, data structures implementation, and algorithmic problem solving.",
    tags: ["OOP", "Collections", "Algorithms"],
  },
  {
    name: "C/C++",
    level: "Intermediate",
    icon: "⚡",
    description: "Embedded systems, bare-metal programming, memory management, and system-level development.",
    tags: ["STM32", "Embedded", "Pointers"],
  },
  {
    name: "Web Development",
    level: "Intermediate",
    icon: "🌐",
    description: "Building interactive websites with HTML, CSS, JavaScript, React, and Node.js.",
    tags: ["React", "Node.js", "JavaScript"],
  },
  {
    name: "Databases",
    level: "Intermediate",
    icon: "🗄️",
    description: "Experience with MySQL for data management and query optimization.",
    tags: ["MySQL", "SQL", "Queries"],
  },
  {
    name: "Tools & Tech",
    level: "Proficient",
    icon: "🔧",
    description: "MATLAB, CUDA for GPU programming, VS Code, and version control with Git.",
    tags: ["MATLAB", "CUDA", "Git"],
  },
];

const SkillCard = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-8 rounded-3xl glass-card overflow-hidden cursor-pointer"
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: "linear-gradient(135deg, hsl(270 60% 75%), hsl(320 50% 80%), hsl(200 60% 80%))",
            padding: "2px",
          }}
        />

        {/* Shimmer effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
            animate={isHovered ? { x: ["0%", "200%"] } : {}}
            transition={{ duration: 0.8, ease: "linear" }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ background: "var(--gradient-primary)" }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {skill.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
            <p className="text-sm text-primary font-medium">{skill.level}</p>
          </div>
        </div>

        {/* Progress Bar with smooth looping animation */}
        <div className="mb-6 relative z-10">
          <div className="h-3 rounded-full bg-muted overflow-hidden relative">
            <motion.div
              className="absolute h-full w-1/3 rounded-full"
              style={{ background: "var(--gradient-primary)" }}
              initial={{ left: "-33.333%" }}
              animate={{ left: ["-33.333%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 relative z-10 line-clamp-2">
          {skill.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {skill.tags.map((tag) => (
            <motion.span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-soft-pink uppercase tracking-widest mb-4">
            Technical Expertise
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
