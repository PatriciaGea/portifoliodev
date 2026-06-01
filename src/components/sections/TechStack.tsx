"use client";

import {
  techCloud,
  techConcepts,
} from "@/lib/portfolio-data";

export default function TechStack() {
  return (
    <section id="stack" className="section" style={{ background: "#F5F5F5" }}>
      <div className="container">
        <div className="section-heading-block" style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#525252", marginBottom: 10 }}>
            02 — Skills
          </p>
          <h2 className="section-title">
            <span className="section-title-accent">Skills</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto" }} />
        </div>

        {/* Skills list */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 40,
          maxWidth: 900,
          margin: "0 auto 40px",
        }}>
          {techCloud.map((tech) => (
            <span key={tech} className="pill" style={{ fontSize: "0.78rem", padding: "6px 14px" }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Concepts row */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8 }}>
            {techConcepts.map((c) => (
              <span key={c} className="pill" style={{ fontSize: "0.72rem", fontStyle: "italic" }}>{c}</span>
            ))}
          </div>
        </div>

        {/* How this portfolio was built */}
        <div style={{ marginTop: 56 }}>
          <div style={{ border: "2px solid #000", padding: "28px 24px", background: "#fff" }}>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.1rem",
              marginBottom: 8,
              color: "#000",
            }}>
              How this portfolio was built
            </h3>
            <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#525252", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20 }}>
              This portfolio was developed as a performance-focused single-page experience with modular React components,
              responsive layouts, and a clean content structure for continuous updates.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#000" }}>
              {[
                { title: "Frontend Architecture", body: "Next.js 14 (App Router), React 18 and TypeScript for component architecture and routing." },
                { title: "UI and Motion", body: "CSS custom properties + Tailwind utilities, Lucide icons, Framer Motion and keyframe animations." },
                { title: "Contact & Integrations", body: "Contact form delivery powered by EmailJS with environment-based configuration." },
                { title: "Quality & Delivery", body: "Git/GitHub workflow, ESLint checks, and deployment on Vercel." },
              ].map(({ title, body }) => (
                <div key={title} style={{ padding: "16px 14px", background: "#fff" }}>
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.86rem", marginBottom: 5, color: "#000" }}>{title}</p>
                  <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.8rem", color: "#525252", lineHeight: 1.6 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


