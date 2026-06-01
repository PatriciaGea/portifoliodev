"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Globe, Send, CheckCircle } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/portfolio-data";

const contactIconByType = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  website: Globe,
} as const;

const socialIconByType = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  website: Globe,
} as const;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 0",
  border: "none",
  borderBottom: "2px solid #000",
  background: "transparent",
  color: "#000",
  fontFamily: "'Source Serif 4', Georgia, serif",
  fontSize: "0.95rem",
  outline: "none",
  transition: "border-bottom-width 0.1s",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("Contact form is not configured yet. Please try again later.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const providerMessage =
        typeof err === "object" && err !== null && "text" in err
          ? String((err as { text?: string }).text)
          : "";
      setError(providerMessage ? `Could not send: ${providerMessage}` : "Could not send your message. Please try again.");
      console.error("EmailJS send error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading-block" style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#525252", marginBottom: 10 }}>
            04 — Contact
          </p>
          <h2 className="section-title">
            Let&apos;s <span className="section-title-accent">Work Together</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto" }} />
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#525252", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            I&apos;m currently seeking an internship opportunity. If you have a project in mind or want to chat, I&apos;d love to hear from you.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48,
          alignItems: "start",
        }}>
          {/* Left: info */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", marginBottom: 8, color: "#000" }}>
              Get in touch
            </h3>
            <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#525252", fontSize: "0.9rem", marginBottom: 32, lineHeight: 1.7 }}>
              Whether it&apos;s an internship, a project, or just a coffee chat — feel free to reach out.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {contactInfo.map(({ type, label, href }) => {
                const Icon = contactIconByType[type];
                return (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 40, height: 40,
                      border: "1px solid #000",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#000", flexShrink: 0,
                    }}>
                      <Icon size={15} strokeWidth={1.5} />
                    </div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.9rem", color: "#525252", textDecoration: "none", transition: "color 0.1s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#525252")}
                      >
                        {label}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.9rem", color: "#525252" }}>{label}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Find me on
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {socialLinks.filter(({ href }) => !href.includes("instagram.com")).map(({ type, href, label }) => {
                  const Icon = socialIconByType[type];
                  if (!Icon) return null;
                  return (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      style={{
                        width: 40, height: 40,
                        border: "1px solid #000",
                        background: "transparent",
                        color: "#525252",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        textDecoration: "none", transition: "all 0.1s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "#000";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#525252";
                      }}
                    >
                      <Icon size={15} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ border: "2px solid #000", padding: "32px 28px", background: "#fff" }}>
            <p className="sr-only" role="status" aria-live="polite">
              {loading ? "Sending message" : sent ? "Message sent" : error ? error : ""}
            </p>

            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <CheckCircle size={40} style={{ color: "#000", margin: "0 auto 16px" }} strokeWidth={1.5} />
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 8, color: "#000" }}>Message sent!</h3>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#525252", fontSize: "0.9rem" }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline"
                  style={{ marginTop: 24 }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {error && (
                  <p role="alert" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#000", border: "1px solid #000", padding: "8px 12px" }}>
                    {error}
                  </p>
                )}
                <div className="contact-form-row">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name", autoComplete: "name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com", autoComplete: "email" },
                  ].map(({ id, label, type, placeholder, autoComplete }) => (
                    <div key={id}>
                      <label htmlFor={id} style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                        {label} *
                      </label>
                      <input
                        id={id} type={type} required autoComplete={autoComplete}
                        placeholder={placeholder}
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderBottomWidth = "4px")}
                        onBlur={(e) => (e.currentTarget.style.borderBottomWidth = "2px")}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    Subject
                  </label>
                  <input
                    id="subject" type="text" autoComplete="off" placeholder="What's it about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderBottomWidth = "4px")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomWidth = "2px")}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    Message *
                  </label>
                  <textarea
                    id="message" required rows={5} autoComplete="off"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomWidth = "4px")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomWidth = "2px")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ justifyContent: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
                >
                  {loading ? <>Sending...</> : <><Send size={14} strokeWidth={1.5} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
