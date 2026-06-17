"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems, siteConfig } from "@/lib/portfolio-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = navItems.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const accentColors = ["var(--accent)", "var(--accent)", "var(--accent)", "var(--accent)", "var(--accent)"];
  const isDark = mounted && theme === "dark";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "2px solid var(--border)" : "none",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          boxShadow: scrolled ? "0 2px 0px var(--border)" : "none",
        }}
      >
        <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
            <button
            onClick={() => scrollTo("#home")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 4 }}
            aria-label="Go to top"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              {siteConfig.displayName}
              <span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4, marginRight: 16 }}>
              {navItems.map((item, i) => {
                const color = accentColors[i % accentColors.length];
                const isActive = active === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "6px 12px",
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      color: isActive ? color : "var(--foreground)",
                      position: "relative",
                      transition: "color 0.2s",
                      letterSpacing: "0.02em",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = isActive ? color : "var(--foreground)"; }}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                    {isActive && (
                      <span style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60%",
                        height: 3,
                        background: color,
                        borderRadius: 2,
                        display: "block",
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "2px solid var(--foreground)",
                background: "var(--card)",
                color: "var(--foreground)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "3px 3px 0px var(--foreground)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "5px 5px 0px var(--foreground)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ""; (e.currentTarget as HTMLButtonElement).style.boxShadow = "3px 3px 0px var(--foreground)"; }}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => scrollTo("#contact")}
              style={{
                padding: "9px 22px",
                borderRadius: 9999,
                border: "2px solid var(--foreground)",
                background: "var(--accent)",
                color: "var(--accent-fg)",
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "0.82rem",
                cursor: "pointer",
                boxShadow: "3px 3px 0px var(--foreground)",
                transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLButtonElement).style.background = "var(--hover-primary)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "5px 5px 0px var(--foreground)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ""; (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "3px 3px 0px var(--foreground)"; }}
              onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translate(1px,1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "1px 1px 0px var(--foreground)"; }}
            >
              Contact
            </button>

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              style={{ background: "none", border: "2px solid var(--foreground)", borderRadius: 8, padding: "6px", cursor: "pointer", marginLeft: 8, display: "none", color: "var(--foreground)" }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "var(--background)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            borderBottom: "2px solid var(--border)",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", cursor: "pointer", color: "var(--foreground)" }}
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={2.5} />
          </button>
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: "2rem",
                fontStyle: "italic",
                fontWeight: 800,
                color: accentColors[i % accentColors.length],
                letterSpacing: "-0.02em",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "rotate(-2deg) scale(1.05)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ""; }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary"
            style={{ marginTop: 12 }}
          >
            Contact
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}