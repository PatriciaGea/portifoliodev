"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Filter, projects, siteConfig } from "@/lib/portfolio-data";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <p className="section-label">{"// projects"}</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Projects <span className="gradient-text">{"// projects"}</span>
            </h2>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: 8 }}>
              {(["All", "Frontend", "Fullstack"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "7px 18px",
                    borderRadius: 100,
                    border: "1.5px solid",
                    borderColor: filter === f ? "var(--primary)" : "var(--color-border)",
                    background: filter === f ? "rgba(81,112,255,0.1)" : "transparent",
                    color: filter === f ? "var(--primary)" : "var(--color-text-muted)",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="divider" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {filtered.map((project) => (
            <article key={project.title} className="card project-card" style={{ padding: 0, overflow: "hidden", position: "relative" }}>
              {/* Top accent bar */}
              <div style={{
                height: 4,
                background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)`,
              }} />

              {/* Mock preview area */}
              <div style={{
                height: 180,
                background: `linear-gradient(135deg, ${project.accent}18, ${project.accent}08)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                borderBottom: "1px solid var(--color-border)",
              }}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: "cover" }}
                  />
                ) : null}
                {/* Decorative circles */}
                <div style={{
                  position: "absolute",
                  width: 160, height: 160,
                  borderRadius: "50%",
                  border: `1px solid ${project.accent}25`,
                  top: -40, right: -40,
                }} />
                <div style={{
                  position: "absolute",
                  width: 100, height: 100,
                  borderRadius: "50%",
                  border: `1px solid ${project.accent}15`,
                  bottom: -20, left: -20,
                }} />

                {/* Overlay with links */}
                <div className="project-overlay" style={{
                  background: `linear-gradient(135deg, ${project.accent}dd, rgba(255,102,196,0.85))`,
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", textDecoration: "none",
                      backdropFilter: "blur(8px)",
                    }}
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", textDecoration: "none",
                      backdropFilter: "blur(8px)",
                    }}
                    aria-label="Deployed"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 24px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{project.title}</h3>
                  <span style={{
                    padding: "3px 10px",
                    borderRadius: 100,
                    background: `${project.accent}15`,
                    color: project.accent,
                    fontSize: "0.68rem",
                    fontFamily: "monospace",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    marginLeft: 8,
                  }}>
                    {project.category}
                  </span>
                </div>

                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 16 }}>
                  {project.description}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none", marginBottom: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                  {project.features.map((f) => (
                    <li key={f} style={{ fontSize: "0.8rem", color: "var(--color-text-faint)", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: project.accent, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {project.tech.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: "0.7rem", padding: "3px 10px" }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 12, paddingTop: 12, borderTop: "1px solid var(--color-border)" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      fontSize: "0.8rem", color: "var(--color-text-muted)",
                      textDecoration: "none", fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")}
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      fontSize: "0.8rem", color: "var(--color-text-muted)",
                      textDecoration: "none", fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--pink)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")}
                  >
                    <ExternalLink size={14} /> Deployed
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ gap: 10 }}
          >
            <Github size={16} /> See all on GitHub <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
