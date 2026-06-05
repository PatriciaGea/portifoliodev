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
        }}
      >
        <Image
          src="/images/profile-back.png"
          alt="Patricia Gea portrait back"
          fill
          sizes="(max-width: 768px) 60vw, 360px"
          style={{ objectFit: "cover", objectPosition: "center bottom", transform: "translateY(36px) scale(1.06)", transformOrigin: "center bottom" }}
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
              <span style={{ width: 7, height: 7, background: "#1E293B", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: "0.62rem", fontWeight: 700, color: "#1E293B", letterSpacing: "0.04em" }}>
                Available for project inquiries & quotes worldwide
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="hero-title"
              style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.7vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#1E293B",
                marginBottom: 12,
                whiteSpace: "nowrap",
              }}
            >
                Mobile / Frontend{" "}
                <span style={{
                  color: "#8B5CF6",
                  textDecoration: "underline",
                  textDecorationColor: "#FBBF24",
                  textDecorationStyle: "wavy",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "6px",
                }}>Developer</span>
            </h1>

            {/* Tagline */}
            <p className="hero-tagline" style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#64748B",
              maxWidth: 520,
              marginBottom: 8,
              lineHeight: 1.6,
              fontWeight: 500,
            }}>
              With a background in Product, UX, and scalable strategy.
            </p>
            <p className="hero-location" style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(0.75rem, 1vw, 0.8125rem)",
              color: "#7d858f",
              maxWidth: 520,
              marginBottom: 28,
              lineHeight: 1.6,
              fontWeight: 200,
            }}>
               BASED IN STOCKHOLM, SWEDEN.
            </p>

            {/* Mobile portrait */}
            <div className="hero-photo-inline" style={{ perspective: "1000px" }}>
              {renderRotatingPortrait()}
            </div>

            {/* Bio */}
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.05rem",
              color: "#64748B",
              maxWidth: 540,
              marginBottom: 12,
              lineHeight: 1.8,
              fontWeight: 400,
            }}>
              <strong style={{ color: "#1E293B", fontWeight: 700 }}>Hi, I&apos;m Patricia Gea</strong>, a Mobile and Frontend Developer with 17 years of previous experience as a business owner, where I built and scaled 3 tattoo studios across Brazil and Sweden with a team of 20 people.
            </p>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.05rem",
              color: "#64748B",
              maxWidth: 540,
              marginTop: 8,
              marginBottom: 20,
              lineHeight: 1.8,
              fontWeight: 400,
            }}>
              Experience applied to programming development.
            </p>
            {/* Tech tags removed */}

            {/* CTAs */}
            <div className="hero-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20, marginBottom: 40 }}>
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="/CVPatriciaDeveloper.pdf" download className="btn-outline">
                Download CV
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