import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { IMG } from "./images";

export function Login() {
  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="relative hidden lg:block">
        <ImageWithFallback src={IMG.surgeryTeam} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,26,43,0.7) 0%, rgba(31,78,121,0.6) 100%)" }} />
        <div className="relative h-full p-14 flex flex-col justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="2" width="4" height="5" rx="1" fill="white" opacity="0.9" />
                <rect x="9" y="2" width="4" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="3" y="9" width="4" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="9" y="9" width="4" height="5" rx="1" fill="white" opacity="0.9" />
              </svg>
            </div>
            <span style={{ fontSize: 16, fontWeight: 700, color: "white" }}>RepWallet</span>
          </Link>
          <div className="max-w-md">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#60A9E9", marginBottom: 16 }}>
              The OS for medical reps
            </div>
            <p style={{ fontSize: 24, lineHeight: 1.3, color: "white", fontWeight: 500, letterSpacing: "-0.01em" }}>
              “We went from chasing credential renewals across email threads to a single dashboard. Cases stopped getting bumped.”
            </p>
            <div className="mt-5" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
              Maria Chen — VP Sales Ops, Vertex Orthopedics
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16" style={{ background: "#f7fafc" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <h1 style={{ fontSize: 30, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em" }}>Welcome back</h1>
          <p style={{ fontSize: 15, color: "#6b7280", marginTop: 8 }}>Sign in to your RepWallet account.</p>

          <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <label className="flex flex-col gap-1.5">
              <span style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>Work email</span>
              <input
                type="email"
                required
                style={{
                  padding: "11px 13px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.1)",
                  fontSize: 14,
                  background: "white",
                }}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>Password</span>
                <a href="#" style={{ fontSize: 12, color: "#32699A", fontWeight: 500 }}>Forgot?</a>
              </div>
              <input
                type="password"
                required
                style={{
                  padding: "11px 13px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.1)",
                  fontSize: 14,
                  background: "white",
                }}
              />
            </label>
            <button
              type="submit"
              className="mt-2 py-3 rounded-lg"
              style={{ background: "#1F4E79", color: "white", fontSize: 14, fontWeight: 600 }}
            >
              Sign in
            </button>

            <div className="my-2 flex items-center gap-3">
              <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
              <span style={{ fontSize: 12, color: "#9ca3af" }}>or</span>
              <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />
            </div>

            <button
              type="button"
              className="py-3 rounded-lg"
              style={{ background: "white", color: "#0b1a2b", fontSize: 14, fontWeight: 600, border: "1px solid rgba(0,0,0,0.1)" }}
            >
              Continue with SSO
            </button>
          </form>

          <div className="mt-7 text-center" style={{ fontSize: 13, color: "#6b7280" }}>
            New to RepWallet?{" "}
            <Link to="/contact" style={{ color: "#1F4E79", fontWeight: 600 }}>
              Request a demo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
