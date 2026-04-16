import { Code2, GraduationCap, Lightbulb, Rocket } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: GraduationCap,
    label: "BTech Computer Eng.",
    desc: "Final-year student, strong academic foundation",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Code2,
    label: "Clean Code",
    desc: "Well-structured, readable, maintainable code",
    color: "text-accent",
    bg: "bg-accent/8",
  },
  {
    icon: Lightbulb,
    label: "AI Enthusiast",
    desc: "Integrating AI into real-world applications",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Rocket,
    label: "Open to Opportunities",
    desc: "Seeking internship & full-time developer roles",
    color: "text-accent",
    bg: "bg-accent/8",
  },
];

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "4+", label: "Technologies" },
  { value: "2026", label: "Graduating" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 bg-muted/30 border-y border-border"
      data-ocid="about.section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="text-accent font-bold text-sm tracking-[0.22em] uppercase mb-3 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-[2.8rem] font-bold text-foreground leading-tight mb-6">
              Turning Ideas Into{" "}
              <span className="text-accent">Digital Reality</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Poonam Thakur is a final-year BTech Computer Engineering student
                passionate about web development and artificial intelligence.
                She focuses on building scalable, responsive, and user-friendly
                applications using modern technologies.
              </p>
              <p>
                She enjoys solving real-world problems through clean code and
                intuitive design. Currently seeking internship and full-time
                opportunities to grow as a developer and contribute to
                meaningful projects.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                "🎓 BTech Computer Engineering",
                "🤖 AI Enthusiast",
                "💼 Open to Opportunities",
                "⚛️ React Specialist",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground transition-smooth hover:border-accent/30 hover:bg-accent/5 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-card border border-border rounded-xl py-4 px-2"
                >
                  <p className="font-display font-bold text-2xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: highlight cards grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.1,
                  ease: "easeOut",
                }}
                className="bg-card border border-border rounded-2xl p-5 hover:shadow-elevated transition-smooth hover:-translate-y-1 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5 leading-snug">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
