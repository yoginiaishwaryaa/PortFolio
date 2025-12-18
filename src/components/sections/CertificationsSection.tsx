import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "Prompt Engineering Certificate",
    icon: "🎓",
  },
  {
    title: "Introduction to Generative AI",
    icon: "🤖",
  },
  {
    title: "Hackathon Champion",
    issuer: "2 First Place Wins • 2 Finalist Positions",
    icon: "🏆",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-soft-pink uppercase tracking-widest mb-4">
            Achievements
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                className="relative p-8 rounded-3xl glass-card text-center cursor-pointer overflow-hidden"
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, hsl(270 60% 75% / 0.1), hsl(320 50% 80% / 0.1))",
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-5xl relative z-10"
                  style={{ background: "var(--gradient-primary)" }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {cert.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 relative z-10">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-medium relative z-10">
                  {cert.issuer}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/5 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-soft-pink/10 group-hover:scale-150 transition-transform duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
