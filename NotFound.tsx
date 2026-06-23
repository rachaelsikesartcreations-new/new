import { Link } from "react-router";

export function NotFound() {
  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6"
    >
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", color: "#32699A", textTransform: "uppercase" }}>
        404
      </div>
      <h1 style={{ fontSize: 40, fontWeight: 700, color: "#0b1a2b", marginTop: 12, letterSpacing: "-0.02em" }}>
        Page not found
      </h1>
      <p style={{ fontSize: 16, color: "#4b5563", marginTop: 10, maxWidth: 480 }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-7 px-5 py-2.5 rounded-lg"
        style={{ background: "#1F4E79", color: "white", fontSize: 14, fontWeight: 600 }}
      >
        Back to home
      </Link>
    </div>
  );
}
