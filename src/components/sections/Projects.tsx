"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight, ChevronRight } from "lucide-react";
import { Filter, projects, siteConfig } from "@/lib/portfolio-data";

const filterColors: Record<string, string> = { All: "var(--foreground)", Mobile: "var(--foreground)", Frontend: "var(--foreground)", Fullstack: "var(--foreground)" };
const cardShadowColors = ["var(--foreground)", "var(--foreground)", "var(--foreground)", "var(--foreground)"];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [bookingImageIndex, setBookingImageIndex] = useState(0);
  const [plantImageIndex, setPlantImageIndex] = useState(0);
  const [sailorJerryImageIndex, setSailorJerryImageIndex] = useState(0);
  const formatFilterLabel = (value: Filter) => (value === "Fullstack" ? "Full-Stack" : value);
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);
  const bookingImages = ["/images/bookingsystem.webp", "/images/bookingsystem1.webp", "/images/bookingsystem2.webp", "/images/bookingsystem3.webp"];
  const plantImages = ["/images/gifplant.gif", "/images/screenshotplant.png"];
  const sailorJerryImages = ["/images/IMG_3367.gif", "/images/sailor2.webp"];

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
                const color = filterColors[f] ?? "var(--foreground)";
                const active = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    style={{
                      padding: "8px 20px",
                      borderRadius: 9999,
                      border: `2px solid ${color}`,
                      background: active ? "#629FB1" : "transparent",
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
            const githubHref = project.github && project.github.trim() ? project.github : null;
            const liveHref = (project.live && project.live.trim()) ? project.live : project.image ? project.image : null;
            const isBookingSystem = project.title === "Booking System with Login";
            const isPlantLovers = project.title === "Plant Lovers App";
            const isSailorJerry = project.title === "Web XR VR 3D Experience";
            const isUserManagement = project.title === "User Management System";
            const carouselImages = isBookingSystem ? bookingImages : isPlantLovers ? plantImages : isSailorJerry ? sailorJerryImages : null;
            const imageSrc = isBookingSystem
              ? bookingImages[bookingImageIndex]
              : isPlantLovers
                ? plantImages[plantImageIndex]
                : isSailorJerry
                  ? sailorJerryImages[sailorJerryImageIndex]
                  : project.image;
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
                <div
                  role={liveHref ? "link" : undefined}
                  tabIndex={liveHref ? 0 : undefined}
                  onClick={() => liveHref && window.open(liveHref, "_blank", "noopener,noreferrer")}
                  onKeyDown={(e) => {
                    if (!liveHref || (e.key !== "Enter" && e.key !== " ")) return;
                    e.preventDefault();
                    window.open(liveHref, "_blank", "noopener,noreferrer");
                  }}
                  style={{
                    height: 260,
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    cursor: liveHref ? "pointer" : "default",
                  }}
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                        transform: isUserManagement ? "scale(1.04)" : isMobile ? "scale(0.9)" : "scale(0.94)",
                      }}
                    />
                  ) : (
                    <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--muted-foreground)" }}>
                      Preview unavailable
                    </span>
                  )}
                  {carouselImages && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isBookingSystem) {
                          setBookingImageIndex((current) => (current + 1) % bookingImages.length);
                        } else if (isPlantLovers) {
                          setPlantImageIndex((current) => (current + 1) % plantImages.length);
                        } else {
                          setSailorJerryImageIndex((current) => (current + 1) % sailorJerryImages.length);
                        }
                      }}
                      aria-label={`Next ${project.title} image`}
                      style={{
                        position: "absolute",
                        right: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        border: "2px solid #FFFFFF",
                        background: "rgba(0,0,0,0.72)",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                    >
                      <ChevronRight size={22} strokeWidth={2.7} />
                    </button>
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
                      {project.categoryLabel ?? (project.category === "Fullstack" ? "Full-Stack" : project.category)}
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
                  <div style={{ display: "flex", gap: 14, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                    {githubHref && (
                      <a
                        href={githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 9999, border: "2px solid var(--foreground)", fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "0.86rem", color: "var(--foreground)", background: "var(--card)", textDecoration: "none", transition: "background 0.2s, color 0.2s, transform 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--foreground)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--background)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--card)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)"; (e.currentTarget as HTMLAnchorElement).style.transform = ""; }}
                      >
                        <Github size={16} strokeWidth={2.5} /> Code
                      </a>
                    )}
                    {liveHref && (
                      <a
                        href={liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 9999, border: "2px solid var(--foreground)", fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "0.86rem", color: "var(--foreground)", background: "var(--card)", textDecoration: "none", transition: "background 0.2s, color 0.2s, transform 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--foreground)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--background)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--card)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)"; (e.currentTarget as HTMLAnchorElement).style.transform = ""; }}
                      >
                        <ExternalLink size={16} strokeWidth={2.5} /> Live
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