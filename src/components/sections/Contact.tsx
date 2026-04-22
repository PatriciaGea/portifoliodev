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
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const providerMessage =
        typeof err === "object" && err !== null && "text" in err
          ? String((err as { text?: string }).text)
          : "";

      setError(
        providerMessage
          ? `Could not send your message: ${providerMessage}`
          : "Could not send your message right now. Please try again.",
      );
      console.error("EmailJS send error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading-block" style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Let&apos;s <span className="section-title-accent">Work Together</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto" }} />
          <p style={{ color: "var(--color-text-muted)", maxWidth: 500, margin: "0 auto" }}>
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
            <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>Get in touch</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: 32, lineHeight: 1.7 }}>
              Whether it&apos;s an internship, a project, or just a coffee chat — feel free to reach out through any of the channels below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {contactInfo.map(({ type, label, href }) => {
                const Icon = contactIconByType[type];

                return (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}>
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.9rem", color: "var(--color-text-muted)",
                        textDecoration: "none", transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")}
                    >
                      {label}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{label}</span>
                  )}
                  </div>
                );
              })}
            </div>

            {/* Socials */}
            <div>
              <p style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--color-text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Find me on
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {socialLinks.filter(({ href }) => !href.includes("instagram.com")).map(({ type, href, label }) => {
                  const Icon = socialIconByType[type];
                  if (!Icon) return null;

                  return (
                    <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      color: "var(--color-text-muted)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--primary)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={17} />
                  </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="card" style={{ padding: "36px 32px" }}>
            <p className="sr-only" role="status" aria-live="polite">
              {loading ? "Sending message" : sent ? "Message sent" : error ? error : ""}
            </p>

            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <CheckCircle size={48} style={{ color: "#22c55e", margin: "0 auto 16px" }} />
                <h3 style={{ marginBottom: 8 }}>Message sent!</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
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
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {error ? (
                  <p role="alert" style={{ fontSize: "0.82rem", color: "#ef4444" }}>
                    {error}
                  </p>
                ) : null}
                <div className="contact-form-row">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} style={{ display: "block", fontSize: "0.78rem", color: "var(--color-text-faint)", fontFamily: "monospace", letterSpacing: "0.08em", marginBottom: 8 }}>
                        {label} *
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        autoComplete={id === "name" ? "name" : "email"}
                        placeholder={placeholder}
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        style={{
                          width: "100%", padding: "12px 16px",
                          borderRadius: 10, border: "1.5px solid var(--color-border)",
                          background: "var(--color-bg)",
                          color: "var(--color-text)",
                          fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem",
                          outline: "none", transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: "block", fontSize: "0.78rem", color: "var(--color-text-faint)", fontFamily: "monospace", letterSpacing: "0.08em", marginBottom: 8 }}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    autoComplete="off"
                    placeholder="What&apos;s it about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 16px",
                      borderRadius: 10, border: "1.5px solid var(--color-border)",
                      background: "var(--color-bg)",
                      color: "var(--color-text)",
                      fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem",
                      outline: "none", transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: "0.78rem", color: "var(--color-text-faint)", fontFamily: "monospace", letterSpacing: "0.08em", marginBottom: 8 }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    autoComplete="off"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 16px",
                      borderRadius: 10, border: "1.5px solid var(--color-border)",
                      background: "var(--color-bg)",
                      color: "var(--color-text)",
                      fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem",
                      outline: "none", transition: "border-color 0.2s",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    justifyContent: "center",
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "wait" : "pointer",
                  }}
                >
                  {loading ? (
                    <>Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
