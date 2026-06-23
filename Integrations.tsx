import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  Package,
  Stethoscope,
  ClipboardList,
  GraduationCap,
  UserCheck,
  Pause,
  Play,
  ArrowDownUp,
  Check,
} from "lucide-react";

const platforms = [
  {
    id: "symplr",
    label: "symplr",
    color: "#1F4E79",
    icon: ShieldCheck,
    kind: "Credentialing",
    detail: "Pushed 14 docs · 2 min ago",
  },
  {
    id: "ghx",
    label: "GHX Vendormate",
    color: "#32699A",
    icon: Package,
    kind: "Vendor mgmt",
    detail: "Synced 8 facilities · live",
  },
  {
    id: "healthtrust",
    label: "HealthTrust",
    color: "#2E9E72",
    icon: Stethoscope,
    kind: "GPO access",
    detail: "Approved at 3 systems",
  },
  {
    id: "ortrax",
    label: "ORtrax",
    color: "#E08A2B",
    icon: ClipboardList,
    kind: "OR scheduling",
    detail: "12 cases mirrored today",
  },
  {
    id: "hipaa",
    label: "HIPAA Training",
    color: "#C0432F",
    icon: GraduationCap,
    kind: "Compliance",
    detail: "Cert refreshed last week",
  },
  {
    id: "bg",
    label: "Background Check",
    color: "#374151",
    icon: UserCheck,
    kind: "Verification",
    detail: "Clear · valid 11 mo",
  },
];

const RADIUS = 210;
const ADVANCE_MS = 2400;

function toPlatformXY(i: number, total: number, radius: number) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
}

export function Integrations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || prefersReduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % platforms.length), ADVANCE_MS);
    return () => clearInterval(t);
  }, [inView, paused, prefersReduced]);

  const cx = 300;
  const cy = 300;
  const activeP = platforms[active];

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "white", fontFamily: "Inter, sans-serif" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(31,78,121,0.05), transparent 60%)",
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
            ECOSYSTEM
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 600,
              color: "#0d1f35",
              letterSpacing: "-0.02em",
            }}
          >
            Built to connect.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6b7280",
              marginTop: 12,
              maxWidth: 520,
              margin: "12px auto 0",
              lineHeight: 1.6,
            }}
          >
            RepWallet is designed to work alongside the credentialing platforms reps and
            facilities already use — reducing friction, not adding to it.
          </p>

          <button
            onClick={() => setPaused((p) => !p)}
            className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
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
                animation: paused ? "none" : "int-pulse 1.6s ease-in-out infinite",
              }}
            />
            {paused ? (
              <>
                <Play size={11} /> Paused — click to resume
              </>
            ) : (
              <>
                <Pause size={11} /> Live sync · click to pause
              </>
            )}
          </button>
        </motion.div>

        {/* Desktop diagram */}
        <div className="hidden md:flex justify-center">
          <div className="relative" style={{ width: 600, height: 600 }}>
            {/* Concentric orbit rings */}
            {[0, 1, 2].map((r) => (
              <div
                key={r}
                aria-hidden
                className="absolute rounded-full"
                style={{
                  left: cx - (RADIUS - r * 50),
                  top: cy - (RADIUS - r * 50),
                  width: (RADIUS - r * 50) * 2,
                  height: (RADIUS - r * 50) * 2,
                  border: `1px dashed rgba(31,78,121,${0.12 - r * 0.03})`,
                }}
              />
            ))}

            {/* Rotating ring marks */}
            {!prefersReduced && (
              <motion.div
                aria-hidden
                className="absolute"
                style={{
                  left: cx - RADIUS,
                  top: cy - RADIUS,
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: 0,
                      width: 2,
                      height: 6,
                      background: "rgba(31,78,121,0.15)",
                      transformOrigin: `1px ${RADIUS}px`,
                      transform: `rotate(${i * 10}deg)`,
                    }}
                  />
                ))}
              </motion.div>
            )}

            <svg
              className="absolute inset-0"
              width="600"
              height="600"
              viewBox="0 0 600 600"
              style={{ overflow: "visible" }}
            >
              {platforms.map((p, i) => {
                const pos = toPlatformXY(i, platforms.length, RADIUS);
                const isActive = i === active;
                return (
                  <g key={p.id}>
                    <motion.line
                      x1={cx}
                      y1={cy}
                      x2={cx + pos.x}
                      y2={cy + pos.y}
                      stroke={p.color}
                      strokeOpacity={isActive ? 0.65 : 0.18}
                      strokeWidth={isActive ? 2 : 1.5}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                    />
                    {/* Constant slow packets on every line */}
                    {!prefersReduced && inView && (
                      <>
                        <motion.circle
                          r="2.5"
                          fill={p.color}
                          opacity={0.55}
                          animate={{
                            cx: [cx, cx + pos.x],
                            cy: [cy, cy + pos.y],
                          }}
                          transition={{
                            duration: 3.4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.4,
                          }}
                        />
                        <motion.circle
                          r="2"
                          fill={p.color}
                          opacity={0.4}
                          animate={{
                            cx: [cx + pos.x, cx],
                            cy: [cy + pos.y, cy],
                          }}
                          transition={{
                            duration: 4.2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.4 + 1.2,
                          }}
                        />
                      </>
                    )}
                    {/* Active beam packet */}
                    {isActive && !prefersReduced && (
                      <motion.circle
                        r="5"
                        fill={p.color}
                        initial={{ cx, cy, opacity: 0 }}
                        animate={{
                          cx: cx + pos.x,
                          cy: cy + pos.y,
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        style={{ filter: `drop-shadow(0 0 6px ${p.color})` }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Halo around hub */}
            {!prefersReduced && (
              <motion.div
                aria-hidden
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: cx - 70,
                  top: cy - 70,
                  width: 140,
                  height: 140,
                  border: `2px solid ${activeP.color}`,
                }}
                animate={{ opacity: [0.45, 0, 0.45], scale: [0.85, 1.2, 0.85] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            {/* Center — RepWallet hub */}
            <motion.div
              className="absolute flex flex-col items-center justify-center"
              style={{
                left: cx - 64,
                top: cy - 64,
                width: 128,
                height: 128,
                borderRadius: "50%",
                background: "#1F4E79",
                boxShadow: `0 14px 40px rgba(31,78,121,0.35), 0 0 0 6px ${activeP.color}20`,
                transition: "box-shadow 0.5s ease",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ArrowDownUp size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.01em",
                  marginTop: 4,
                }}
              >
                RepWallet
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeP.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 4,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    maxWidth: 104,
                    paddingInline: 8,
                    lineHeight: 1.3,
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                  }}
                >
                  Syncing · {activeP.label}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Platform nodes */}
            {platforms.map((p, i) => {
              const pos = toPlatformXY(i, platforms.length, RADIUS);
              const isActive = i === active;
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: cx + pos.x - 78,
                    top: cy + pos.y - 30,
                    width: 156,
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
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
                    className="px-3 py-2.5 rounded-xl flex items-center gap-2.5"
                    style={{
                      background: "white",
                      border: `1.5px solid ${isActive ? p.color : `${p.color}22`}`,
                      boxShadow: isActive
                        ? `0 14px 40px -10px ${p.color}66, 0 2px 8px rgba(0,0,0,0.04)`
                        : "0 2px 8px rgba(0,0,0,0.06)",
                      transition: "box-shadow 0.3s, border-color 0.3s",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 relative"
                      style={{
                        background: isActive ? p.color : `${p.color}15`,
                        color: isActive ? "white" : p.color,
                        transition: "background 0.3s, color 0.3s",
                      }}
                    >
                      <Icon size={15} />
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full"
                          style={{
                            width: 13,
                            height: 13,
                            background: "#2E9E72",
                            color: "white",
                            border: "2px solid white",
                          }}
                        >
                          <Check size={7} strokeWidth={3.5} />
                        </motion.span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0d1f35" }}>
                        {p.label}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 500,
                          color: isActive ? p.color : "#9ca3af",
                          marginTop: 1,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {isActive ? p.detail : p.kind}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            const isActive = i === active;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className="p-3 rounded-xl flex items-center gap-3 text-left"
                style={{
                  background: "white",
                  border: `1.5px solid ${isActive ? p.color : `${p.color}22`}`,
                  boxShadow: isActive
                    ? `0 10px 24px -10px ${p.color}55`
                    : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isActive ? p.color : `${p.color}15`,
                    color: isActive ? "white" : p.color,
                  }}
                >
                  <Icon size={15} />
                </div>
                <div className="min-w-0">
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0d1f35" }}>
                    {p.label}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: isActive ? p.color : "#9ca3af",
                      fontWeight: 500,
                      marginTop: 1,
                    }}
                  >
                    {isActive ? p.detail : p.kind}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p style={{ fontSize: 13, color: "#9ca3af", textAlign: "center", marginTop: 32 }}>
          Platform connectivity is under active development. Integrations shown represent
          the ecosystem RepWallet is building toward.
        </p>
      </div>

      <style>{`
        @keyframes int-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
