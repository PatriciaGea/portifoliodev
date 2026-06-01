"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Filter, projects, siteConfig } from "@/lib/portfolio-data";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const formatFilterLabel = (value: Filter) => (value === "Fullstack" ? "Full-Stack" : value);
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div className="section-heading-row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
            <div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#525252", marginBottom: 10 }}>
                03 — Work
              </p>
              <h2 className="section-title">
                <span className="section-title-accent">Projects</span>
              </h2>
            </div>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: 0, border: "1px solid #000" }}>
              {(["All", "Frontend", "Fullstack"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "7px 18px",
                    border: "none",
                    borderRight: f !== "Fullstack" ? "1px solid #000" : "none",
                    background: filter === f ? "#000" : "transparent",
                    color: filter === f ? "#fff" : "#525252",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.1s",
                  }}
                >
                  {formatFilterLabel(f)}
                </button>
              ))}
            </div>
          </div>
          <div className="divider" style={{ marginTop: 16 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 1, background: "#000" }}>
          {filtered.map((project) => (
            <article
              key={project.title}
              className="project-card"
              style={{ padding: 0, overflow: "hidden", position: "relative", background: "#fff" }}
            >
              {/* Image area */}
              <div style={{
                height: 180,
                background: "#F5F5F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                borderBottom: "1px solid #000",
              }}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: "cover" }}
                  />
                )}
                {/* Overlay with links */}
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 44, height: 44,
                      border: "2px solid #fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", textDecoration: "none",
                    }}
                    aria-label="GitHub"
                  >
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 44, height: 44,
                      border: "2px solid #fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", textDecoration: "none",
                    }}
                    aria-label="Deployed"
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 20px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#000",
                  }}>{project.title}</h3>
                  <span style={{
                    padding: "2px 8px",
                    border: "1px solid #000",
                    color: "#000",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    marginLeft: 8,
                  }}>
                    {project.category === "Fullstack" ? "Full-Stack" : project.category}
                  </span>
                </div>

                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.875rem", color: "#525252", lineHeight: 1.7, marginBottom: 14 }}>
                  {project.description}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none", marginBottom: 14, display: "flex", flexDirection: "column", gap: 3 }}>
                  {project.features.map((f) => (
                    <li key={f} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#525252", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 3, height: 3, background: "#000", flexShrink: 0, display: "inline-block" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                  {project.tech.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: "0.65rem", padding: "2px 8px" }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 12, paddingTop: 12, borderTop: "1px solid #000" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#525252", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.1s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#525252")}
                  >
                    <Github size={12} strokeWidth={1.5} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#525252", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.1s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#525252")}
                  >
                    <ExternalLink size={12} strokeWidth={1.5} /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ gap: 10 }}>
            <Github size={14} strokeWidth={1.5} /> See all on GitHub <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
