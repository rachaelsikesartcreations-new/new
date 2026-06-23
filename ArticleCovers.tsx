import { motion } from "motion/react";
import { Bell, ShieldCheck, Clock, FileText, AlertTriangle, Check, Wallet, Hospital, Calendar } from "lucide-react";

type CoverProps = { variant?: "card" | "hero" };

export function ArticleCover({ slug, variant = "card" }: { slug: string; variant?: "card" | "hero" }) {
  switch (slug) {
    case "smart-expiration-alerts":
      return <SmartAlertsCover variant={variant} />;
    case "hidden-cost-of-credentialing-friction":
      return <FrictionCostCover variant={variant} />;
    case "why-were-building-repwallet":
      return <FoundingCover variant={variant} />;
    default:
      return null;
  }
}

function CoverFrame({
  children,
  background,
  variant,
}: {
  children: React.ReactNode;
  background: string;
  variant: "card" | "hero";
}) {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ background }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className={`relative w-full h-full flex items-center justify-center ${variant === "hero" ? "p-10" : "p-6"}`}>
        {children}
      </div>
    </div>
  );
}

function SmartAlertsCover({ variant }: CoverProps) {
  const rows = [
    { label: "ACLS Certification", days: 7, tone: "danger", color: "#E08A2B" },
    { label: "Hospital Annual Attestation", days: 30, tone: "warn", color: "#60A9E9" },
    { label: "TB Screening", days: 60, tone: "ok", color: "#2E9E72" },
  ];
  return (
    <CoverFrame
      background="linear-gradient(135deg, #0b1a2b 0%, #1F4E79 100%)"
      variant={variant!}
    >
      <div className="relative" style={{ width: "min(100%, 420px)" }}>
        <motion.div
          aria-hidden
          className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle, rgba(224,138,43,0.5), transparent 70%)" }}
        />
        <div
          className="rounded-2xl p-5"
          style={{
            background: "white",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "#1F4E79", color: "white" }}
              >
                <Bell size={14} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#0b1a2b" }}>Smart Alerts</div>
            </div>
            <div
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full"
              style={{ background: "rgba(46,158,114,0.12)", border: "1px solid rgba(46,158,114,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2E9E72" }} />
              <span style={{ fontSize: 10, fontWeight: 600, color: "#1f7a55" }}>Live</span>
            </div>
          </div>
          <div className="space-y-2">
            {rows.map((r, i) => (
              <div
                key={r.label}
                className="flex items-center gap-3 p-2.5 rounded-lg"
                style={{ background: "#f7fafc", border: "1px solid rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: `${r.color}18`, color: r.color }}
                >
                  {r.tone === "danger" ? <AlertTriangle size={14} /> : r.tone === "warn" ? <Clock size={14} /> : <ShieldCheck size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#0b1a2b" }} className="truncate">{r.label}</div>
                  <div style={{ fontSize: 10, color: "#6b7280" }}>Expires in {r.days} days</div>
                </div>
                <div
                  className="px-2 py-0.5 rounded-full"
                  style={{
                    background: r.color,
                    color: "white",
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {r.days}d
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 rounded-xl px-3 py-2 flex items-center gap-2"
          style={{
            background: "white",
            boxShadow: "0 12px 30px -8px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: "#E08A2B", color: "white" }}
          >
            <Bell size={11} />
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#0b1a2b" }}>Renew in 2 taps</div>
            <div style={{ fontSize: 9, color: "#6b7280" }}>From the car · 6:42 am</div>
          </div>
        </motion.div>
      </div>
    </CoverFrame>
  );
}

function FrictionCostCover({ variant }: CoverProps) {
  const stats = [
    { v: "6.4h", l: "per rep / week" },
    { v: "4.1h", l: "admin overhead" },
    { v: "11%", l: "lost a case" },
  ];
  return (
    <CoverFrame
      background="linear-gradient(135deg, #0d1f35 0%, #1f7a55 100%)"
      variant={variant!}
    >
      <div className="relative" style={{ width: "min(100%, 460px)" }}>
        {/* Clock-style donut */}
        <div className="flex items-center gap-5">
          <div className="relative flex-shrink-0">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#E08A2B"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="264"
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 95 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                transform="rotate(-90 50 50)"
              />
              <text
                x="50"
                y="48"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="700"
                style={{ letterSpacing: "-0.02em" }}
              >
                64%
              </text>
              <text x="50" y="64" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontWeight="600">
                IS ADMIN
              </text>
            </svg>
          </div>
          <div className="flex-1 space-y-2">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-lg px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span style={{ fontSize: 18, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>{s.v}</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.65)" }}>{s.l}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paper stack */}
        <motion.div
          className="absolute -bottom-4 -right-4 flex flex-col gap-1"
          initial={{ rotate: -8, y: 0 }}
          animate={{ rotate: [-8, -6, -8], y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-md flex items-center gap-1.5 px-2.5 py-1.5"
              style={{
                background: "white",
                width: 110,
                marginLeft: i * 6,
                opacity: 1 - i * 0.15,
                boxShadow: "0 8px 20px -8px rgba(0,0,0,0.4)",
              }}
            >
              <FileText size={11} style={{ color: "#1F4E79" }} />
              <div className="h-1.5 rounded-full flex-1" style={{ background: "rgba(31,78,121,0.15)" }} />
            </div>
          ))}
        </motion.div>
      </div>
    </CoverFrame>
  );
}

function FoundingCover({ variant }: CoverProps) {
  return (
    <CoverFrame
      background="linear-gradient(135deg, #0b1a2b 0%, #32699A 100%)"
      variant={variant!}
    >
      <div className="relative" style={{ width: "min(100%, 460px)" }}>
        {/* Hospital with sunrise */}
        <div
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #1f3a5f 0%, #0b1a2b 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            minHeight: 220,
          }}
        >
          {/* Sun glow */}
          <motion.div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              top: -40,
              right: -40,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(224,138,43,0.55), rgba(96,169,233,0.15) 50%, transparent 75%)",
            }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Time stamp */}
          <div
            className="relative inline-flex items-center gap-1.5 px-2 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Clock size={10} style={{ color: "#60A9E9" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "white" }}>6:42 AM · OR PARKING LOT</span>
          </div>

          {/* Hospital silhouette */}
          <div className="mt-6 relative flex items-end justify-center gap-1">
            {[40, 65, 50, 80, 95, 70, 55, 45].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: h }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.05 }}
                style={{
                  width: 22,
                  background: i === 4 ? "rgba(96,169,233,0.85)" : "rgba(255,255,255,0.18)",
                  borderRadius: "3px 3px 0 0",
                }}
              />
            ))}
            <Hospital
              size={18}
              className="absolute"
              style={{ color: "white", left: "calc(50% + 22px)", bottom: 80 }}
            />
          </div>
        </div>

        {/* Floating wallet card */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 -right-3 rounded-xl px-3 py-2.5"
          style={{
            background: "white",
            boxShadow: "0 18px 40px -10px rgba(0,0,0,0.5)",
            width: 180,
          }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: "#1F4E79", color: "white" }}
            >
              <Wallet size={11} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#0b1a2b" }}>RepWallet</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check size={10} style={{ color: "#2E9E72" }} strokeWidth={3} />
            <span style={{ fontSize: 10, color: "#4b5563" }}>Cleared · 12 credentials</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <Calendar size={10} style={{ color: "#32699A" }} />
            <span style={{ fontSize: 10, color: "#4b5563" }}>Ready for 7:00 AM case</span>
          </div>
        </motion.div>
      </div>
    </CoverFrame>
  );
}
