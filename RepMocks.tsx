import { motion } from "motion/react";
import { AlertTriangle, ShieldCheck, Calendar, FileText, MapPin, Clock, Check, Sparkles, ChevronRight, Phone, MessageSquare } from "lucide-react";

const cardBase: React.CSSProperties = {
  background: "white",
  borderRadius: 16,
  boxShadow: "0 30px 60px -25px rgba(11,26,43,0.35), 0 1px 2px rgba(0,0,0,0.04)",
  border: "1px solid rgba(0,0,0,0.05)",
  overflow: "hidden",
  fontFamily: "Inter, sans-serif",
};

export function SmartAlertsStackMock() {
  const alerts = [
    {
      tone: "alert",
      icon: AlertTriangle,
      title: "TB skin test expires in 5 days",
      sub: "Renew now to stay cleared at Cedar Memorial.",
      cta: "Renew",
    },
    {
      tone: "warn",
      icon: Clock,
      title: "Flu vaccination renews in 21 days",
      sub: "Upload your 2026–27 record when available.",
      cta: "Upload",
    },
    {
      tone: "info",
      icon: ShieldCheck,
      title: "Reptrax sync complete",
      sub: "12 hospital profiles updated overnight.",
      cta: "View",
    },
  ];
  const config = {
    alert: { bg: "rgba(239,68,68,0.08)", color: "#EF4444", border: "rgba(239,68,68,0.2)" },
    warn: { bg: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "rgba(245,158,11,0.2)" },
    info: { bg: "rgba(31,78,121,0.06)", color: "#1F4E79", border: "rgba(31,78,121,0.15)" },
  } as const;

  return (
    <div style={cardBase} className="w-full">
      <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fafbfc" }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#1F4E79", color: "white" }}>
            <Sparkles size={12} />
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#0b1a2b" }}>Smart Alerts</span>
        </div>
        <span style={{ fontSize: 11, color: "#6b7280" }}>3 new</span>
      </div>
      <div className="p-4 flex flex-col gap-2.5">
        {alerts.map((a, i) => {
          const c = config[a.tone as keyof typeof config];
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-start gap-3 p-3 rounded-xl"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "white", color: c.color }}>
                <Icon size={15} />
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>{a.title}</div>
                <div style={{ fontSize: 12, color: "#4b5563", marginTop: 2, lineHeight: 1.5 }}>{a.sub}</div>
              </div>
              <button
                className="px-2.5 py-1 rounded-md flex-shrink-0"
                style={{ background: c.color, color: "white", fontSize: 11, fontWeight: 600 }}
              >
                {a.cta}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function CasePrepMock() {
  return (
    <div style={cardBase} className="w-full">
      <div className="px-5 py-3" style={{ background: "#0b1a2b", color: "white" }}>
        <div className="flex items-center justify-between mb-1">
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60A9E9" }}>
            Tomorrow · 7:30 AM
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: "rgba(16,185,129,0.18)", color: "#10B981", fontSize: 10.5, fontWeight: 600 }}>
            <Check size={10} /> Cleared
          </span>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>TKA · Right Knee</div>
        <div className="mt-1 inline-flex items-center gap-1.5" style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
          <MapPin size={12} /> Cedar Memorial · OR 4
        </div>
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A", marginBottom: 8 }}>
            Surgeon
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(31,78,121,0.1)", color: "#1F4E79", fontWeight: 700, fontSize: 13 }}>
              RP
            </div>
            <div className="flex-1">
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>Dr. Rohan Patel</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>Orthopedic Surgery · 38 prior cases</div>
            </div>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#f1f5f9", color: "#1F4E79" }}>
              <Phone size={14} />
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#f1f5f9", color: "#1F4E79" }}>
              <MessageSquare size={14} />
            </button>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A", marginBottom: 8 }}>
            Preferences
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Size 7 femoral", "Cemented", "Tourniquet 280", "Bilateral drape"].map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 rounded-full"
                style={{ background: "#f1f5f9", color: "#0b1a2b", fontSize: 11.5, fontWeight: 500 }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A" }}>
              Tray pull list
            </div>
            <span style={{ fontSize: 11, color: "#10B981", fontWeight: 600 }}>4 of 4 ready</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              "Primary tray · TKA-12B",
              "Femoral sizers · 5–9",
              "Tibial baseplate · CR",
              "Cement & mixer kit",
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg"
                style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
              >
                <div className="w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: "#10B981", color: "white" }}>
                  <Check size={10} strokeWidth={3} />
                </div>
                <span style={{ fontSize: 12, color: "#0b1a2b" }}>{t}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          className="mt-1 py-2.5 rounded-lg flex items-center justify-center gap-2"
          style={{ background: "#1F4E79", color: "white", fontSize: 13, fontWeight: 600 }}
        >
          <FileText size={13} /> Open full case brief <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
}

export function StatsStripMock() {
  const stats = [
    { value: "12 hrs", label: "Saved per rep / month", color: "#10B981" },
    { value: "98%", label: "Credential compliance", color: "#1F4E79" },
    { value: "0", label: "Cases bumped last quarter", color: "#60A9E9" },
    { value: "<2 min", label: "Average renewal time", color: "#32699A" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="p-5 rounded-2xl"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: s.color, letterSpacing: "-0.02em" }}>{s.value}</div>
          <div style={{ fontSize: 12.5, color: "#4b5563", marginTop: 4 }}>{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export function MorningSnapshotMock() {
  return (
    <div style={cardBase} className="w-full">
      <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fafbfc" }}>
        <div className="flex items-center gap-2">
          <Calendar size={13} style={{ color: "#1F4E79" }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#0b1a2b" }}>Thursday, March 5</span>
        </div>
        <span style={{ fontSize: 11, color: "#10B981", fontWeight: 600 }}>3 cases · 0 conflicts</span>
      </div>
      <div className="p-4 flex flex-col gap-2">
        {[
          { time: "7:30a", title: "TKA · Cedar Memorial", color: "#1F4E79", status: "Cleared" },
          { time: "10:15a", title: "Spine · St. Anne's", color: "#32699A", status: "Cleared" },
          { time: "2:45p", title: "Hip Revision · Pacific NW", color: "#60A9E9", status: "Cleared" },
        ].map((c, i) => (
          <motion.div
            key={c.time}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0b1a2b", width: 44 }}>{c.time}</div>
            <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: c.color }} />
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }} className="truncate">{c.title}</div>
              <div className="inline-flex items-center gap-1 mt-0.5" style={{ fontSize: 11, color: "#10B981", fontWeight: 500 }}>
                <Check size={10} /> {c.status}
              </div>
            </div>
            <ChevronRight size={14} style={{ color: "#9ca3af" }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
