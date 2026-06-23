import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { ShieldCheck, Hospital, Calendar, FileText, MessageSquare, Sparkles, Check } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Credentials Verified",
    sub: "Stay up to date and ready to go.",
    color: "#2E9E72",
    icon: ShieldCheck,
    detail: {
      headline: "Every license, attestation, and immunization — always current.",
      body: "RepWallet pulls credential expirations from your vault and the credentialing systems your hospitals use. Smart alerts fire at 60, 30, and 7 days out.",
      bullets: ["12 credentialing systems connected", "OCR document parsing", "Auto-renewal reminders"],
    },
  },
  {
    num: 2,
    title: "Hospital Access Approved",
    sub: "Get approved at every facility you need.",
    color: "#2E9E72",
    icon: Hospital,
    detail: {
      headline: "Pre-clearance for every hospital on your route.",
      body: "Status across Reptrax, symplr, Vendormate, and 9 more — unified into a single live view. Reps know exactly what's needed before they leave the car.",
      bullets: ["Live access status", "Mobile check-in", "Per-hospital requirements"],
    },
  },
  {
    num: 3,
    title: "Case Scheduled",
    sub: "See your day, week, and what's ahead.",
    color: "#32699A",
    icon: Calendar,
    detail: {
      headline: "Cases, ORs, and reps — perfectly in sync.",
      body: "Two-way calendar sync with OR schedules and surgeon offices. Conflicts surface before they cost you a case; coverage handoffs take one tap.",
      bullets: ["Outlook & Google sync", "OR block visibility", "Coverage handoff"],
    },
  },
  {
    num: 4,
    title: "Prep Notes Ready",
    sub: "All the info you need, organized for you.",
    color: "#32699A",
    icon: FileText,
    detail: {
      headline: "Case prep, surfaced the night before.",
      body: "Surgeon preferences, tray contents, prior case notes — auto-assembled into a single brief and pushed to the rep's phone the evening before.",
      bullets: ["Surgeon preference cards", "Prior case notes", "Tray pull lists"],
    },
  },
  {
    num: 5,
    title: "Messaging Synced",
    sub: "Communicate and coordinate instantly.",
    color: "#1F4E79",
    icon: MessageSquare,
    detail: {
      headline: "One inbox for hospital, surgeon, and team.",
      body: "Threaded conversations tied to each case. Templated replies for the questions you answer twenty times a week. Mobile-first for the OR parking lot.",
      bullets: ["Case-threaded chat", "Templated replies", "Mobile push"],
    },
  },
  {
    num: 6,
    title: "AI Follow-Ups Generated",
    sub: "Never miss a follow-up. AI has your back.",
    color: "#1F4E79",
    icon: Sparkles,
    detail: {
      headline: "A copilot that closes the loop.",
      body: "After every case, your AI assistant drafts the surgeon follow-up, logs the activity to Salesforce, and queues the next-step task. You just review and send.",
      bullets: ["Drafted follow-up emails", "Salesforce / HubSpot logging", "Next-step task creation"],
    },
  },
];

const ADVANCE_MS = 3800;

export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || prefersReduced) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, ADVANCE_MS);
    return () => clearInterval(id);
  }, [inView, paused, prefersReduced]);

  const activeStep = steps[active];
  const ActiveIcon = activeStep.icon;
  const progressPct = ((active + 1) / steps.length) * 100;

  return (
    <section
      ref={ref}
      id="workflow"
      className="py-28"
      style={{ background: "white", fontFamily: "Inter, sans-serif", scrollMarginTop: 80 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
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
              THE WORKFLOW
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 600,
                color: "#0d1f35",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Your entire workflow,
              <br />
              before every case.
            </h2>
          </div>
          <button
            onClick={() => setPaused((p) => !p)}
            className="inline-flex items-center gap-2 self-start sm:self-end px-3 py-1.5 rounded-full transition-colors"
            style={{ background: "rgba(31,78,121,0.06)", color: "#1F4E79", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer" }}
            aria-label={paused ? "Resume auto-advance" : "Pause auto-advance"}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: paused ? "#9ca3af" : "#2E9E72",
                animation: paused || prefersReduced ? "none" : "wf-pulse 1.6s ease-in-out infinite",
              }}
            />
            Step {active + 1} of {steps.length}
            <span style={{ color: "#6b7280", fontWeight: 500 }}>· {paused ? "Paused — tap to resume" : "Auto"}</span>
          </button>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line — base. Spans between center of first and last column (each col is 100/6%, center at 100/12% from each edge). */}
          <div
            className="absolute top-5 h-px"
            style={{ background: "rgba(0,0,0,0.08)", left: `${100 / 12}%`, right: `${100 / 12}%` }}
          />
          {/* Connecting line — progress fill driven by active step */}
          <motion.div
            className="absolute top-5 h-[2px] -translate-y-[0.5px]"
            initial={{ width: 0 }}
            animate={{
              width: inView
                ? `calc((100% - ${100 / 6}%) * ${active / (steps.length - 1)})`
                : 0,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              left: `${100 / 12}%`,
              background: "linear-gradient(90deg, #2E9E72, #32699A 50%, #1F4E79)",
              boxShadow: "0 0 12px rgba(31,78,121,0.35)",
            }}
          />

          <div className="grid grid-cols-6 gap-4 relative">
            {steps.map((step, i) => {
              const isDone = i < active;
              const isActive = i === active;
              const Icon = step.icon;
              return (
                <button
                  key={step.num}
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  className="pt-14 text-left relative group"
                  style={{ background: "transparent", border: "none", cursor: "pointer" }}
                >
                  {/* Node dot — centered horizontally in the column, on the line */}
                  <motion.div
                    className="absolute top-5 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background: isDone || isActive ? step.color : "white",
                      border: `2px solid ${isDone || isActive ? step.color : "rgba(0,0,0,0.18)"}`,
                      boxShadow: isActive ? `0 0 0 6px ${step.color}26` : "none",
                    }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: isActive ? 1.15 : 1 } : {}}
                    transition={{ duration: 0.35 }}
                  />
                  {/* Pulsing ring on active */}
                  {isActive && !prefersReduced && (
                    <motion.div
                      className="absolute top-5 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ border: `2px solid ${step.color}` }}
                      animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.4 + i * 0.08 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center mb-3 transition-all"
                      style={{
                        background: isDone || isActive ? step.color : "white",
                        color: isDone || isActive ? "white" : "#9ca3af",
                        border: `1.5px solid ${isDone || isActive ? step.color : "rgba(0,0,0,0.12)"}`,
                        boxShadow: isActive ? `0 6px 16px -6px ${step.color}80` : "none",
                      }}
                    >
                      {isDone ? <Check size={14} strokeWidth={3} /> : <Icon size={14} />}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: isActive ? "#0d1f35" : isDone ? "#0d1f35" : "#6b7280",
                        lineHeight: 1.3,
                        marginBottom: 4,
                        transition: "color 200ms",
                      }}
                    >
                      {step.title}
                    </div>
                    <div style={{ fontSize: 13, color: isActive ? "#374151" : "#9ca3af", lineHeight: 1.5, transition: "color 200ms" }}>
                      {step.sub}
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Dynamic detail panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 rounded-2xl overflow-hidden"
            style={{ background: "#0b1a2b", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-1 origin-left"
              style={{
                background: activeStep.color,
                transform: `scaleX(${progressPct / 100})`,
                transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), background 300ms",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${activeStep.color}26`, color: activeStep.color, border: `1px solid ${activeStep.color}66` }}
                  >
                    <ActiveIcon size={26} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: activeStep.color }}>
                      Step {activeStep.num}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: "white", marginTop: 2 }}>{activeStep.title}</div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div style={{ fontSize: 18, fontWeight: 600, color: "white", lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                    {activeStep.detail.headline}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", marginTop: 8 }}>
                    {activeStep.detail.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeStep.detail.bullets.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", fontSize: 12, border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <span className="w-1 h-1 rounded-full" style={{ background: activeStep.color }} />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile vertical timeline — dynamic */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const isDone = i < active;
            const isActive = i === active;
            const Icon = step.icon;
            return (
              <button
                key={step.num}
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className="flex gap-4 relative text-left w-full"
                style={{ background: "transparent", border: "none", cursor: "pointer" }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 transition-all"
                    style={{
                      background: isDone || isActive ? step.color : "white",
                      color: isDone || isActive ? "white" : "#9ca3af",
                      border: `1.5px solid ${isDone || isActive ? step.color : "rgba(0,0,0,0.12)"}`,
                      boxShadow: isActive ? `0 0 0 5px ${step.color}26` : "none",
                    }}
                  >
                    {isDone ? <Check size={14} strokeWidth={3} /> : <Icon size={15} />}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ background: i < active ? step.color : "rgba(0,0,0,0.1)", minHeight: 40, transition: "background 300ms" }} />
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div style={{ fontSize: 15, fontWeight: 600, color: isActive || isDone ? "#0d1f35" : "#6b7280", lineHeight: 1.3, marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 13, color: isActive ? "#374151" : "#9ca3af", lineHeight: 1.5 }}>{step.sub}</div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-4 rounded-xl"
                          style={{ background: "#0b1a2b", color: "white" }}
                        >
                          <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                            {step.detail.headline}
                          </div>
                          <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", marginTop: 6 }}>
                            {step.detail.body}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {step.detail.bullets.map((b) => (
                              <span
                                key={b}
                                className="px-2 py-0.5 rounded-full"
                                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", fontSize: 11, border: "1px solid rgba(255,255,255,0.08)" }}
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes wf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
