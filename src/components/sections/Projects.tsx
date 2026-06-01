"use client";

import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Filter, projects, siteConfig } from "@/lib/portfolio-data";

const filterColors: Record<string, string> = { All: "#8B5CF6", Frontend: "#F472B6", Fullstack: "#34D399" };
const cardShadowColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const formatFilterLabel = (value: Filter) => (value === "Fullstack" ? "Full-Stack" : value);
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: "#FFFDF5" }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div className="section-heading-row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <div>
              <p className="section-label">03 — Work</p>
              <h2 className="section-title">
                Selected <span className="section-title-accent">Projects</span>
              </h2>
            </div>

            {/* Filter buttons — pill group */}
            <div style={{ display: "flex", gap: 8 }}>
              {(["All", "Frontend", "Fullstack"] as Filter[]).map((f) => {
                const color = filterColors[f] ?? "#8B5CF6";
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
                      color: active ? "#fff" : "#1E293B",
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      cursor: "pointer",
                      boxShadow: active ? `3px 3px 0px #1E293B` : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {formatFilterLabel(f)}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="divider" style={{ marginTop: 16 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {filtered.map((project, i) => {
            const shadowColor = cardShadowColors[i % cardShadowColors.length];
            return (
              <article
                key={project.title}
                className="project-card"
                style={{
                  background: "#fff",
                  border: "2px solid #1E293B",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: `6px 6px 0px ${shadowColor}`,
                  transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "rotate(-0.8deg) scale(1.02)"; (e.currentTarget as HTMLElement).style.boxShadow = `8px 8px 0px ${shadowColor}`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0px ${shadowColor}`; }}
              >
                {/* Image area */}
                <div style={{
                  height: 180,
                  background: `${shadowColor}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#475569" }}>
                    Preview unavailable
                  </span>
                  {/* Overlay */}
                  <div className="project-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 48, height: 48,
                        borderRadius: "50%",
                        border: "2px solid #fff",
                        background: "rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", textDecoration: "none",
                        backdropFilter: "blur(4px)",
                      }}
                      aria-label="GitHub"
                    >
                      <Github size={18} strokeWidth={2.5} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 48, height: 48,
                        borderRadius: "50%",
                        border: "2px solid #fff",
                        background: "rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", textDecoration: "none",
                        backdropFilter: "blur(4px)",
                      }}
                      aria-label="Live"
                    >
                      <ExternalLink size={18} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px 20px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <h3 style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "#1E293B" }}>{project.title}</h3>
                    <span style={{
                      padding: "3px 12px",
                      borderRadius: 9999,
                      background: `${shadowColor}22`,
                      border: `2px solid ${shadowColor}`,
                      color: "#1E293B",
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

                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.875rem", color: "#64748B", lineHeight: 1.7, marginBottom: 14 }}>
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        padding: "3px 10px",
                        borderRadius: 9999,
                        background: "#F1F5F9",
                        border: "1px solid #E2E8F0",
                        fontFamily: "'Outfit', system-ui, sans-serif",
                        fontSize: "0.67rem",
                        fontWeight: 600,
                        color: "#64748B",
                      }}>{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: 12, paddingTop: 12, borderTop: "1px solid #E2E8F0" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.74rem", color: "#64748B", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8B5CF6")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748B")}
                    >
                      <Github size={13} strokeWidth={2.5} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.74rem", color: "#64748B", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8B5CF6")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748B")}
                    >
                      <ExternalLink size={13} strokeWidth={2.5} /> Live
                    </a>
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