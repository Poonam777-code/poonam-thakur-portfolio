import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const EMAIL = "poonammthakur7@gmail.com";

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    await new Promise((res) => setTimeout(res, 900));
    setSending(false);
    toast.success("Message sent! I'll get back to you soon. 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-28 bg-background"
      data-ocid="contact.section"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold text-sm tracking-[0.22em] uppercase mb-3 block">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-[2.8rem] font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I&apos;m available for internships and freelance opportunities.
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Left column: info cards */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="md:col-span-2 space-y-5"
          >
            {/* Email card */}
            <div className="bg-card border border-border rounded-2xl p-6 group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors duration-200">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">
                Email
              </h3>
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent hover:underline underline-offset-4 text-sm font-semibold transition-colors duration-200 break-all"
                data-ocid="contact.email_link"
              >
                {EMAIL}
              </a>
            </div>

            {/* Availability card */}
            <div className="bg-card border border-border rounded-2xl p-6 group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-200">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">
                Availability
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Looking for a passionate developer who brings fresh ideas and
                strong execution? Let&apos;s connect.
              </p>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full transition-smooth shadow-subtle hover:shadow-elevated"
                onClick={() => document.getElementById("contact-name")?.focus()}
                data-ocid="contact.hire_me_button"
              >
                Hire Me
              </Button>
            </div>

            {/* Quick DM card */}
            <div className="bg-muted/50 border border-border rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">
                  Response Time
                </p>
                <p className="text-muted-foreground text-xs">
                  Usually within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                Send a Message
              </h3>
              <p className="text-muted-foreground text-sm mb-7">
                Fill in the form below and I&apos;ll respond as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-foreground"
                  >
                    Name
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-11 border-border bg-background focus-visible:border-accent transition-colors duration-200"
                    data-ocid="contact.name_input"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-11 border-border bg-background focus-visible:border-accent transition-colors duration-200"
                    data-ocid="contact.email_input"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="border-border bg-background focus-visible:border-accent transition-colors duration-200 resize-none"
                    data-ocid="contact.message_input"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base transition-smooth shadow-subtle hover:shadow-elevated disabled:opacity-60"
                  data-ocid="contact.submit_button"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
