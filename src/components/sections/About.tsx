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
          {/* Right: highlights + decorative */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 920 }}>
            {/* Visual card with gradient border */}
            <div style={{
              position: "relative",
              padding: "2px",
              borderRadius: 20,
              background: "linear-gradient(135deg, #5170ff, #ff66c4, #791919)",
              marginBottom: 4,
            }}>
              <div style={{
                borderRadius: 18,
                background: "var(--color-surface)",
                padding: "24px 22px",
                textAlign: "center",
              }}>
                <div style={{
                  width: 68, height: 68, borderRadius: "50%",
                  background: "linear-gradient(135deg, #5170ff, #ff66c4)",
                  margin: "0 auto 12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.7rem",
                }}>
                  👩🏻‍💻
                </div>
                <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>
                  Patrícia Gea H. Rodrigues
                </p>
                <p className="gradient-accent-text" style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
                  Frontend Developer · Product & UX
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10 }}>
              {aboutHighlights.map(({ icon, label, sub }) => {
                const Icon = iconByKey[icon];

                return (
                  <div key={label} className="card" style={{ padding: "14px 12px" }}>
                    <Icon size={16} style={{ color: "var(--primary)", marginBottom: 6 }} />
                    <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.86rem", marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: "0.74rem", color: "var(--color-text-faint)" }}>{sub}</p>
                  </div>
                );
              })}
            </div>

            <div className="card" style={{ padding: "14px 12px" }}>
              <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.86rem", marginBottom: 8 }}>
                Languages
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {(languages ?? []).map(({ name, level }) => (
                  <p key={name} style={{ fontSize: "0.76rem", color: "var(--color-text-muted)" }}>
                    {name} <span style={{ color: "var(--color-text-faint)" }}>({level})</span>
                  </p>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
              {infoCards.map((card) => (
                <div key={card.title} className="card" style={{ padding: "14px 12px" }}>
                  <p style={{ fontSize: "0.74rem", color: "var(--color-text-faint)", marginBottom: 6 }}>
                    {card.emoji} CARD
                  </p>
                  <p style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: "0.84rem", marginBottom: 4 }}>
                    {card.title}
                  </p>
                  <p style={{ fontSize: "0.76rem", color: "var(--color-text-muted)", marginBottom: 2 }}>
                    {card.subtitle}
                  </p>
                  <p style={{ fontSize: "0.73rem", color: "var(--color-text-faint)" }}>
                    {card.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
