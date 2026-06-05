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
  { title: "Hyper Island", subtitle: "Frontend Developer Program", details: "Stockholm, Sweden · 2025-2027 · Yrkeshögskola", icon: "graduationCap" },
  { title: "Bachelor in Computer Science", subtitle: "Nove de Julho University", details: "Sao Paulo, Brazil · 2006-2007 (incomplete)", icon: "bookOpen" },
  { title: "Interests", subtitle: "Music · Art · Illustration · Coding", details: "Creative problem solving", icon: "palette" },
] as const;

const cardAccents = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "#FFFDF5" }}>
      <div className="container">
        <div className="section-heading-block" style={{ textAlign: "center" }}>
          <p className="section-label">01 — About</p>
          <h2 className="section-title">
            About <span className="section-title-accent">Me</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: "100%", maxWidth: 1100 }}>

            {/* Profile card — Sticker */}
            <div style={{
              background: "#fff",
              border: "2px solid #1E293B",
              borderRadius: 20,
              boxShadow: "6px 6px 0px #F472B6",
              width: "100%",
              maxWidth: 360,
              padding: "24px 20px",
              textAlign: "center",
              transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "rotate(-1deg) scale(1.02)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "8px 8px 0px #F472B6"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = "6px 6px 0px #F472B6"; }}
            >
              <div style={{
                width: 92, height: 92,
                borderRadius: "50%",
                border: "2px solid #1E293B",
                margin: "0 auto 12px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}>
                <Image
                  src="/images/cat.webp"
                  alt="Patrícia Gea"
                  fill
                  sizes="92px"
                  style={{ objectFit: "cover", objectPosition: "center 90%", transform: "scale(0.88)" }}
                  priority
                />
              </div>
              <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "0.95rem", marginBottom: 4, color: "#1E293B" }}>
                Patrícia Gea Rodrigues
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.85rem", color: "#64748B", fontWeight: 500 }}>
                Frontend Developer with Product & UX Background
              </p>
            </div>

            {/* Cards grid */}
            <div className="about-cards-grid">
              {aboutHighlights.map(({ icon, label, sub }, i) => {
                const Icon = iconByKey[icon];
                const accent = cardAccents[i % cardAccents.length];
                return (
                  <div key={label} className="card" style={{ padding: "16px 14px" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${accent}22`, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                      <Icon size={14} strokeWidth={2.5} style={{ color: accent }} />
                    </div>
                    <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 3, color: "#1E293B" }}>{label}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.72rem", color: "#64748B" }}>{sub}</p>
                  </div>
                );
              })}

              <div className="card" style={{ padding: "16px 14px" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#8B5CF622", border: "2px solid #8B5CF6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#8B5CF6", fontFamily: "Outfit, system-ui, sans-serif" }}>AB</span>
                </div>
                <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 8, color: "#1E293B" }}>Languages</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start" }}>
                {(languages ?? []).map(({ name, level }) => (
                  <p key={name} style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.72rem", color: "#64748B", margin: 0 }}>
                    {name} <span style={{ color: "#8B5CF6", fontWeight: 600 }}>({level})</span>
                  </p>
                ))}
              </div>
              </div>

              {infoCards.map((card, i) => (
                <div key={card.title} className="card" style={{ padding: "16px 14px" }}>
                  {(() => {
                    const Icon = infoIconByKey[card.icon];
                    const accent = cardAccents[(i + 1) % cardAccents.length];
                    return (
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${accent}22`, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                        <Icon size={14} strokeWidth={2.5} style={{ color: accent }} />
                      </div>
                    );
                  })()}
                  <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 3, color: "#1E293B" }}>{card.title}</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.74rem", color: "#64748B", marginBottom: 2 }}>{card.subtitle}</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.67rem", color: "#94A3B8" }}>{card.details}</p>
                </div>
              ))}

              <div className="card" style={{ padding: "16px 14px" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F472B622", border: "2px solid #F472B6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <Instagram size={14} strokeWidth={2.5} style={{ color: "#F472B6" }} />
                </div>
                <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 10, color: "#1E293B" }}>Instagram</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {[
                    { href: "https://www.instagram.com/tattooink.se", label: "Studio Stockholm Sweden", meta: "2018–2025" },
                    { href: "https://www.instagram.com/estudiotattooink", label: "Studio Sao Paulo Brazil", meta: "2013–2026" },
                    { href: "https://www.instagram.com/patriciagea/", label: "@patriciagea", meta: "Tattoo Portfolio" },
                  ].map(({ href, label, meta }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.76rem", color: "#1E293B", fontWeight: 600 }}>{label}</span>
                      <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.65rem", color: "#94A3B8", marginLeft: 8 }}>{meta}</span>
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