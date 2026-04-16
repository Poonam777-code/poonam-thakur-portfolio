import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const techBadges = [
  { name: "React.js", className: "badge-react" },
  { name: "JavaScript", className: "badge-js" },
  { name: "Python", className: "badge-python" },
  { name: "Node.js", className: "badge-node" },
  { name: "HTML", className: "badge-html" },
  { name: "CSS", className: "badge-css" },
];

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16"
      data-ocid="hero.section"
    >
      {/* Hero background image — subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url('/assets/generated/hero-abstract.dim_1200x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 right-[12%] w-[560px] h-[560px] rounded-full bg-accent/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[8%] w-[420px] h-[420px] rounded-full bg-primary/[0.04] blur-[110px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.14 0.04 255) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to Internships &amp; Full-Time Roles
          </span>
        </motion.div>

        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="text-sm font-bold text-muted-foreground tracking-[0.22em] uppercase mb-5"
        >
          Web &amp; Application Developer · AI Enthusiast
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display text-[clamp(2.8rem,7.5vw,5.2rem)] font-bold text-foreground leading-[1.04] tracking-tight text-balance mb-7"
        >
          I Build High-Quality <br className="hidden sm:block" />
          Web &amp; App Experiences <br className="hidden sm:block" />
          That{" "}
          <span className="text-accent relative">
            Deliver Results
            <span
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-accent/30 block"
              aria-hidden="true"
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
        >
          Final-year BTech Computer Engineering student specializing in
          React.js, modern web technologies, and AI-driven solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-9 shadow-elevated transition-smooth hover:shadow-hover h-12 rounded-full text-base"
            onClick={() => scrollTo("#projects")}
            data-ocid="hero.view_projects_button"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-muted/60 hover:border-foreground/40 font-semibold px-9 h-12 transition-smooth rounded-full text-base"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.hire_me_button"
          >
            Hire Me
          </Button>
        </motion.div>

        {/* Tech stack label + badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs text-muted-foreground font-semibold tracking-[0.18em] uppercase">
            Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techBadges.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + i * 0.06,
                  ease: "easeOut",
                }}
              >
                <Badge
                  variant="outline"
                  className={`px-3.5 py-1.5 text-xs font-semibold border transition-smooth hover:scale-105 cursor-default ${tech.className}`}
                >
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground font-bold tracking-[0.22em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
}
