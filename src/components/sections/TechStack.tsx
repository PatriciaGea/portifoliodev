"use client";

import {
  techCloud,
  techConcepts,
} from "@/lib/portfolio-data";

export default function TechStack() {

  return (
    <section id="stack" className="section" style={{ background: "var(--color-bg-alt)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            <span className="gradient-text">Skills</span>
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
      </div>
    </section>
  );
}
