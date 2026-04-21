"use client";

import { MapPin, Coffee, Zap, Heart } from "lucide-react";
import { aboutHighlights, languages } from "@/lib/portfolio-data";

const iconByKey = {
  mapPin: MapPin,
  coffee: Coffee,
  zap: Zap,
  heart: Heart,
} as const;

const infoCards = [
  {
    title: "Hyper Island",
    subtitle: "Frontend Developer Program",
    details: "Stockholm, Sweden · 2025-2027",
    emoji: "🎓",
  },
  {
    title: "Bachelor Ciencias da Computacao",
    subtitle: "Universidade Nove de Julho",
    details: "Sao Paulo, Brazil · 2006-2007",
    emoji: "💻",
  },
  {
    title: "Interests",
    subtitle: "Music · Art · Illustration",
    details: "Coding & creative problem solving",
    emoji: "🎨",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          {/* Cards compactos centrados */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", maxWidth: 1100 }}>

            {/* Profile card */}
            <div style={{
              position: "relative", padding: "2px", borderRadius: 20,
              background: "linear-gradient(135deg, #5170ff, #ff66c4, #791919)",
              width: "100%", maxWidth: 340,
            }}>
              <div style={{ borderRadius: 18, background: "var(--color-surface)", padding: "20px 18px", textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "linear-gradient(135deg, #5170ff, #ff66c4)",
                  margin: "0 auto 10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem",
                }}>👩🏻‍💻</div>
                <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.92rem", marginBottom: 3 }}>
                  Patrícia Gea H. Rodrigues
                </p>
                <p className="gradient-accent-text" style={{ fontFamily: "monospace", fontSize: "0.72rem" }}>
                  Frontend Developer · Product & UX
                </p>
              </div>
            </div>

            {/* Grid de cards lado a lado */}
            <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, alignItems: "stretch" }}>
              {aboutHighlights.map(({ icon, label, sub }) => {
                const Icon = iconByKey[icon];
                return (
                  <div key={label} className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                    <Icon size={14} style={{ color: "var(--primary)", marginBottom: 5 }} />
                    <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.8rem", marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: "0.7rem", color: "var(--color-text-faint)" }}>{sub}</p>
                  </div>
                );
              })}

              <div className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.8rem", marginBottom: 7 }}>Languages</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
                  {(languages ?? []).map(({ name, level }) => (
                    <p key={name} style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                      {name} <span style={{ color: "var(--color-text-faint)" }}>({level})</span>
                    </p>
                  ))}
                </div>
              </div>

              {infoCards.map((card) => (
                <div key={card.title} className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                  <p style={{ fontSize: "0.72rem", color: "var(--color-text-faint)", marginBottom: 5 }}>{card.emoji}</p>
                  <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.8rem", marginBottom: 3 }}>{card.title}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginBottom: 2 }}>{card.subtitle}</p>
                  <p style={{ fontSize: "0.69rem", color: "var(--color-text-faint)" }}>{card.details}</p>
                </div>
              ))}

              <div className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.8rem", marginBottom: 9 }}>📸 Instagram</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <a href="https://www.instagram.com/tattooink.se" target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.76rem", color: "var(--color-text)", fontWeight: 600 }}>Studio Stockholm Sweden</span>
                    <span style={{ fontSize: "0.69rem", color: "var(--color-text-faint)", marginLeft: 8 }}>2018–2025</span>
                  </a>
                  <a href="https://www.instagram.com/estudiotattooink" target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.76rem", color: "var(--color-text)", fontWeight: 600 }}>Studio Sao Paulo Brasil</span>
                    <span style={{ fontSize: "0.69rem", color: "var(--color-text-faint)", marginLeft: 8 }}>2013–2026</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
