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
      borderTop: "4px solid #000",
      padding: "48px 0 32px",
      background: "#000",
      color: "#fff",
    }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24, marginBottom: 32 }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: 6, color: "#fff", letterSpacing: "-0.02em" }}>
              patrícia<span style={{ fontStyle: "italic" }}>gea</span>
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#E5E5E5", fontSize: "0.72rem", letterSpacing: "0.06em" }}>
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {socialLinks.filter(({ href }) => !href.includes("instagram.com")).map(({ type, href, label }) => {
              const Icon = iconByType[type];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 40, height: 40,
                    border: "1px solid #525252",
                    background: "transparent",
                    color: "#E5E5E5",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#525252";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#E5E5E5";
                  }}
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #525252",
          paddingTop: 24,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#E5E5E5", letterSpacing: "0.04em" }}>
            © {siteConfig.name} · Built with Next.js & TypeScript
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem", color: "#E5E5E5",
              background: "none", border: "none", cursor: "pointer",
              letterSpacing: "0.08em", textTransform: "uppercase",
              transition: "color 0.1s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#E5E5E5")}
          >
            Back to top <ArrowUp size={12} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
}
