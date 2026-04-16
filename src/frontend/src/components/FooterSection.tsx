import { Linkedin } from "lucide-react";

const year = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";

const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

export function FooterSection() {
  return (
    <footer
      className="bg-card border-t border-border"
      data-ocid="footer.section"
    >
      {/* Top divider — thin accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand block */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-foreground text-lg tracking-tight">
              Poonam Thakur
            </p>
            <p className="text-muted-foreground text-sm mt-0.5">
              Web &amp; Application Developer · AI Enthusiast
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-muted/60 hover:bg-accent/10 border border-border hover:border-accent/30 flex items-center justify-center text-muted-foreground hover:text-accent transition-smooth"
              aria-label="LinkedIn profile"
              data-ocid="footer.linkedin_link"
            >
              <Linkedin size={15} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              &copy; {year} Poonam Thakur. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-0.5">
              Built with love using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4 transition-colors duration-200 font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
