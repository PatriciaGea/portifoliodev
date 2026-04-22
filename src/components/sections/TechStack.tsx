"use client";

import {
  techCloud,
  techConcepts,
} from "@/lib/portfolio-data";

export default function TechStack() {

  return (
    <section id="stack" className="section" style={{ background: "var(--color-bg-alt)" }}>
      <div className="container">
        <div className="section-heading-block" style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            <span className="section-title-accent">Skills</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto" }} />
        </div>

        {/* Skills list */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 48,
          maxWidth: 900,
          margin: "0 auto 48px",
        }}>
          {techCloud.map((tech) => (
            <span
              key={tech}
              className="pill"
              style={{ fontSize: "0.85rem", padding: "8px 16px" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Concepts row */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
            {techConcepts.map((c) => (
              <span key={c} className="pill">{c}</span>
            ))}
          </div>
        </div>

        {/* How this portfolio was built */}
        <div style={{ marginTop: 56 }}>
          <div className="card" style={{ padding: "28px 24px" }}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>
              How this portfolio was built
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
              This portfolio was developed as a performance-focused single-page experience with modular React components,
              responsive layouts, and a clean content structure for continuous updates.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              <div className="card" style={{ padding: "14px 12px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.86rem", marginBottom: 4 }}>Frontend Architecture</p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  Next.js 14 (App Router), React 18 and TypeScript for component architecture and routing.
                </p>
              </div>

              <div className="card" style={{ padding: "14px 12px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.86rem", marginBottom: 4 }}>UI and Motion</p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  CSS custom properties + Tailwind utilities, Lucide icons, Framer Motion and keyframe animations.
                </p>
              </div>

              <div className="card" style={{ padding: "14px 12px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.86rem", marginBottom: 4 }}>Contact and Integrations</p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  Contact form delivery powered by EmailJS with environment-based configuration.
                </p>
              </div>

              <div className="card" style={{ padding: "14px 12px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.86rem", marginBottom: 4 }}>Quality and Delivery</p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  Git/GitHub workflow, ESLint checks, and deployment on Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
