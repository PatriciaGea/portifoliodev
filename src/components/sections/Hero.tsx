"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/portfolio-data";

const socialIconByType = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const;

export default function Hero() {
  const renderRotatingPortrait = () => (
    <div
      className="animate-rotate-image hero-portrait"
      style={{
        borderRadius: "50%",
        border: "2px solid #000",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ width: "100%", height: "100%", backfaceVisibility: "hidden", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
        <Image
          src="/images/profile-front.png"
          alt="Patricia Gea portrait front"
          fill
          sizes="(max-width: 768px) 60vw, 410px"
          priority
          style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(1.3)", transformOrigin: "center top" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <Image
          src="/images/profile-back.png"
          alt="Patricia Gea portrait back"
          fill
          sizes="(max-width: 768px) 60vw, 410px"
          style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(1.3)", transformOrigin: "center top" }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#fff",
        borderBottom: "4px solid #000",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 80 }}>
        <div className="hero-layout">

          {/* Left: text */}
          <div className="hero-text">

            {/* Availability badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28, border: "1px solid #000", padding: "5px 12px" }}>
              <span style={{ width: 6, height: 6, background: "#000", display: "inline-block" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#525252", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Available for internship · Stockholm
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="hero-title"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#000",
                marginBottom: 8,
              }}
            >
              Frontend
            </h1>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#000",
                marginBottom: 24,
              }}
            >
              Developer.
            </h1>

            {/* Thick rule decorative element */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ height: 4, width: 48, background: "#000" }} />
              <div style={{ width: 10, height: 10, border: "2px solid #000" }} />
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#000",
              maxWidth: 520,
              marginBottom: 32,
              lineHeight: 1.5,
              fontWeight: 400,
            }}>
              With a background in business ownership, scale strategy, product and UX.
            </p>

            {/* Mobile portrait */}
            <div className="hero-photo-inline" style={{ perspective: "1000px" }}>
              {renderRotatingPortrait()}
            </div>

            {/* Bio */}
            <p style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "0.95rem",
              color: "#525252",
              maxWidth: 540,
              marginBottom: 20,
              lineHeight: 1.8,
            }}>
              <strong style={{ color: "#000", fontWeight: 700 }}>Hi, I&apos;m Patricia Gea</strong> — a frontend developer transitioning from 17 years as a business owner, building 3 tattoo studios across Brazil and Sweden, leading teams of up to 20 people with experience in UX, product, and growth.
            </p>
            <p style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "0.95rem",
              color: "#525252",
              maxWidth: 540,
              marginBottom: 0,
              lineHeight: 1.8,
            }}>
              Now studying at <strong style={{ color: "#000", fontWeight: 700 }}>Hyper Island</strong> in Stockholm, I bring that experience into how I think about UX, architecture, and what actually matters to end users.
            </p>

            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              color: "#525252",
              marginBottom: 36,
              marginTop: 24,
              letterSpacing: "0.08em",
            }}>
              React · Next.js · TypeScript · Node.js · Express
            </p>

            {/* CTAs */}
            <div className="hero-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
              <a href="#projects" className="btn-primary">
                View My Work →
              </a>
              <a href="/cv.pdf" download className="btn-outline">
                Download CV
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Github size={14} strokeWidth={1.5} /> GitHub
              </a>
            </div>

            {/* Social row */}
            <div className="hero-social-row" style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {socialLinks
                .filter((s) => s.type !== "website")
                .map(({ type, href, label }) => {
                  const Icon = socialIconByType[type as keyof typeof socialIconByType];
                  if (!Icon) return null;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{ color: "#525252", transition: "color 0.1s", textDecoration: "none" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#000")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#525252")}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  );
                })}
              <div style={{ width: 1, height: 16, background: "#000" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#525252", letterSpacing: "0.05em" }}>
                Hyper Island · Stockholm
              </span>
            </div>
          </div>

          {/* Right: rotating portrait (desktop) */}
          <div className="hero-photo-wrap hero-photo-desktop" style={{ perspective: "1000px" }}>
            {renderRotatingPortrait()}
          </div>
        </div>
      </div>
    </section>
  );
}
