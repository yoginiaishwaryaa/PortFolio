import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-Typewriter";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const welcomeText = useTypewriter(
    ["👋 Hello! Get to know me"],
    {
      typingSpeed: 30,        // ⚡ fast
      deletingSpeed: 16,
      delayAfterTyping: 1400,
      delayAfterDeleting: 600,
      loop: true,
    }
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
          >
            {welcomeText}
            <span className="ml-1 animate-blink">|</span>
          </motion.span>


        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text animate-gradient-shift">Yogini Aishwaryaa P T S</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-primary/80 font-medium mb-4"
        >
          Enthusiastic Computer Science student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Building innovative solutions through code, algorithms, and creative
          problem-solving
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-soft-pink text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-soft-pink to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/yoginiaishwaryaa", label: "GitHub" },
            { icon: Mail, href: "mailto:yoginianithakumar@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <br></br>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
