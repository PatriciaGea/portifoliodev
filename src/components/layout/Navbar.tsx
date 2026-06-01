"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/portfolio-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Primary"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          borderBottom: scrolled ? "2px solid #000" : "1px solid #E5E5E5",
          transition: "border-bottom 0.1s",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#000",
              letterSpacing: "-0.02em",
            }}>
              patrícia<span style={{ fontStyle: "italic" }}>gea</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden-mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#contact" className="btn-primary hidden-mobile" style={{ padding: "8px 20px", fontSize: "0.72rem" }}>
              Hire Me →
            </a>
            <button
              className="show-mobile"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              style={{
                width: 40, height: 40,
                border: "2px solid #000",
                background: "transparent",
                color: "#000",
                cursor: "pointer",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          borderTop: "4px solid #000",
        }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "2.2rem",
                color: "#000",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
            Hire Me →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
