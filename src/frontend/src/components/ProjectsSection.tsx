import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { ExternalLink, Zap } from "lucide-react";
import { motion } from "motion/react";

const projects: Project[] = [
  {
    id: 1,
    title: "AI Health Chatbot",
    year: 2026,
    tag: "Live Project",
    description: [
      "Built a full-stack chatbot using React.js, Node.js, and REST APIs.",
      "Integrated external APIs for real-time responses.",
      "Designed backend logic for structured data handling.",
      "Deployed on Railway with environment setup.",
    ],
    techStack: ["React.js", "Node.js", "REST APIs"],
    link: "#",
  },
  {
    id: 2,
    title: "Privacy-Preserving Browser",
    year: 2026,
    description: [
      "Developed a fully responsive UI using React.js.",
      "Focused on modular and clean component design.",
    ],
    techStack: ["React.js"],
    link: "#",
  },
  {
    id: 3,
    title: "BTechBuddy",
    year: 2025,
    description: [
      "Built educational platform using React.js and REST APIs.",
      "Improved performance with lazy loading and code splitting.",
    ],
    techStack: ["React.js", "REST APIs"],
    link: "#",
  },
];

// Project icon per ID
const projectIcons: Record<number, string> = {
  1: "🤖",
  2: "🔒",
  3: "📚",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:shadow-hover hover:-translate-y-1.5 transition-smooth group relative overflow-hidden"
      data-ocid={`projects.item.${index + 1}`}
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-accent/[0.05] pointer-events-none" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-muted/70 flex items-center justify-center text-2xl leading-none group-hover:bg-accent/10 transition-colors duration-200 flex-shrink-0">
            {projectIcons[project.id] ?? "💻"}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-muted-foreground font-mono font-medium">
                {project.year}
              </span>
              {project.tag && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/12 border border-accent/25 text-accent text-[11px] font-semibold">
                  <Zap className="w-2.5 h-2.5" />
                  {project.tag}
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-foreground text-base leading-tight group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Description bullets */}
      <ul className="space-y-2.5 mb-5 flex-1">
        {project.description.map((desc) => (
          <li
            key={desc}
            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
            {desc}
          </li>
        ))}
      </ul>

      {/* Tech stack chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-xs font-semibold text-muted-foreground border-border px-2.5 py-0.5"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* View button */}
      <Button
        variant="outline"
        size="sm"
        className="w-full border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent font-semibold transition-smooth"
        data-ocid={`projects.view_button.${project.id}`}
      >
        View Project
        <ExternalLink className="ml-2 w-3.5 h-3.5" />
      </Button>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28 bg-muted/30 border-y border-border"
      data-ocid="projects.section"
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
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-[2.8rem] font-bold text-foreground mb-4">
            Work I&apos;m Proud Of
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A selection of projects built with care, attention to detail, and a
            focus on user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
