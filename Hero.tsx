import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { PhoneMockup } from "./PhoneMockup";

const floatingCards = [
  {
    id: "facility",
    icon: "✓",
    iconBg: "#2E9E72",
    title: "Facility Access Approved",
    sub: "Memorial Hospital",
    time: "7:28 AM",
    side: "left",
    initialY: 0,
    duration: 7,
  },
  {
    id: "credential",
    icon: "!",
    iconBg: "#E08A2B",
    title: "Credential Expiring in 7 Days",
    sub: "BLS Certification · May 22",
    time: "",
    side: "left",
    initialY: 120,
    duration: 9,
  },
  {
    id: "case",
    icon: "📅",
    iconBg: "#32699A",
    title: "Case Added to Calendar",
    sub: "8:00 AM · May 15",
    time: "",
    side: "right",
    initialY: 40,
    duration: 8,
  },
  {
    id: "ai",
    icon: "✦",
    iconBg: "#1F4E79",
    title: "AI Follow-Up Generated",
    sub: "Memorial Hospital · 7:45 AM",
    time: "",
    side: "right",
    initialY: 160,
    duration: 6.5,
  },
];

function FloatingCard({ card, index }: { card: (typeof floatingCards)[0]; index: number }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={
        prefersReduced
          ? { opacity: 1, y: 0 }
          : {
              opacity: 1,
              y: [0, -8, 0],
              transition: {
                opacity: { duration: 0.6, delay: index * 0.15 },
                y: {
                  repeat: Infinity,
                  duration: card.duration,
                  ease: "easeInOut",
                  delay: index * 0.8,
                },
              },
            }
      }
      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
      style={{
        background: "white",
        boxShadow: "0 18px 50px -12px rgba(11,26,43,0.28), 0 4px 14px rgba(11,26,43,0.12), 0 0 0 1px rgba(11,26,43,0.06)",
        whiteSpace: "nowrap",
        fontFamily: "Inter, sans-serif",
        minWidth: 200,
      }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white text-xs font-bold"
        style={{ background: card.iconBg }}
      >
        {card.icon}
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#111", lineHeight: 1.3 }}>{card.title}</div>
        <div style={{ fontSize: 11, color: "#666", lineHeight: 1.3 }}>{card.sub || card.time}</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();

  const leftCards = floatingCards.filter((c) => c.side === "left");
  const rightCards = floatingCards.filter((c) => c.side === "right");

  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden"
      style={{ background: "white", fontFamily: "Inter, sans-serif" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 20%, rgba(31,78,121,0.04) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(96,169,233,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-flex items-center gap-1.5 mb-6 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(31,78,121,0.07)", border: "1px solid rgba(31,78,121,0.12)" }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#1F4E79",
                }}
              >
                BUILT FOR MEDICAL DEVICE REPS
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#0d1f35",
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Everything you need,
              <br />
              before every case.
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "#4b5563",
                fontWeight: 400,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              The operational system medical device reps rely on to stay prepared, get access, and show up ready—every time.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                to="/request-demo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm transition-all duration-150"
                style={{ background: "#1F4E79", color: "white", fontWeight: 600 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#163a5e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1F4E79")}
              >
                Request a Demo
              </Link>
              <Link
                to="/#workflow"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm transition-all duration-150"
                style={{ color: "#1F4E79", fontWeight: 600, border: "1.5px solid rgba(31,78,121,0.2)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(31,78,121,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(31,78,121,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(31,78,121,0.2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#1F4E79" }}>
                  <Play size={9} fill="white" color="white" />
                </div>
                See How It Works
              </Link>
            </div>

            <p style={{ fontSize: 13, color: "#9ca3af", fontWeight: 400 }}>
              Built to work with the platforms reps already use.
            </p>
          </motion.div>

          {/* Right: Phone + floating cards */}
          <div className="relative flex flex-col items-center justify-center lg:min-h-[640px]">
            {/* Mobile/tablet: cards above the phone */}
            <div className="lg:hidden w-full max-w-sm flex flex-col gap-2.5 mb-6">
              {leftCards.map((card, i) => (
                <FloatingCard key={`top-${card.id}`} card={card} index={i} />
              ))}
            </div>

            {/* Phone with desktop side cards */}
            <div className="relative flex items-center justify-center lg:w-full">
              {/* Left side cards (desktop only) */}
              <div
                className="hidden lg:flex absolute flex-col gap-3 z-10"
                style={{ left: -8, top: "50%", transform: "translateY(-55%)" }}
              >
                {leftCards.map((card, i) => (
                  <FloatingCard key={card.id} card={card} index={i} />
                ))}
              </div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20"
              >
                <PhoneMockup />
              </motion.div>

              {/* Right side cards (desktop only) */}
              <div
                className="hidden lg:flex absolute flex-col gap-3 z-10"
                style={{ right: -8, top: "50%", transform: "translateY(-45%)" }}
              >
                {rightCards.map((card, i) => (
                  <FloatingCard key={card.id} card={card} index={i + 2} />
                ))}
              </div>
            </div>

            {/* Mobile/tablet: cards below the phone */}
            <div className="lg:hidden w-full max-w-sm flex flex-col gap-2.5 mt-6">
              {rightCards.map((card, i) => (
                <FloatingCard key={`bot-${card.id}`} card={card} index={i + 2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
