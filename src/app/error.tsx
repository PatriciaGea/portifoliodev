"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--primary)" }}>
        Oops! Something went wrong
      </h1>
      <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "var(--color-text-muted)" }}>
        We&apos;re sorry for the inconvenience. Please try again.
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: "12px 28px",
          borderRadius: "100px",
          background: "var(--primary)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.9rem",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
