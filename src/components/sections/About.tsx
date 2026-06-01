"use client";

import Image from "next/image";
import { MapPin, Coffee, Zap, Heart, GraduationCap, BookOpen, Palette, Instagram } from "lucide-react";
import { aboutHighlights, languages } from "@/lib/portfolio-data";

const iconByKey = {
  mapPin: MapPin,
  coffee: Coffee,
  zap: Zap,
  heart: Heart,
} as const;

const infoIconByKey = {
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
  palette: Palette,
} as const;

const infoCards = [
  {
    title: "Hyper Island",
    subtitle: "Frontend Developer Program",
    details: "Stockholm, Sweden · 2025-2027",
    icon: "graduationCap",
  },
  {
    title: "Bachelor in Computer Science",
    subtitle: "Nove de Julho University (UNINOVE)",
    details: "Sao Paulo, Brazil · 2006-2007",
    icon: "bookOpen",
  },
  {
    title: "Interests",
    subtitle: "Music · Art · Illustration · Coding",
    details: "Creative problem solving",
    icon: "palette",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading-block">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#525252", marginBottom: 10 }}>
            01 — About
          </p>
          <h2 className="section-title">
            About <span className="section-title-accent">Me</span>
          </h2>
          <div className="divider" />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", maxWidth: 1100 }}>

            {/* Profile card */}
            <div style={{
              border: "2px solid #000",
              width: "100%",
              maxWidth: 340,
              padding: "20px 18px",
              textAlign: "center",
              background: "#fff",
            }}>
              <div style={{
                width: 56, height: 56,
                border: "2px solid #000",
                borderRadius: "50%",
                margin: "0 auto 10px",
                overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Image
                  src="/images/ChatGPT Image Apr 22, 2026, 02_55_15 PM.svg"
                  alt="Patricia avatar"
                  width={56}
                  height={56}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: 4, color: "#000" }}>
                Patrícia Gea H. Rodrigues
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252", letterSpacing: "0.04em" }}>
                Frontend Developer with Product & UX Background
              </p>
            </div>

            {/* Grid de cards */}
            <div className="about-cards-grid">
              {aboutHighlights.map(({ icon, label, sub }) => {
                const Icon = iconByKey[icon];
                return (
                  <div key={label} className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                    <Icon size={14} strokeWidth={1.5} style={{ color: "#000", marginBottom: 6 }} />
                    <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 3, color: "#000" }}>{label}</p>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252" }}>{sub}</p>
                  </div>
                );
              })}

              <div className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 8, color: "#000" }}>Languages</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
                  {(languages ?? []).map(({ name, level }) => (
                    <p key={name} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252" }}>
                      {name} <span style={{ color: "#000" }}>({level})</span>
                    </p>
                  ))}
                </div>
              </div>

              {infoCards.map((card) => (
                <div key={card.title} className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                  {(() => {
                    const Icon = infoIconByKey[card.icon];
                    return <Icon size={14} strokeWidth={1.5} style={{ color: "#000", marginBottom: 6 }} />;
                  })()}
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 3, color: "#000" }}>{card.title}</p>
                  <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.72rem", color: "#525252", marginBottom: 2 }}>{card.subtitle}</p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#525252" }}>{card.details}</p>
                </div>
              ))}

              <div className="card" style={{ padding: "12px 14px", minHeight: 102 }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 10, display: "flex", alignItems: "center", gap: 6, color: "#000" }}>
                  <Instagram size={14} strokeWidth={1.5} /> Instagram
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {[
                    { href: "https://www.instagram.com/tattooink.se", label: "Studio Stockholm Sweden", meta: "2018–2025" },
                    { href: "https://www.instagram.com/estudiotattooink", label: "Studio Sao Paulo Brazil", meta: "2013–2026" },
                    { href: "https://www.instagram.com/patriciagea/", label: "@patriciagea", meta: "Tattoo Portfolio" },
                  ].map(({ href, label, meta }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.76rem", color: "#000", fontWeight: 600 }}>{label}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#525252", marginLeft: 8 }}>{meta}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
