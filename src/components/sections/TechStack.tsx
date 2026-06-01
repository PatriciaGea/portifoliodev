"use client";

import { techCloud, techConcepts } from "@/lib/portfolio-data";

const pillColors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

export default function TechStack() {
  return (
    <section id="stack" className="section" style={{ background: "#F1F5F9" }}>
      <div className="container">
        <div className="section-heading-block" style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label">02 — Skills</p>
          <h2 className="section-title">
            My <span className="section-title-accent">Toolkit</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto" }} />
        </div>

        {/* Skills cloud — colored pills */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
          maxWidth: 900,
          margin: "0 auto 16px",
        }}>
          {techCloud.map((tech, i) => {
            const color = pillColors[i % pillColors.length];
            return (
              <span key={tech} style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: 9999,
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                background: `${color}18`,
                border: `2px solid ${color}`,
                color: "#1E293B",
                boxShadow: `3px 3px 0px ${color}`,
                transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                cursor: "default",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLSpanElement).style.boxShadow = `5px 5px 0px ${color}`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.transform = ""; (e.currentTarget as HTMLSpanElement).style.boxShadow = `3px 3px 0px ${color}`; }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Concepts row */}
        <div style={{ textAlign: "center", marginTop: 32, marginBottom: 56 }}>
          <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748B", marginBottom: 14 }}>
            Concepts & Practices
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8 }}>
            {techConcepts.map((c) => (
              <span key={c} className="pill" style={{ fontSize: "0.74rem" }}>{c}</span>
            ))}
          </div>
        </div>

        {/* How this portfolio was built */}
        <div style={{
          background: "#fff",
          border: "2px solid #1E293B",
          borderRadius: 20,
          boxShadow: "6px 6px 0px #8B5CF6",
          padding: "32px 28px",
        }}>
          <h3 style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "1.2rem",
            marginBottom: 8,
            color: "#1E293B",
          }}>
            How this portfolio was built
          </h3>
          <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 24 }}>
            A performance-focused single-page experience with modular React components, responsive layouts, and a clean content structure.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { title: "Frontend Architecture", body: "Next.js 14 App Router, React 18 and TypeScript.", color: "#8B5CF6" },
              { title: "UI and Motion", body: "CSS custom properties, Lucide icons, keyframe animations.", color: "#F472B6" },
              { title: "Contact & Integrations", body: "EmailJS with environment-based configuration.", color: "#FBBF24" },
              { title: "Quality & Delivery", body: "Git, ESLint checks, and deployment on Vercel.", color: "#34D399" },
            ].map(({ title, body, color }) => (
              <div key={title} style={{
                padding: "16px 14px",
                background: `${color}12`,
                border: `2px solid ${color}`,
                borderRadius: 12,
              }}>
                <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.88rem", marginBottom: 6, color: "#1E293B" }}>{title}</p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.8rem", color: "#64748B", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}