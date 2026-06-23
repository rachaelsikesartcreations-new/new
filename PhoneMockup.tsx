import { Calendar, Hospital, MessageSquare, FileText, Sparkles, MoreHorizontal } from "lucide-react";

export function PhoneMockup() {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 300,
        height: 620,
        background: "#0a0a0f",
        borderRadius: 44,
        border: "10px solid #1a1a2e",
        boxShadow: "0 40px 80px rgba(31,78,121,0.25), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width: 120, height: 28, background: "#0a0a0f", borderRadius: "0 0 18px 18px", zIndex: 10 }}
      />

      {/* Screen content */}
      <div className="h-full overflow-hidden" style={{ background: "#f4f6fb", padding: "36px 0 0" }}>
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 mb-4">
          <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>9:41</span>
          <div className="flex items-center gap-1">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <rect x="0" y="4" width="3" height="7" rx="1" fill="#111" />
              <rect x="4.5" y="2.5" width="3" height="8.5" rx="1" fill="#111" />
              <rect x="9" y="1" width="3" height="10" rx="1" fill="#111" />
              <rect x="13.5" y="0" width="2" height="11" rx="1" fill="#111" opacity="0.3" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path d="M7.5 2.2C5.3 2.2 3.3 3.1 1.9 4.6L0.5 3.1C2.3 1.2 4.8 0 7.5 0s5.2 1.2 7 3.1l-1.4 1.5C11.7 3.1 9.7 2.2 7.5 2.2z" fill="#111" />
              <path d="M7.5 5.5c-1.3 0-2.5.5-3.3 1.4L2.8 5.4C4 4.1 5.6 3.3 7.5 3.3s3.5.8 4.7 2.1L10.8 6.9C10 6 8.8 5.5 7.5 5.5z" fill="#111" />
              <circle cx="7.5" cy="9.5" r="1.5" fill="#111" />
            </svg>
            <div style={{ width: 24, height: 11, border: "1.5px solid #111", borderRadius: 3, padding: "1.5px 2px", display: "flex", alignItems: "center" }}>
              <div style={{ width: "80%", height: "100%", background: "#111", borderRadius: 1 }} />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="px-5 mb-4">
          <p style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>Good morning,</p>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#111", lineHeight: 1.2 }}>Alex</p>
          <p style={{ fontSize: 12, color: "#666", marginTop: 2 }}>You have 2 cases today</p>
        </div>

        {/* Next Case card */}
        <div className="mx-4 mb-3 p-3 rounded-2xl" style={{ background: "#1F4E79" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 4 }}>
            NEXT CASE
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "white" }}>8:00 AM — Ortho Procedure</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 1 }}>Memorial Hospital</div>
          <div className="flex items-center gap-1 mt-2">
            <span style={{ fontSize: 11, color: "#60A9E9", fontWeight: 600 }}>View case details →</span>
          </div>
        </div>

        {/* Credentials card */}
        <div className="mx-4 mb-3 p-3 rounded-2xl" style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 4 }}>
            CREDENTIALS
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#2E9E72" }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>All credentials verified</div>
              <div style={{ fontSize: 11, color: "#666" }}>Cleared for 3 facilities</div>
            </div>
          </div>
        </div>

        {/* Quick tiles */}
        <div className="mx-4 grid grid-cols-3 gap-2 mb-3">
          {[
            { Icon: Calendar, label: "Calendar" },
            { Icon: Hospital, label: "Hospital" },
            { Icon: MessageSquare, label: "Messages" },
            { Icon: FileText, label: "Prep Notes" },
            { Icon: Sparkles, label: "AI Assist" },
            { Icon: MoreHorizontal, label: "More" },
          ].map((tile) => (
            <div
              key={tile.label}
              className="flex flex-col items-center justify-center py-2.5 rounded-xl gap-1"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <span style={{ color: "#1F4E79", display: "inline-flex" }}><tile.Icon size={18} strokeWidth={1.75} /></span>
              <span style={{ fontSize: 10, color: "#555", fontWeight: 500 }}>{tile.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom AI bar */}
        <div className="mx-4 p-3 rounded-2xl flex items-center gap-2" style={{ background: "#1a1a2e" }}>
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#32699A" }}>
            <span style={{ fontSize: 12 }}>✦</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "white" }}>AI Assistant</div>
            <div style={{ fontSize: 10, color: "#60A9E9" }}>3 new suggestions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
