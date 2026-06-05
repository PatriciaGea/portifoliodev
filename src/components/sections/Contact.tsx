"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageSquare, User, Send, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/portfolio-data";

const infoCards = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "#8B5CF6" },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined, color: "#F472B6" },
  { icon: Github, label: "GitHub", value: "github.com/PatriciaGea", href: siteConfig.github, color: "#FBBF24" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/patriciageadev", href: siteConfig.linkedin, color: "#34D399" },
];

const socialIconByType = { github: Github, linkedin: Linkedin, email: Mail, website: Globe } as const;
const mainSocialLinks = socialLinks.filter((s) => ["github", "linkedin", "email"].includes(s.type));

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleBlur = (field: keyof FormState) => setTouched((prev) => ({ ...prev, [field]: true }));
  const isValid =
    form.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length >= 10;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");
    setErrorMessage(null);
    // Check EmailJS env variables before attempting send
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      setStatus("error");
      setErrorMessage("Email service is not configured. Missing environment variables.");
      console.error("Missing EmailJS environment variables.");
      return;
    }
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    } catch (err) {
      // Capture and show error
      setStatus("error");
      const message = (err && (err as any).message) || "Unexpected error sending message.";
      setErrorMessage(message);
      console.error("EmailJS send error:", err);
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "#F1F5F9" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label">05 — Contact</p>
          <h2 className="section-title">Let&apos;s <span className="section-title-accent">work together</span></h2>
          <div className="divider" style={{ margin: "16px auto" }} />
          <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", color: "#64748B", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Do you have a project in mind? Feel free to reach out. I look forward to hearing from you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 32, alignItems: "start" }}>
          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {infoCards.map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", background: "#fff", border: "2px solid #1E293B", borderRadius: 14, boxShadow: `4px 4px 0px ${color}`, transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s", cursor: href ? "pointer" : "default" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0px ${color}`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = `4px 4px 0px ${color}`; }}
                onClick={() => href && window.open(href, "_blank", "noopener,noreferrer")}
              >
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: `${color}18`, border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} strokeWidth={2.5} style={{ color }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#1E293B" }}>{value}</p>
                </div>
              </div>
            ))}

            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              {mainSocialLinks.map(({ label, href, type }) => {
                const IconEl = socialIconByType[type as keyof typeof socialIconByType] ?? Globe;
                return (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-chip">
                    <IconEl size={16} strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form card */}
          <div style={{ background: "#fff", border: "2px solid #1E293B", borderRadius: 20, boxShadow: "6px 6px 0px #8B5CF6", padding: "32px 28px" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#34D39918", border: "2px solid #34D399", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Send size={24} strokeWidth={2.5} style={{ color: "#34D399" }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: 8, color: "#1E293B" }}>Message sent!</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", color: "#64748B", fontSize: "0.9rem" }}>I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label htmlFor="c-name" className="field-label"><User size={10} strokeWidth={2.5} style={{ display: "inline", marginRight: 4 }} />Name</label>
                  <input id="c-name" name="name" type="text" value={form.name} onChange={handleChange} onBlur={() => handleBlur("name")} placeholder="Your name" required minLength={2} className="field-input" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="c-email" className="field-label"><Mail size={10} strokeWidth={2.5} style={{ display: "inline", marginRight: 4 }} />Email</label>
                  <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={() => handleBlur("email")} placeholder="you@example.com" required className="field-input" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="c-msg" className="field-label"><MessageSquare size={10} strokeWidth={2.5} style={{ display: "inline", marginRight: 4 }} />Message</label>
                  <textarea id="c-msg" name="message" value={form.message} onChange={handleChange} onBlur={() => handleBlur("message")} placeholder="Tell me about your project..." required minLength={10} rows={5} className="field-input" style={{ resize: "vertical", minHeight: 120 }} />
                </div>
                {status === "error" && (
                  <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.82rem", color: "#EF4444", padding: "10px 14px", background: "#FEF2F2", border: "2px solid #FCA5A5", borderRadius: 8 }}>
                    <p style={{ margin: 0, fontWeight: 700 }}>Something went wrong. Please try again.</p>
                    {errorMessage && <p style={{ margin: "6px 0 0", fontSize: "0.78rem", color: "#B91C1C" }}>{errorMessage}</p>}
                  </div>
                )}
                <button type="submit" disabled={!isValid || status === "sending"} className="btn-primary" style={{ opacity: !isValid || status === "sending" ? 0.6 : 1, cursor: !isValid || status === "sending" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  {status === "sending" ? "Sending…" : <><Send size={15} strokeWidth={2.5} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}