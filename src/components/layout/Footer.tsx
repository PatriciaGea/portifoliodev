"use client";

import { Github, Linkedin, Mail, Globe, ArrowUp } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/portfolio-data";

const iconByType = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  website: Globe,
} as const;

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--color-border)",
      padding: "48px 0 32px",
      background: "var(--color-bg-alt)",
    }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24, marginBottom: 32 }}>
          <div>
            <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 800, fontSize: "1.2rem", marginBottom: 6 }}>
              patrícia<span className="gradient-text">gea</span>
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {socialLinks.map(({ type, href, label }) => {
              const Icon = iconByType[type];

              return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 42, height: 42, borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  color: "var(--color-text-muted)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
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
                <Icon size={16} />
              </a>
              );
            })}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: 24,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}>
          <p style={{ fontSize: "0.8rem", color: "var(--color-text-faint)" }}>
            © {siteConfig.name} · Built with Next.js & TypeScript
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: "0.8rem", color: "var(--color-text-faint)",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
