import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Trophy, Heart } from "lucide-react";

const stats = [
  { number: "7+", label: "Hackathons", icon: Trophy },
  { number: "20+", label: "NSS Hours", icon: Heart },
  { number: "7+", label: "Projects", icon: Code2 },
];

const codeLines = [
  "def solve_algorithm(): return optimized_solution()",
  "while (learning) { skills++; }",
  "import passion from 'computer_science';",
  'System.out.println("Building the future");',
  'git commit -m "Another step forward"',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Code Animation Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl glass-card overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/20 via-mint/20 to-soft-blue/20" />
              
              {/* Animated center pulse */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(270 60% 75% / 0.4), transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Code lines animation */}
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="absolute font-mono text-sm text-primary/60 whitespace-nowrap"
                  style={{ top: `${15 + index * 17}%` }}
                  initial={{ x: "-100%" }}
                  animate={isInView ? {
                    x: ["100%", "-100%"],
                  } : {}}
                  transition={{
                    duration: 15,
                    delay: index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {line}
                </motion.div>
              ))}

              {/* Floating icons */}
              <motion.div
                className="absolute top-10 right-10 text-4xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🐍
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-10 text-4xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ☕
              </motion.div>
              <motion.div
                className="absolute top-1/2 right-16 text-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block text-sm font-semibold text-soft-pink uppercase tracking-widest mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl lg:text-5xl font-bold mb-8"
            >
              Passionate About{" "}
              <span className="gradient-text">Technology & Innovation</span>
            </motion.h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                I'm an{" "}
                <span className="text-primary font-semibold">
                  enthusiastic Computer Science student
                </span>{" "}
                with a growing interest in cybersecurity and computer networks,
                alongside a strong foundation in algorithms, data structures, and
                software development.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                My journey involves{" "}
                <span className="text-primary font-semibold">problem-solving</span>,
                learning cutting-edge technologies, and collaborating on impactful
                projects. I've contributed{" "}
                <span className="text-primary font-semibold">20+ volunteer hours</span>{" "}
                through the National Service Scheme (NSS), gaining valuable teamwork
                and leadership experience.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl glass-card hover-lift cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
