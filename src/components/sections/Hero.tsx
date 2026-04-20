"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/portfolio-data";

const socialIconByType = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const;

export default function Hero() {
  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "linear-gradient(135deg, rgba(81,112,255,0.1) 0%, rgba(255,102,196,0.05) 100%)" }}>
      {/* Mesh gradients - otimizados */}
      <div className="mesh-bg" style={{ width: 400, height: 400, background: "#5170ff", top: -50, right: -100, opacity: 0.08 }} />
      <div className="mesh-bg" style={{ width: 300, height: 300, background: "#ff66c4", bottom: -50, left: -50, opacity: 0.06 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 80 }}>
        <div className="hero-layout" style={{ maxWidth: 1200 }}>
          {/* Left: text */}
          <div className="hero-text">
          {/* Availability badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }} />
            <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "var(--color-text-muted)", letterSpacing: "0.1em" }}>
              Available for internship · Stockholm
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontSize: "clamp(1.9rem, 5.2vw, 3.2rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: 16,
            background: "linear-gradient(135deg, #5170ff 0%, #ff66c4 50%, #791919 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Frontend Developer
          </h1>

          {/* Tagline */}
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "white",
            maxWidth: 560,
            marginBottom: 40,
            lineHeight: 1.4,
            fontWeight: 400,
          }}>
            With a background in business ownership, scale strategy, product and UX.
          </p>

          {/* Sub */}
          <p style={{
            fontSize: "0.95rem",
            color: "var(--color-text-muted)",
            maxWidth: 560,
            marginBottom: 40,
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            Hi I’m Patrícia Gea 😃, a frontend developer transitioning from 17 years as a business owner, where I built 3 tattoo studios scaled a cross Brazil and Sweden, leading teams of up to 20 people.

bringing experience in UX, product, and growth.
          </p>
          <p style={{
            fontSize: "0.95rem",
            color: "var(--color-text-muted)",
            maxWidth: 560,
            marginBottom: 0,
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            Now studying at <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>Hyper Island</strong> in Stockholm, I bring that experience into how I think about UX, architecture, and what actually matters to end users.
          </p>

          <p style={{
            fontFamily: "monospace",
            fontSize: "0.8rem",
            color: "var(--color-text-faint)",
            marginBottom: 40,
            marginTop: 32,
            letterSpacing: "0.05em",
          }}>
            React · Next.js · TypeScript · Node.js · Express
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="/cv.pdf" download className="btn-outline">
              Download CV
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          {/* Social row */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 24 }}>
            {socialLinks
              .filter((social) => social.type !== "website")
              .map(({ type, href, label }) => {
                const Icon = socialIconByType[type as keyof typeof socialIconByType];

                return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "var(--color-text-faint)",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-faint)")}
              >
                <Icon size={20} />
              </a>
                );
              })}
            <div style={{ width: 1, height: 20, background: "var(--color-border)", margin: "0 4px" }} />
            <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--color-text-faint)" }}>
              Hyper Island · Stockholm
            </span>
          </div>
          </div>

          {/* Right: rotating image */}
          <div className="hero-photo-wrap" style={{ perspective: "1000px" }}>
            <div
              className="animate-rotate-image hero-portrait"
              style={{
                borderRadius: "50%",
                background: "linear-gradient(135deg, #5170ff, #ff66c4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                color: "white",
                fontWeight: 700,
                position: "relative",
                transformStyle: "preserve-3d",
                boxShadow: "0 20px 60px rgba(81,112,255,0.3)",
              }}
            >
              <div style={{ width: "100%", height: "100%", backfaceVisibility: "hidden", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
                <Image
                  src="/images/profile-front.png"
                  alt="Patricia Gea portrait front"
                  fill
                  sizes="(max-width: 768px) 78vw, 420px"
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
                  sizes="(max-width: 768px) 78vw, 420px"
                  style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(1.3)", transformOrigin: "center top" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          textDecoration: "none",
          color: "var(--color-text-faint)",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
