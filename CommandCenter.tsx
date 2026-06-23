import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  Hospital,
  Calendar,
  FileText,
  MessageSquare,
  BarChart3,
  Pause,
  Play,
  Check,
  Bell,
  Clock,
} from "lucide-react";

type ModuleId = "creds" | "hosp" | "sched" | "prep" | "msg" | "rep";

type Preview = {
  eyebrow: string;
  title: string;
  rows: { label: string; value: string; tone: "ok" | "warn" | "alert" | "info" }[];
};

const modules: {
  id: ModuleId;
  label: string;
  sub: string;
  angle: number;
  icon: typeof ShieldCheck;
  color: string;
  preview: Preview;
}[] = [
  {
    id: "creds",
    label: "Credentials",
    sub: "Keep everything up to date and expiration-proof.",
    angle: 210,
    icon: ShieldCheck,
    color: "#1F4E79",
    preview: {
      eyebrow: "Credentials",
      title: "All current",
      rows: [
        { label: "TB Test", value: "Expires 5d", tone: "alert" },
        { label: "Flu Vaccine", value: "Current", tone: "ok" },
        { label: "BLS Cert", value: "Current", tone: "ok" },
      ],
    },
  },
  {
    id: "hosp",
    label: "Hospital Access",
    sub: "Get approved at the facilities you need, faster.",
    angle: 270,
    icon: Hospital,
    color: "#32699A",
    preview: {
      eyebrow: "Access",
      title: "5 approved",
      rows: [
        { label: "Cedar Memorial", value: "Cleared", tone: "ok" },
        { label: "St. Anne's", value: "Cleared", tone: "ok" },
        { label: "Pacific NW", value: "Pending", tone: "warn" },
      ],
    },
  },
  {
    id: "sched",
    label: "Scheduling",
    sub: "See your cases, meetings, and tasks in one place.",
    angle: 330,
    icon: Calendar,
    color: "#60A9E9",
    preview: {
      eyebrow: "Today",
      title: "2 cases",
      rows: [
        { label: "8:00a Ortho", value: "Memorial", tone: "info" },
        { label: "2:00p Spine", value: "St. Mary's", tone: "info" },
        { label: "Coverage", value: "Confirmed", tone: "ok" },
      ],
    },
  },
  {
    id: "prep",
    label: "Prep & Notes",
    sub: "All your case prep info, organized and easy to find.",
    angle: 30,
    icon: FileText,
    color: "#2E9E72",
    preview: {
      eyebrow: "Tomorrow",
      title: "TKA · Patel",
      rows: [
        { label: "Tray", value: "TKA-12B", tone: "info" },
        { label: "Prefs", value: "Cemented", tone: "info" },
        { label: "Pull list", value: "4 of 4", tone: "ok" },
      ],
    },
  },
  {
    id: "msg",
    label: "Messaging",
    sub: "Secure team communication that keeps everyone aligned.",
    angle: 90,
    icon: MessageSquare,
    color: "#E08A2B",
    preview: {
      eyebrow: "Inbox",
      title: "4 new",
      rows: [
        { label: "Dr. Patel", value: "Confirmed 7:30", tone: "ok" },
        { label: "Coverage req", value: "Friday", tone: "warn" },
        { label: "OR scheduler", value: "Updated", tone: "info" },
      ],
    },
  },
  {
    id: "rep",
    label: "Reports & Insights",
    sub: "Track activity and prove your impact with real data.",
    angle: 150,
    icon: BarChart3,
    color: "#7A5BD1",
    preview: {
      eyebrow: "This week",
      title: "+18% cases",
      rows: [
        { label: "Cases", value: "23", tone: "ok" },
        { label: "Avg prep", value: "12 min", tone: "ok" },
        { label: "On-time", value: "100%", tone: "ok" },
      ],
    },
  },
];

const DIST = 220;
const ADVANCE_MS = 2800;

function toXY(angle: number, dist: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: Math.cos(rad) * dist, y: Math.sin(rad) * dist };
}

const toneColor: Record<Preview["rows"][number]["tone"], string> = {
  ok: "#2E9E72",
  warn: "#E08A2B",
  alert: "#EF4444",
  info: "#32699A",
};

export function CommandCenter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || prefersReduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % modules.length), ADVANCE_MS);
    return () => clearInterval(t);
  }, [inView, paused, prefersReduced]);

  const cx = 320;
  const cy = 320;
  const activeMod = modules[active];

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "#f8f9fb", fontFamily: "Inter, sans-serif" }}
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, rgba(96,169,233,0.12), transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1F4E79",
              marginBottom: 12,
            }}
          >
            ONE PLATFORM. EVERYTHING CONNECTED.
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 600,
              color: "#0d1f35",
              letterSpacing: "-0.02em",
            }}
          >
            Your operational command center.
          </h2>
          <p
            style={{
              maxWidth: 560,
              margin: "14px auto 0",
              fontSize: 15,
              color: "#4b5563",
              lineHeight: 1.6,
            }}
          >
            Six modules. One feed. Watch live signals route from credentials, access,
            scheduling, prep, messaging, and reporting into a single rep cockpit.
          </p>

          {/* Status pill */}
          <button
            onClick={() => setPaused((p) => !p)}
            className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors"
            style={{
              background: paused ? "rgba(31,78,121,0.08)" : "rgba(46,158,114,0.12)",
              border: `1px solid ${paused ? "rgba(31,78,121,0.2)" : "rgba(46,158,114,0.3)"}`,
              color: paused ? "#1F4E79" : "#1f7a55",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: paused ? "#1F4E79" : "#2E9E72",
                animation: paused ? "none" : "cc-pulse 1.6s ease-in-out infinite",
              }}
            />
            {paused ? (
              <>
                <Play size={11} /> Paused — click to resume
              </>
            ) : (
              <>
                <Pause size={11} /> Live demo · click to pause
              </>
            )}
          </button>
        </motion.div>

        {/* Desktop radial diagram */}
        <div className="hidden lg:flex justify-center relative" style={{ height: 680 }}>
          <div className="relative" style={{ width: 680, height: 680 }}>
            {/* Orbit rings */}
            {[1, 2].map((r) => (
              <div
                key={r}
                aria-hidden
                className="absolute rounded-full"
                style={{
                  left: cx - DIST + (r - 1) * 30,
                  top: cy - DIST + (r - 1) * 30,
                  width: DIST * 2 - (r - 1) * 60,
                  height: DIST * 2 - (r - 1) * 60,
                  border: `1px dashed rgba(31,78,121,${0.1 - (r - 1) * 0.04})`,
                }}
              />
            ))}

            {/* SVG connection lines */}
            <svg
              className="absolute inset-0"
              width="680"
              height="680"
              viewBox="0 0 680 680"
              style={{ overflow: "visible" }}
            >
              <defs>
                {modules.map((mod) => (
                  <linearGradient
                    key={`g-${mod.id}`}
                    id={`beam-${mod.id}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor={mod.color} stopOpacity="0" />
                    <stop offset="50%" stopColor={mod.color} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={mod.color} stopOpacity="0" />
                  </linearGradient>
                ))}
              </defs>

              {modules.map((mod, i) => {
                const pos = toXY(mod.angle, DIST);
                const isActive = i === active;
                return (
                  <g key={mod.id}>
                    <motion.line
                      x1={cx}
                      y1={cy}
                      x2={cx + pos.x}
                      y2={cy + pos.y}
                      stroke={isActive ? mod.color : "#1F4E79"}
                      strokeOpacity={isActive ? 0.6 : 0.16}
                      strokeWidth={isActive ? 2 : 1.5}
                      strokeDasharray={isActive ? "0 0" : "4 4"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                    />
                    {isActive && !prefersReduced && (
                      <motion.circle
                        r="5"
                        fill={mod.color}
                        initial={{ cx, cy, opacity: 0 }}
                        animate={{
                          cx: cx + pos.x,
                          cy: cy + pos.y,
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        style={{
                          filter: `drop-shadow(0 0 6px ${mod.color})`,
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Pulsing halo around phone */}
            {!prefersReduced && (
              <motion.div
                aria-hidden
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: cx - 110,
                  top: cy - 110,
                  width: 220,
                  height: 220,
                  border: `2px solid ${activeMod.color}`,
                }}
                animate={{ opacity: [0.5, 0, 0.5], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            {/* Center phone */}
            <div
              className="absolute rounded-[28px] overflow-hidden"
              style={{
                left: cx - 90,
                top: cy - 175,
                width: 180,
                height: 350,
                background: "#0a0a0f",
                border: "8px solid #1a1a2e",
                boxShadow: `0 30px 70px rgba(11,26,43,0.4), 0 0 0 6px ${activeMod.color}15, 0 0 40px ${activeMod.color}30`,
                transition: "box-shadow 0.5s ease",
              }}
            >
              {/* Notch */}
              <div
                className="absolute left-1/2 -translate-x-1/2 rounded-b-xl"
                style={{ top: 0, width: 50, height: 14, background: "#0a0a0f", zIndex: 2 }}
              />
              <div
                className="h-full flex flex-col"
                style={{ background: "#f4f6fb", paddingTop: 20 }}
              >
                {/* Status bar */}
                <div className="px-3 flex items-center justify-between" style={{ marginBottom: 6 }}>
                  <div
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      color: "#0d1f35",
                    }}
                  >
                    9:41
                  </div>
                  <div className="flex items-center gap-0.5" style={{ fontSize: 7, color: "#6b7280" }}>
                    <Bell size={7} />
                    <Clock size={7} />
                  </div>
                </div>

                {/* Active module header */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMod.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="px-2 flex-1"
                  >
                    <div
                      className="mx-1 mb-2 px-2.5 py-2 rounded-xl flex items-center gap-2"
                      style={{ background: activeMod.color, color: "white" }}
                    >
                      <activeMod.icon size={12} />
                      <div className="min-w-0">
                        <div
                          style={{
                            fontSize: 7,
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            opacity: 0.8,
                          }}
                        >
                          {activeMod.preview.eyebrow}
                        </div>
                        <div style={{ fontSize: 11, fontWeight: 700 }}>
                          {activeMod.preview.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 mx-1">
                      {activeMod.preview.rows.map((row, ri) => (
                        <motion.div
                          key={`${activeMod.id}-${ri}`}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: 0.05 + ri * 0.05 }}
                          className="px-2 py-1.5 rounded-lg flex items-center justify-between"
                          style={{ background: "white" }}
                        >
                          <div style={{ fontSize: 8.5, color: "#374151", fontWeight: 500 }}>
                            {row.label}
                          </div>
                          <div className="flex items-center gap-1">
                            <span
                              className="w-1 h-1 rounded-full"
                              style={{ background: toneColor[row.tone] }}
                            />
                            <span
                              style={{
                                fontSize: 8.5,
                                fontWeight: 700,
                                color: toneColor[row.tone],
                              }}
                            >
                              {row.value}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Footer dock */}
                <div
                  className="mx-2 mb-2 mt-2 px-2 py-1.5 rounded-xl flex items-center justify-around"
                  style={{ background: "#0d1f35" }}
                >
                  {modules.map((m, i) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setActive(i);
                        setPaused(true);
                      }}
                      className="flex items-center justify-center rounded-md"
                      style={{
                        width: 18,
                        height: 18,
                        background: i === active ? m.color : "transparent",
                        color: i === active ? "white" : "rgba(255,255,255,0.55)",
                        transition: "background 0.2s, color 0.2s",
                      }}
                    >
                      <m.icon size={9} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Module nodes */}
            {modules.map((mod, i) => {
              const pos = toXY(mod.angle, DIST);
              const isActive = i === active;
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: cx + pos.x - 115,
                    top: cy + pos.y - 36,
                    width: 230,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-3 py-2.5 rounded-xl flex items-start gap-2.5"
                    style={{
                      background: "white",
                      boxShadow: isActive
                        ? `0 14px 40px -10px ${mod.color}60, 0 2px 8px rgba(0,0,0,0.04)`
                        : "0 2px 12px rgba(0,0,0,0.06)",
                      border: `1px solid ${isActive ? mod.color : "rgba(0,0,0,0.06)"}`,
                      transition: "box-shadow 0.3s, border-color 0.3s",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive ? mod.color : `${mod.color}15`,
                        color: isActive ? "white" : mod.color,
                        transition: "background 0.3s, color 0.3s",
                      }}
                    >
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <div
                        className="flex items-center gap-1.5"
                        style={{ fontSize: 13, fontWeight: 600, color: "#0d1f35" }}
                      >
                        {mod.label}
                        {isActive && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center justify-center rounded-full"
                            style={{
                              width: 12,
                              height: 12,
                              background: mod.color,
                              color: "white",
                            }}
                          >
                            <Check size={8} strokeWidth={3} />
                          </motion.span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#6b7280",
                          lineHeight: 1.4,
                          marginTop: 2,
                        }}
                      >
                        {mod.sub}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            const isActive = i === active;
            return (
              <button
                key={mod.id}
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className="p-4 rounded-2xl text-left flex items-start gap-3 transition-all"
                style={{
                  background: "white",
                  border: `1px solid ${isActive ? mod.color : "rgba(0,0,0,0.07)"}`,
                  boxShadow: isActive
                    ? `0 12px 30px -10px ${mod.color}55`
                    : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isActive ? mod.color : `${mod.color}15`,
                    color: isActive ? "white" : mod.color,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0d1f35", marginBottom: 4 }}>
                    {mod.label}
                  </div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{mod.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes cc-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
