import type { SkillGroup } from "@/types";
import { motion } from "motion/react";

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React.js", icon: "⚛️" },
    ],
  },
  {
    category: "Backend / Programming",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "Node.js", icon: "🟢" },
    ],
  },
  {
    category: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", icon: "🔧" },
      { name: "REST APIs", icon: "🔗" },
      { name: "UI/UX Design", icon: "✏️" },
      { name: "Responsive Design", icon: "📱" },
    ],
  },
];

// Proficiency levels per skill for visual indicator
const proficiency: Record<string, number> = {
  HTML: 95,
  CSS: 90,
  JavaScript: 85,
  "React.js": 88,
  Python: 78,
  Java: 72,
  "Node.js": 76,
  "Git & GitHub": 85,
  "REST APIs": 82,
  "UI/UX Design": 75,
  "Responsive Design": 88,
};

const categoryAccent: Record<string, string> = {
  Frontend: "bg-accent",
  "Backend / Programming": "bg-primary",
  "Tools & Concepts": "bg-primary/70",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 bg-background"
      data-ocid="skills.section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold text-sm tracking-[0.22em] uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-[2.8rem] font-bold text-foreground mb-4">
            What I Work With
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A focused set of technologies I use to build fast, accessible, and
            maintainable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12, ease: "easeOut" }}
              className="bg-card border border-border rounded-2xl p-7 hover:shadow-elevated transition-smooth group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
                <div
                  className={`w-1.5 h-7 rounded-full ${categoryAccent[group.category] ?? "bg-accent"}`}
                />
                <h3 className="font-display font-bold text-foreground text-base">
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {group.skills.map((skill, si) => {
                  const pct = proficiency[skill.name] ?? 80;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: gi * 0.12 + si * 0.07,
                        ease: "easeOut",
                      }}
                      data-ocid={`skills.item.${gi * 10 + si + 1}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-8 h-8 rounded-lg bg-muted/70 flex items-center justify-center text-base leading-none select-none"
                            aria-hidden="true"
                          >
                            {skill.icon}
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">
                          {pct}%
                        </span>
                      </div>
                      {/* Progress track */}
                      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${categoryAccent[group.category] ?? "bg-accent"}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: gi * 0.12 + si * 0.07 + 0.2,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
