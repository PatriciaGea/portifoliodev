"use client";

import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/portfolio-data";

const socialColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

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
        background: "#1E293B",
        borderTop: "3px solid #1E293B",
        padding: "48px 24px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div aria-hidden="true" style={{ position: "absolute", top: -30, right: 80, width: 80, height: 80, borderRadius: "50%", background: "#8B5CF6", opacity: 0.15, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: -20, left: 60, width: 60, height: 60, borderRadius: "50%", background: "#F472B6", opacity: 0.15, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: 20, left: "50%", width: 0, height: 0, borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderBottom: "24px solid #FBBF24", opacity: 0.2, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24, marginBottom: 32 }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Go to top"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#fff", letterSpacing: "-0.02em" }}>
              {siteConfig.displayName}
              <span style={{ color: "#8B5CF6" }}>.</span>
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
                    background: `${color}18`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff",
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
        <div style={{ height: 2, background: "linear-gradient(90deg, #8B5CF6, #F472B6, #FBBF24, #34D399)", borderRadius: 2, marginBottom: 24, opacity: 0.4 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.8rem", color: "#94A3B8" }}>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.8rem", color: "#94A3B8" }}>
            Made with Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}