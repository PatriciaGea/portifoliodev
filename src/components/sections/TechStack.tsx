"use client";

import { techCloud } from "@/lib/portfolio-data";

const pillColors = ["var(--foreground)", "var(--foreground)", "var(--foreground)", "var(--foreground)"];

export default function TechStack() {
  return (
    <section id="stack" className="section" style={{ background: "var(--color-surface-alt)" }}>
      <div className="container">

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label">02 — Skills</p>
          <h2 className="section-title">
            My <span className="section-title-accent">Toolkit</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto" }} />
        </div>

        {/* STACK */}
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {techCloud.map((section, index) => {
            const color = pillColors[index % pillColors.length];

            return (
              <div key={section.title} style={{ marginBottom: 28 }}>
                
                {/* TITLE */}
                <p
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted-foreground)",
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  {section.title}
                </p>

                {/* ITEMS */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {section.items.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "6px 16px",
                        borderRadius: 9999,
                        fontFamily: "'Outfit', system-ui, sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        background: "var(--card)",
                        border: `2px solid ${color}`,
                        color: "var(--foreground)",
                        boxShadow: `3px 3px 0px ${color}`,
                        cursor: "default",
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translate(-2px,-2px)";
                        el.style.boxShadow = `5px 5px 0px ${color}`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.transform = "";
                        el.style.boxShadow = `3px 3px 0px ${color}`;
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      

        {/* Implementation summary removed */}

      </div>
    </section>
  );
}