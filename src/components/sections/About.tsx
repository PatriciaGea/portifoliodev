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

const cardAccents = ["var(--foreground)", "var(--foreground)", "var(--foreground)", "var(--foreground)"];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--color-surface-alt)" }}>
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
              background: "var(--card)",
              border: "2px solid var(--foreground)",
              borderRadius: 20,
              boxShadow: "6px 6px 0px var(--foreground)",
              width: "100%",
              maxWidth: 360,
              padding: "24px 20px",
              textAlign: "center",
              transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "8px 8px 0px var(--foreground)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = "6px 6px 0px var(--foreground)"; }}
            >
              <div style={{
                width: 76, height: 76,
                borderRadius: "50%",
                border: "2px solid var(--foreground)",
                margin: "0 auto 12px",
                backgroundColor: "#FFFFFF",
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
                  sizes="76px"
                  style={{ objectFit: "contain", objectPosition: "center bottom", transform: "translateY(6px) scale(0.82)", backgroundColor: "#FFFFFF" }}
                  priority
                />
              </div>
              <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "0.95rem", marginBottom: 4, color: "var(--foreground)" }}>
                Patrícia Gea Rodrigues
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.85rem", color: "var(--muted-foreground)", fontWeight: 500 }}>
                Mobile - Frontend Developer with Product & UX Background
              </p>
            </div>

            {/* Cards grid */}
            <div className="about-cards-grid">
              {aboutHighlights.map(({ icon, label, sub }, i) => {
                const Icon = iconByKey[icon];
                const accent = cardAccents[i % cardAccents.length];
                return (
                  <div key={label} className="card" style={{ padding: "16px 14px" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-surface-alt)", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                      <Icon size={14} strokeWidth={2.5} style={{ color: accent }} />
                    </div>
                    <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 3, color: "var(--foreground)" }}>{label}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)" }}>{sub}</p>
                  </div>
                );
              })}

              <div className="card" style={{ padding: "16px 14px" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-surface-alt)", border: "2px solid var(--foreground)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--foreground)", fontFamily: "Outfit, system-ui, sans-serif" }}>AB</span>
                </div>
                <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 8, color: "var(--foreground)" }}>Languages</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start" }}>
                {(languages ?? []).map(({ name, level }) => (
                  <p key={name} style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.72rem", color: "var(--muted-foreground)", margin: 0 }}>
                    {name} <span style={{ color: "var(--foreground)", fontWeight: 600 }}>({level})</span>
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
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-surface-alt)", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                        <Icon size={14} strokeWidth={2.5} style={{ color: accent }} />
                      </div>
                    );
                  })()}
                  <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 3, color: "var(--foreground)" }}>{card.title}</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.74rem", color: "var(--muted-foreground)", marginBottom: 2 }}>{card.subtitle}</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.67rem", color: "var(--color-text-faint)" }}>{card.details}</p>
                </div>
              ))}

              <div className="card" style={{ padding: "16px 14px" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-surface-alt)", border: "2px solid var(--foreground)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <Instagram size={14} strokeWidth={2.5} style={{ color: "var(--foreground)" }} />
                </div>
                <p style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", marginBottom: 10, color: "var(--foreground)" }}>Instagram</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {[
                    { href: "https://www.instagram.com/tattooink.se", label: "Studio Stockholm Sweden", meta: "2018–2025" },
                    { href: "https://www.instagram.com/estudiotattooink", label: "Studio Sao Paulo Brazil", meta: "2013–2026" },
                    { href: "https://www.instagram.com/patriciagea/", label: "@patriciagea", meta: "Tattoo Portfolio" },
                  ].map(({ href, label, meta }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: "0.76rem", color: "var(--foreground)", fontWeight: 600 }}>{label}</span>
                      <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.65rem", color: "var(--color-text-faint)", marginLeft: 8 }}>{meta}</span>
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