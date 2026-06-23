import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
  Clock,
  Users,
  Building2,
  Phone,
  Mail,
  PlayCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "30-minute personalized walkthrough",
    body: "Tailored to your team size, hospital systems, and current credentialing stack.",
  },
  {
    icon: ShieldCheck,
    title: "See your actual portals connected",
    body: "We map symplr, Reptrax, Vendormate, and your CRM in the demo — not generic screens.",
  },
  {
    icon: Calendar,
    title: "Walk away with a rollout plan",
    body: "Concrete week-by-week plan with import scope, training, and go-live target.",
  },
];

const trustStats = [
  { value: "12 hrs", label: "Saved per rep monthly" },
  { value: "98%", label: "Credential compliance" },
  { value: "< 14 days", label: "Average time to live" },
  { value: "4.9/5", label: "Rep satisfaction" },
];

const logos = ["Vertex Ortho", "Atlas Spine", "Meridian Med", "NorthCoast Surgical", "Pinnacle Cardio", "Helix Devices"];

export function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [teamSize, setTeamSize] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f8f9fb" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0b1a2b 0%, #1F4E79 60%, #32699A 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 10%, rgba(96,169,233,0.25), transparent 50%), radial-gradient(circle at 10% 90%, rgba(46,158,114,0.15), transparent 50%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left: copy + form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <PlayCircle size={13} style={{ color: "#60A9E9" }} />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                >
                  Live Product Demo
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                }}
              >
                See RepWallet running on
                <br />
                <span style={{ color: "#60A9E9" }}>your portals.</span>
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.78)",
                  marginTop: 18,
                  maxWidth: 540,
                  lineHeight: 1.6,
                }}
              >
                30 minutes. Your hospital systems, your CRM, your case calendar — mapped live. Leave with a concrete rollout plan and a free 14-day trial waiting.
              </p>

              {/* Trust strip */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {trustStats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2, lineHeight: 1.4 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              {/* Header bar */}
              <div className="px-6 py-4 flex items-center justify-between" style={{ background: "#0b1a2b" }}>
                <div className="flex items-center gap-2">
                  <Calendar size={14} style={{ color: "#60A9E9" }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "white" }}>Book your demo</span>
                </div>
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(46,158,114,0.18)", color: "#34d399", fontSize: 10.5, fontWeight: 600 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34d399" }} />
                  Free · No card
                </span>
              </div>

              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-6">
                    <div
                      className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4"
                      style={{ background: "rgba(46,158,114,0.12)", color: "#10B981" }}
                    >
                      <Check size={28} strokeWidth={3} />
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.01em" }}>
                      We'll be in touch within 1 business hour.
                    </div>
                    <div style={{ fontSize: 14, color: "#6b7280", marginTop: 8, lineHeight: 1.6 }}>
                      A real human (not a sequence) will reach out to confirm your demo slot.
                    </div>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg"
                      style={{ background: "#1F4E79", color: "white", fontSize: 13, fontWeight: 600 }}
                    >
                      Back to home <ArrowRight size={13} />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="First name" name="first" placeholder="Alex" />
                      <Field label="Last name" name="last" placeholder="Rivera" />
                    </div>
                    <Field label="Work email" name="email" type="email" placeholder="alex@deviceco.com" />
                    <Field label="Company" name="company" placeholder="Vertex Orthopedics" icon={Building2} />

                    <div>
                      <label
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "#6b7280",
                          marginBottom: 6,
                          display: "block",
                        }}
                      >
                        Team size
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["1–10", "11–50", "51–200", "200+"].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setTeamSize(s)}
                            className="py-2 rounded-lg"
                            style={{
                              background: teamSize === s ? "#1F4E79" : "white",
                              color: teamSize === s ? "white" : "#374151",
                              border: `1px solid ${teamSize === s ? "#1F4E79" : "rgba(0,0,0,0.1)"}`,
                              fontSize: 12.5,
                              fontWeight: 600,
                              transition: "all 0.15s",
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-2 flex items-center justify-center gap-2 py-3 rounded-lg"
                      style={{
                        background: "#1F4E79",
                        color: "white",
                        fontSize: 14,
                        fontWeight: 600,
                        boxShadow: "0 10px 30px -8px rgba(31,78,121,0.5)",
                      }}
                    >
                      Book my demo <ArrowRight size={15} />
                    </button>

                    <div
                      className="flex items-center justify-center gap-1.5 mt-1"
                      style={{ fontSize: 11.5, color: "#9ca3af" }}
                    >
                      <Clock size={11} /> Avg. response time: under 1 business hour
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo bar */}
      <section className="py-10 border-y" style={{ borderColor: "rgba(0,0,0,0.06)", background: "white" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9ca3af",
              textAlign: "center",
              marginBottom: 18,
            }}
          >
            Trusted by device teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {logos.map((l) => (
              <span key={l} style={{ fontSize: 15, fontWeight: 700, color: "#9ca3af", letterSpacing: "-0.01em" }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll see */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
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
                What you'll see
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.4vw, 40px)",
                  fontWeight: 700,
                  color: "#0b1a2b",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                Not a generic pitch deck. Your stack, live.
              </h2>
              <p style={{ marginTop: 16, fontSize: 16, color: "#4b5563", lineHeight: 1.65 }}>
                Send us your portal list before the call and we'll come in with a working dashboard mapped to your hospitals — no sandbox slides, no "imagine if".
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(31,78,121,0.08)", color: "#1F4E79" }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: "#0b1a2b" }}>{b.title}</div>
                        <div style={{ fontSize: 14, color: "#4b5563", marginTop: 3, lineHeight: 1.55 }}>{b.body}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mock calendar preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className="absolute -inset-6 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(96,169,233,0.18), rgba(31,78,121,0.06))",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  boxShadow: "0 30px 60px -25px rgba(11,26,43,0.35), 0 1px 2px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ background: "#0b1a2b", color: "white" }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={14} style={{ color: "#60A9E9" }} />
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Pick a time this week</span>
                  </div>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>PT · 30 min</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {["Mon Jun 1", "Tue Jun 2", "Wed Jun 3", "Thu Jun 4", "Fri Jun 5"].map((d, i) => (
                      <div
                        key={d}
                        className="text-center py-2 rounded-lg"
                        style={{
                          background: i === 2 ? "#1F4E79" : "#f8fafc",
                          color: i === 2 ? "white" : "#0b1a2b",
                          border: "1px solid rgba(0,0,0,0.05)",
                        }}
                      >
                        <div style={{ fontSize: 10, fontWeight: 600, opacity: 0.7 }}>{d.split(" ")[0]}</div>
                        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{d.split(" ")[2]}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { t: "9:00 AM", taken: false },
                      { t: "10:30 AM", taken: true },
                      { t: "1:00 PM", taken: false, hot: true },
                      { t: "2:30 PM", taken: false },
                      { t: "3:30 PM", taken: true },
                      { t: "4:30 PM", taken: false },
                    ].map((slot, i) => (
                      <motion.div
                        key={slot.t}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                        className="py-2.5 rounded-lg text-center"
                        style={{
                          background: slot.hot ? "rgba(46,158,114,0.12)" : slot.taken ? "#f1f5f9" : "white",
                          border: `1px solid ${slot.hot ? "rgba(46,158,114,0.4)" : "rgba(0,0,0,0.06)"}`,
                          color: slot.taken ? "#9ca3af" : slot.hot ? "#1f7a55" : "#0b1a2b",
                          fontSize: 13,
                          fontWeight: 600,
                          textDecoration: slot.taken ? "line-through" : "none",
                          opacity: slot.taken ? 0.6 : 1,
                        }}
                      >
                        {slot.t}
                        {slot.hot && (
                          <div style={{ fontSize: 9, fontWeight: 700, color: "#10B981", marginTop: 1, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                            Recommended
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div
                    className="mt-5 p-3 rounded-xl flex items-center gap-3"
                    style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.05)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "#1F4E79", color: "white", fontSize: 12, fontWeight: 700 }}
                    >
                      JT
                    </div>
                    <div className="min-w-0 flex-1">
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>Jordan Tran · Solutions</div>
                      <div style={{ fontSize: 11.5, color: "#6b7280" }}>Hosts ortho + spine demos · 4.9 avg rating</div>
                    </div>
                    <Check size={16} style={{ color: "#10B981" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-10 rounded-3xl relative"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #eef4fb 100%)",
              border: "1px solid rgba(31,78,121,0.08)",
            }}
          >
            <div
              className="absolute -top-3 left-8 px-3 py-1 rounded-full"
              style={{ background: "#1F4E79", color: "white", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em" }}
            >
              CUSTOMER · VERTEX ORTHOPEDICS
            </div>
            <p
              style={{
                fontSize: "clamp(20px, 2.4vw, 26px)",
                fontWeight: 500,
                color: "#0b1a2b",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              "The demo wasn't a slide deck — they had our 12 hospitals already plugged in. Two weeks later we were live across the whole team. I've never had a vendor demo that actually delivered on what they showed."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: "#1F4E79", color: "white", fontWeight: 700, fontSize: 14 }}
              >
                MR
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0b1a2b" }}>Maya Reyes</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>VP of Field Operations, Vertex Orthopedics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            style={{
              fontSize: "clamp(24px, 2.8vw, 32px)",
              fontWeight: 700,
              color: "#0b1a2b",
              letterSpacing: "-0.02em",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Questions before you book?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: "How long is the demo?",
                a: "30 minutes. Tight, focused, and we save 10 minutes at the end for your team's questions.",
              },
              {
                q: "Do I need to prep anything?",
                a: "Just send your portal list and rough team size when you book. We do the mapping before we meet.",
              },
              {
                q: "Is the trial really free?",
                a: "Yes — 14 days, no credit card, no auto-renew. Bring your real credentials and case calendar.",
              },
              {
                q: "Who from my team should join?",
                a: "Whoever owns rep ops or credentialing, plus 1–2 reps. We can also run a separate session for IT.",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="p-5 rounded-xl"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div style={{ fontSize: 14.5, fontWeight: 600, color: "#0b1a2b", marginBottom: 6 }}>{f.q}</div>
                <div style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.6 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "#0b1a2b" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(96,169,233,0.2), transparent 50%), radial-gradient(circle at 80% 50%, rgba(46,158,114,0.12), transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Two weeks from now, your reps could be done chasing portals.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              marginTop: 16,
              maxWidth: 560,
              margin: "16px auto 0",
              lineHeight: 1.6,
            }}
          >
            Book a 30-minute demo and we'll show you exactly how. No fluff, no follow-up sequence — just a real plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg"
              style={{
                background: "#60A9E9",
                color: "#0b1a2b",
                fontSize: 15,
                fontWeight: 700,
                boxShadow: "0 14px 40px -10px rgba(96,169,233,0.6)",
              }}
            >
              Book my demo <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              <Mail size={15} /> Email sales instead
            </Link>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <Users size={13} /> 30-min walkthrough
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={13} /> SOC 2 · HIPAA
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} /> Real humans only
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon?: typeof Building2;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#6b7280",
          marginBottom: 6,
          display: "block",
        }}
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={15}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
            }}
          />
        )}
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="w-full rounded-lg outline-none transition-colors"
          style={{
            padding: Icon ? "10px 12px 10px 36px" : "10px 12px",
            border: "1px solid rgba(0,0,0,0.12)",
            fontSize: 14,
            color: "#0b1a2b",
            background: "white",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#1F4E79")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
        />
      </div>
    </div>
  );
}
