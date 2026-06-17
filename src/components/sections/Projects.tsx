"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Filter, projects, siteConfig } from "@/lib/portfolio-data";

const filterColors: Record<string, string> = { All: "var(--accent)", Mobile: "var(--foreground)", Frontend: "var(--foreground)", Fullstack: "var(--foreground)" };
const cardShadowColors = ["var(--foreground)", "var(--foreground)", "var(--foreground)", "var(--foreground)"];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const formatFilterLabel = (value: Filter) => (value === "Fullstack" ? "Full-Stack" : value);
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="section-heading-row" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            <div>
              <p className="section-label">03 — Work</p>
              <h2 className="section-title">
                Selected <span className="section-title-accent">Projects</span>
              </h2>
              <div className="divider" style={{ margin: "16px auto 0" }} />
            </div>

            {/* Filter buttons — pill group */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8 }}>
              {(["All", "Mobile", "Frontend", "Fullstack"] as Filter[]).map((f) => {
                const color = filterColors[f] ?? "var(--accent)";
                const active = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    style={{
                      padding: "8px 20px",
                      borderRadius: 9999,
                      border: `2px solid ${color}`,
                      background: active ? color : "transparent",
                      color: active ? "var(--accent-fg)" : "var(--foreground)",
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      cursor: "pointer",
                      boxShadow: active ? "3px 3px 0px var(--foreground)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {formatFilterLabel(f)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 48 }}>
          {filtered.map((project, i) => {
            const shadowColor = cardShadowColors[i % cardShadowColors.length];
            const isMobile = project.category === "Mobile" || project.tech.some((t) => {
              const lower = t.toLowerCase();
              return lower.includes("android") || lower.includes("kotlin");
            });
            const liveHref = (project.live && project.live.trim()) ? project.live : project.image ? project.image : null;
            return (
              <article
                key={project.title}
                className="project-card"
                style={{
                  background: "var(--card)",
                  border: "2px solid var(--foreground)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: `6px 6px 0px ${shadowColor}`,
                  transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; (e.currentTarget as HTMLElement).style.boxShadow = `8px 8px 0px ${shadowColor}`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0px ${shadowColor}`; }}
              >
                {/* Image area */}
                <div style={{
                  height: 260,
                  background: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      style={{
                        objectFit: isMobile ? "contain" : "cover",
                        objectPosition: "center",
                        transform: isMobile ? "scale(0.9)" : "scale(0.96)",
                      }}
                    />
                  ) : (
                    <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--muted-foreground)" }}>
                      Preview unavailable
                    </span>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: "24px 24px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      {isMobile && (
                        <Image src="/images/android_logo.webp" alt="Android" width={40} height={40} style={{ display: "block" }} />
                      )}
                      <h3 className="project-title-accent" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "1.18rem", fontWeight: 800, margin: 0 }}>{project.title}</h3>
                    </div>
                    <span style={{
                      padding: "3px 12px",
                      borderRadius: 9999,
                      background: "var(--card)",
                      border: `2px solid ${shadowColor}`,
                      color: "var(--foreground)",
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      marginLeft: 8,
                    }}>
                      {project.category === "Fullstack" ? "Full-Stack" : project.category}
                    </span>
                  </div>

                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: 14 }}>
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "3px 10px",
                          borderRadius: 9999,
                          background: "var(--muted)",
                          border: "1px solid var(--border)",
                          fontFamily: "'Outfit', system-ui, sans-serif",
                          fontSize: "0.67rem",
                          fontWeight: 600,
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: 12, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.74rem", color: "var(--muted-foreground)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)")}
                    >
                      <Github size={13} strokeWidth={2.5} /> Code
                    </a>
                    {liveHref && (
                      <a
                        href={liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.74rem", color: "var(--muted-foreground)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)")}
                      >
                        <ExternalLink size={13} strokeWidth={2.5} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github size={16} strokeWidth={2.5} /> See all on GitHub <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}