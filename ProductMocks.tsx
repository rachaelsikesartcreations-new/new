import { motion } from "motion/react";
import { ShieldCheck, Hospital, Calendar, Sparkles, Check, AlertTriangle, Clock, Send, FileText } from "lucide-react";

const cardBase: React.CSSProperties = {
  background: "white",
  borderRadius: 16,
  boxShadow: "0 30px 60px -25px rgba(11,26,43,0.35), 0 1px 2px rgba(0,0,0,0.04)",
  border: "1px solid rgba(0,0,0,0.05)",
  overflow: "hidden",
  fontFamily: "Inter, sans-serif",
};

function MockChrome({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={cardBase} className="w-full h-full flex flex-col">
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#fafbfc" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div
          className="ml-3 px-2.5 py-0.5 rounded"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", fontSize: 11, color: "#6b7280" }}
        >
          {title}
        </div>
      </div>
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
}

export function CredentialVaultMock() {
  const creds = [
    { name: "California RN License", icon: ShieldCheck, status: "ok", expires: "Apr 2027" },
    { name: "BLS Certification", icon: ShieldCheck, status: "ok", expires: "Oct 2026" },
    { name: "Flu Vaccination 2025–26", icon: ShieldCheck, status: "warn", expires: "21 days" },
    { name: "TB Skin Test", icon: ShieldCheck, status: "ok", expires: "Mar 2027" },
    { name: "OSHA Bloodborne Pathogens", icon: ShieldCheck, status: "alert", expires: "5 days" },
  ];
  const statusColor = (s: string) =>
    s === "ok" ? "#10B981" : s === "warn" ? "#F59E0B" : "#EF4444";
  const statusBg = (s: string) =>
    s === "ok" ? "rgba(16,185,129,0.1)" : s === "warn" ? "rgba(245,158,11,0.12)" : "rgba(239,68,68,0.1)";

  return (
    <MockChrome title="repwallet.com / vault">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A" }}>
            Credential Vault
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#0b1a2b", letterSpacing: "-0.01em", marginTop: 2 }}>
            5 of 5 active
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: "rgba(16,185,129,0.1)", color: "#059669", fontSize: 11, fontWeight: 600 }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} /> 100% compliant
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {creds.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
              style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
            >
              <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: statusBg(c.status), color: statusColor(c.status) }}>
                <Icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0b1a2b" }} className="truncate">{c.name}</div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>
                  {c.status === "alert" ? "Expires in" : c.status === "warn" ? "Renew in" : "Renews"} {c.expires}
                </div>
              </div>
              {c.status === "ok" && <Check size={14} style={{ color: "#10B981" }} />}
              {c.status === "warn" && <Clock size={14} style={{ color: "#F59E0B" }} />}
              {c.status === "alert" && <AlertTriangle size={14} style={{ color: "#EF4444" }} />}
            </motion.div>
          );
        })}
      </div>
    </MockChrome>
  );
}

export function DocumentVaultMock() {
  const folders = [
    { name: "Licenses", count: 4, color: "#1F4E79" },
    { name: "Immunizations", count: 6, color: "#10B981" },
    { name: "Training", count: 9, color: "#32699A" },
    { name: "Insurance", count: 3, color: "#60A9E9" },
  ];
  const docs = [
    { name: "CA_RN_License_2027.pdf", folder: "Licenses", size: "1.2 MB", date: "Mar 12" },
    { name: "Flu_Vaccination_2025-26.pdf", folder: "Immunizations", size: "412 KB", date: "Oct 04" },
    { name: "BLS_Cert_2026.pdf", folder: "Training", size: "880 KB", date: "Feb 28" },
    { name: "Liability_COI_2026.pdf", folder: "Insurance", size: "1.0 MB", date: "Jan 15" },
  ];

  return (
    <MockChrome title="repwallet.com / documents">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A" }}>
            Document Vault
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#0b1a2b", letterSpacing: "-0.01em", marginTop: 2 }}>
            22 documents · encrypted
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md" style={{ background: "rgba(31,78,121,0.08)", color: "#1F4E79", fontSize: 11, fontWeight: 600 }}>
          <FileText size={12} /> HIPAA
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {folders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="p-2.5 rounded-lg"
            style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
          >
            <div className="w-6 h-6 rounded-md mb-2 flex items-center justify-center" style={{ background: `${f.color}1f`, color: f.color }}>
              <FileText size={12} />
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: "#0b1a2b" }} className="truncate">{f.name}</div>
            <div style={{ fontSize: 10.5, color: "#6b7280", marginTop: 1 }}>{f.count} files</div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        {docs.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
            className="flex items-center gap-3 px-3 py-2 rounded-lg"
            style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
          >
            <div className="w-7 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: "white", border: "1px solid rgba(0,0,0,0.08)", color: "#1F4E79" }}>
              <FileText size={12} />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 12, fontWeight: 600, color: "#0b1a2b" }} className="truncate">{d.name}</div>
              <div style={{ fontSize: 10.5, color: "#6b7280", marginTop: 1 }}>{d.folder} · {d.size}</div>
            </div>
            <div style={{ fontSize: 10.5, color: "#9ca3af" }} className="flex-shrink-0">{d.date}</div>
          </motion.div>
        ))}
      </div>
    </MockChrome>
  );
}

export function HospitalAccessMock() {
  const hospitals = [
    { name: "Cedar Memorial Hospital", system: "Reptrax", status: "approved" },
    { name: "St. Anne's Medical Center", system: "symplr", status: "approved" },
    { name: "Pacific Northwest General", system: "Vendormate", status: "pending" },
    { name: "Lakeside Surgical Hospital", system: "GHX", status: "approved" },
    { name: "Riverbend Children's", system: "IntelliCentrics", status: "blocked" },
  ];
  const config = {
    approved: { bg: "rgba(16,185,129,0.1)", color: "#059669", label: "Approved", dot: "#10B981" },
    pending: { bg: "rgba(245,158,11,0.12)", color: "#B45309", label: "Pending", dot: "#F59E0B" },
    blocked: { bg: "rgba(239,68,68,0.1)", color: "#B91C1C", label: "Action needed", dot: "#EF4444" },
  } as const;

  return (
    <MockChrome title="repwallet.com / access">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A" }}>
            Hospital Access
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#0b1a2b", letterSpacing: "-0.01em", marginTop: 2 }}>
            4 of 5 cleared
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md" style={{ background: "rgba(31,78,121,0.08)", color: "#1F4E79", fontSize: 11, fontWeight: 600 }}>
          <Hospital size={12} /> 12 systems
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {hospitals.map((h, i) => {
          const c = config[h.status as keyof typeof config];
          return (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
              style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
            >
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0b1a2b" }} className="truncate">{h.name}</div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>via {h.system}</div>
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full flex-shrink-0"
                style={{ background: c.bg, color: c.color, fontSize: 10.5, fontWeight: 600 }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.dot }} />
                {c.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </MockChrome>
  );
}

export function SchedulingMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const events = [
    { day: 0, top: 8, height: 24, label: "Cedar Memorial · TKA", color: "#1F4E79" },
    { day: 1, top: 18, height: 18, label: "St. Anne's · Spine", color: "#32699A" },
    { day: 2, top: 6, height: 30, label: "Pacific NW · Hip Revision", color: "#60A9E9" },
    { day: 3, top: 14, height: 20, label: "Lakeside · ACL Recon", color: "#1F4E79" },
    { day: 4, top: 10, height: 22, label: "Riverbend · Shoulder", color: "#32699A" },
    { day: 0, top: 56, height: 16, label: "Surgeon prep call", color: "#10B981" },
    { day: 2, top: 56, height: 14, label: "Coverage handoff", color: "#F59E0B" },
  ];

  return (
    <MockChrome title="repwallet.com / schedule">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A" }}>
            This week
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#0b1a2b", letterSpacing: "-0.01em", marginTop: 2 }}>
            7 cases · 0 conflicts
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md" style={{ background: "rgba(16,185,129,0.1)", color: "#059669", fontSize: 11, fontWeight: 600 }}>
          <Calendar size={12} /> Synced
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center" style={{ fontSize: 11, fontWeight: 600, color: "#6b7280" }}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2 relative" style={{ height: 180 }}>
        {days.map((d, i) => (
          <div key={d} className="relative rounded-lg" style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}>
            {[25, 50, 75].map((p) => (
              <div key={p} className="absolute left-0 right-0" style={{ top: `${p}%`, height: 1, background: "rgba(0,0,0,0.04)" }} />
            ))}
            {events
              .filter((e) => e.day === i)
              .map((e, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scaleY: 0.6 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + j * 0.05 }}
                  className="absolute left-1 right-1 rounded-md px-1.5 flex items-center"
                  style={{
                    top: `${e.top}%`,
                    height: `${e.height}%`,
                    background: e.color,
                    color: "white",
                    fontSize: 9.5,
                    fontWeight: 600,
                    lineHeight: 1.1,
                    transformOrigin: "top",
                    overflow: "hidden",
                  }}
                >
                  <span className="truncate">{e.label}</span>
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </MockChrome>
  );
}

export function AIAssistantMock() {
  const messages = [
    {
      kind: "user",
      text: "Draft a follow-up for Dr. Patel after today's TKA case.",
    },
    {
      kind: "ai",
      text:
        "Drafted. Referenced his preference for size-7 femoral component and noted the 14-day post-op check.",
      attachment: {
        title: "Re: TKA case · Cedar Memorial",
        snippet: "Hi Dr. Patel — thanks for letting me support today's case. Quick recap…",
      },
    },
    {
      kind: "ai-meta",
      text: "Logged activity to Salesforce · Created task: 14-day post-op check",
    },
  ];

  return (
    <MockChrome title="repwallet.com / assistant">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #60A9E9, #1F4E79)", color: "white" }}>
          <Sparkles size={16} />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>RepWallet Assistant</div>
          <div className="inline-flex items-center gap-1.5" style={{ fontSize: 11, color: "#10B981", fontWeight: 500 }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} /> Online
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {messages.map((m, i) => {
          if (m.kind === "user") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="self-end max-w-[80%] px-3 py-2 rounded-2xl rounded-br-sm"
                style={{ background: "#1F4E79", color: "white", fontSize: 12.5, lineHeight: 1.45 }}
              >
                {m.text}
              </motion.div>
            );
          }
          if (m.kind === "ai-meta") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{ background: "rgba(16,185,129,0.1)", color: "#059669", fontSize: 11, fontWeight: 500 }}
              >
                <Check size={11} /> {m.text}
              </motion.div>
            );
          }
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="self-start max-w-[88%] flex flex-col gap-2"
            >
              <div className="px-3 py-2 rounded-2xl rounded-bl-sm" style={{ background: "#f1f5f9", color: "#0b1a2b", fontSize: 12.5, lineHeight: 1.45 }}>
                {m.text}
              </div>
              {m.attachment && (
                <div className="px-3 py-2.5 rounded-xl" style={{ background: "white", border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <FileText size={12} style={{ color: "#1F4E79" }} />
                    <div style={{ fontSize: 11.5, fontWeight: 600, color: "#0b1a2b" }}>{m.attachment.title}</div>
                  </div>
                  <div style={{ fontSize: 11.5, color: "#6b7280", lineHeight: 1.5 }}>{m.attachment.snippet}</div>
                  <button
                    className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                    style={{ background: "#1F4E79", color: "white", fontSize: 11, fontWeight: 600 }}
                  >
                    <Send size={10} /> Send draft
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </MockChrome>
  );
}
