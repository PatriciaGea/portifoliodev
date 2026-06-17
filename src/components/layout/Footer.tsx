"use client";

import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/portfolio-data";

const socialColors = ["var(--foreground)", "var(--foreground)", "var(--foreground)", "var(--foreground)"];

const socialIconByType = { github: Github, linkedin: Linkedin, email: Mail, website: Globe } as const;
const mainSocialLinks = socialLinks.filter((s) => ["github", "linkedin", "email"].includes(s.type));

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--color-surface-alt)",
        borderTop: "3px solid var(--foreground)",
        padding: "48px 24px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24, marginBottom: 32 }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Go to top"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              {siteConfig.displayName}
              <span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </button>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {mainSocialLinks.map(({ label, href, type }, i) => {
              const Icon = socialIconByType[type as keyof typeof socialIconByType] ?? Globe;
              const color = socialColors[i % socialColors.length];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 44, height: 44,
                    borderRadius: "50%",
                    border: `2px solid ${color}`,
                    background: "var(--card)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--foreground)",
                    boxShadow: `3px 3px 0px ${color}`,
                    transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "rotate(10deg) scale(1.1)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `5px 5px 0px ${color}`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = ""; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `3px 3px 0px ${color}`; }}
                >
                  <Icon size={16} strokeWidth={2.5} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 2, background: "linear-gradient(90deg, var(--accent), var(--secondary), var(--tertiary))", borderRadius: 2, marginBottom: 24, opacity: 0.55 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
            Made with Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}