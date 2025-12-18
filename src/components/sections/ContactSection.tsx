import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "yoginianithakumar@gmail.com",
    href: "mailto:your.email@example.com",
    icon: Mail,
    gradient: "from-lavender to-soft-pink",
  },
  {
    label: "GitHub",
    value: "github.com/yoginiaishwaryaa",
    href: "https://github.com/yoginiaishwaryaa",
    icon: Github,
    gradient: "from-mint to-soft-blue",
  },
  {
    label: "Phone",
    value: "+91 9876543210",
    href: "tel:+1234567890",
    icon: Phone,
    gradient: "from-peach to-soft-pink",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-soft-pink uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Happy to explore new projects, creative ideas, or opportunities to contribute to your vision.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <motion.div
                className="relative p-6 rounded-3xl glass-card text-center cursor-pointer overflow-hidden"
                whileHover={{ y: -10, scale: 1.03 }}
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

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${contact.gradient}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <contact.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {contact.label}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {contact.value}
                </p>

                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
