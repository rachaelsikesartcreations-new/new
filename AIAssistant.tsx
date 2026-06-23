import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { BellRing, Mail, Zap, Workflow, type LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; sub: string }[] = [
  {
    icon: BellRing,
    title: "Smart Reminders",
    sub: "Never miss a follow-up or expiration",
  },
  {
    icon: Mail,
    title: "Follow-Up Generation",
    sub: "AI drafts personalized follow-ups for you",
  },
  {
    icon: Zap,
    title: "Priority Insights",
    sub: "Focus on what matters most today",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    sub: "Less manual work, more time for customers",
  },
];

const MESSAGE_TEXT = "You have 3 facilities requiring updated credentials.";

function TypewriterMessage({ active }: { active: boolean }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < MESSAGE_TEXT.length) {
        setDisplayed(MESSAGE_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <span>
      {displayed}
      {active && displayed.length < MESSAGE_TEXT.length && (
        <span className="inline-block w-0.5 h-3.5 ml-0.5 align-middle" style={{ background: "#60A9E9", animation: "blink 0.8s step-end infinite" }} />
      )}
    </span>
  );
}

export function AIAssistant() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "#080e1a", fontFamily: "Inter, sans-serif" }}
    >
      {/* Breathing glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(31,78,121,0.3) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#60A9E9",
              marginBottom: 12,
            }}
          >
            AI THAT WORKS FOR YOU
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 600,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Your AI assistant,
            <br />
            always working behind the scenes.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(96,169,233,0.12)", color: "#60A9E9", border: "1px solid rgba(96,169,233,0.2)" }}
                >
                  <f.icon size={18} strokeWidth={1.75} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "white", marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{f.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* AI message card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(31,78,121,0.18)",
                border: "1px solid rgba(96,169,233,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* AI avatar row */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1F4E79, #32699A)" }}
                >
                  <span style={{ color: "white", fontSize: 16 }}>✦</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "white" }}>RepWallet AI</div>
                  <div style={{ fontSize: 11, color: "#60A9E9" }}>3 new suggestions</div>
                </div>
                <div
                  className="ml-auto w-2 h-2 rounded-full"
                  style={{ background: "#2E9E72" }}
                />
              </div>

              {/* Message bubble */}
              <div
                className="p-4 rounded-xl mb-5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                  <TypewriterMessage active={inView} />
                </p>
              </div>

              {/* Action */}
              <div className="flex items-center gap-3">
                <button
                  className="px-4 py-2 rounded-lg text-sm transition-all duration-150"
                  style={{ background: "#1F4E79", color: "white", fontWeight: 600, border: "none" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#32699A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1F4E79")}
                >
                  Review Now
                </button>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Dismiss</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
