export default function NotFound() {
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
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--primary)" }}>
        404
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "var(--color-text-muted)" }}>
        Page not found
      </p>
      <a
        href="/"
        style={{
          padding: "12px 28px",
          borderRadius: "100px",
          background: "var(--primary)",
          color: "white",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.9rem",
        }}
      >
        Go Home
      </a>
    </div>
  );
}
