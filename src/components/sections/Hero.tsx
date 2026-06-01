"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
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
        border: "2px solid #1E293B",
        background: "#fff",
        boxShadow: "8px 8px 0px 0px #1E293B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src="/images/profile-front2.png"
          alt="Patricia Gea portrait front"
          fill
          sizes="(max-width: 768px) 60vw, 360px"
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
          position: "absolute",
        }}
      >
        <Image
          src="/images/profile-back.png"
          alt="Patricia Gea portrait back"
          fill
          sizes="(max-width: 768px) 60vw, 360px"
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
        background: "#FFFDF5",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 80 }}>
        <div className="hero-layout">

          {/* Left: text */}
          <div className="hero-text">

            {/* Availability badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 28,
              background: "#34D399",
              border: "2px solid #1E293B",
              borderRadius: 9999,
              padding: "6px 14px",
              boxShadow: "3px 3px 0px #1E293B",
            }}>
              <span style={{ width: 8, height: 8, background: "#1E293B", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#1E293B", letterSpacing: "0.04em" }}>
                Available for internship · Stockholm
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="hero-title"
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#1E293B",
                marginBottom: 8,
              }}
            >
              Frontend
            </h1>
            <h1
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#8B5CF6",
                marginBottom: 24,
                textDecoration: "underline",
                textDecorationColor: "#FBBF24",
                textDecorationStyle: "wavy",
                textDecorationThickness: "4px",
                textUnderlineOffset: "6px",
              }}
            >
              Developer.
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#64748B",
              maxWidth: 520,
              marginBottom: 32,
              lineHeight: 1.6,
              fontWeight: 500,
            }}>
              With a background in business ownership, scale strategy, product and UX.
            </p>

            {/* Mobile portrait */}
            <div className="hero-photo-inline" style={{ perspective: "1000px" }}>
              {renderRotatingPortrait()}
            </div>

            {/* Bio */}
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "0.97rem",
              color: "#64748B",
              maxWidth: 540,
              marginBottom: 16,
              lineHeight: 1.8,
              fontWeight: 400,
            }}>
              <strong style={{ color: "#1E293B", fontWeight: 700 }}>Hi, I&apos;m Patricia Gea</strong> — a frontend developer transitioning from 17 years as a business owner, building 3 tattoo studios across Brazil and Sweden, leading teams of up to 20 people with experience in UX, product, and growth.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "0.97rem",
              color: "#64748B",
              maxWidth: 540,
              marginBottom: 0,
              lineHeight: 1.8,
              fontWeight: 400,
            }}>
              Now studying at <strong style={{ color: "#8B5CF6", fontWeight: 700 }}>Hyper Island</strong> in Stockholm, I bring that experience into how I think about UX, architecture, and what actually matters to end users.
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32, marginTop: 20 }}>
              {["React", "Next.js", "TypeScript", "Node.js"].map((tech, i) => {
                const colors = ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"];
                return (
                  <span key={tech} style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 9999,
                    background: `${colors[i % colors.length]}22`,
                    border: `2px solid ${colors[i % colors.length]}`,
                    color: "#1E293B",
                  }}>
                    {tech}
                  </span>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="hero-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a href="/cv.pdf" download className="btn-outline">
                <Download size={16} strokeWidth={2.5} /> Download CV
              </a>
            </div>

            {/* Social row */}
            <div className="hero-social-row" style={{ display: "flex", gap: 12, alignItems: "center" }}>
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
                      style={{
                        width: 44, height: 44,
                        borderRadius: "50%",
                        border: "2px solid #1E293B",
                        background: "#fff",
                        boxShadow: "3px 3px 0px #1E293B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1E293B",
                        textDecoration: "none",
                        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translate(-2px,-2px) rotate(5deg)";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "5px 5px 0px #1E293B";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "3px 3px 0px #1E293B";
                      }}
                    >
                      <Icon size={18} strokeWidth={2.5} />
                    </a>
                  );
                })}
              <div style={{ width: 1, height: 20, background: "#CBD5E1", marginLeft: 4 }} />
              <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#64748B" }}>
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