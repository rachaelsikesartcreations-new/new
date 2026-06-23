import { motion } from "motion/react";
import { Link } from "react-router";
import { Clock, ShieldCheck, Smartphone, Calendar, ArrowRight, Check } from "lucide-react";
import { PageShell, SectionHeader } from "./PageShell";
import { IMG } from "./images";
import { PhoneMockup } from "../components/PhoneMockup";
import { SmartAlertsStackMock, CasePrepMock, StatsStripMock, MorningSnapshotMock } from "./RepMocks";

const wins = [
  { icon: Clock, title: "Get 12 hours a month back", body: "Stop re-uploading the same PDF to a fifth portal. Renewals happen in two taps." },
  { icon: ShieldCheck, title: "Never miss an expiration", body: "Smart alerts at 60, 30, and 7 days — prioritized against your real case schedule." },
  { icon: Smartphone, title: "Built for the OR parking lot", body: "Mobile-first. Renew a credential between cases without opening a laptop." },
  { icon: Calendar, title: "Know your week at 6am", body: "Cases, prep notes, surgeon preferences, and coverage — all in one place." },
];

export function Reps() {
  return (
    <PageShell
      eyebrow="For Reps"
      title="The job, without the paperwork."
      subtitle="RepWallet is built for the rep standing in the OR parking lot at 6:45am — not the analyst at HQ. Renew credentials in two taps, prep cases the night before, and stop chasing portals."
      heroImage={IMG.medicalProfessionals}
    >
      {/* Mobile-first showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14 items-center">
        <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-[60px]"
              style={{ background: "radial-gradient(circle at 30% 20%, rgba(96,169,233,0.25), transparent 60%)" }}
            />
            <div className="relative">
              <PhoneMockup />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full" style={{ background: "rgba(31,78,121,0.08)" }}>
            <Smartphone size={14} style={{ color: "#1F4E79" }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F4E79" }}>
              On your phone
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#0b1a2b" }}>
            Your whole day, from the moment you grab your coffee.
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.65, color: "#4b5563" }}>
            Next case, credentials, prep notes, messages, and your AI copilot — one tap each. No more flipping between four apps and a paper folder.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { k: "Today's cases", v: "Pre-cleared" },
              { k: "Credentials", v: "100% current" },
              { k: "Prep notes", v: "Pushed last night" },
              { k: "AI suggestions", v: "3 ready to send" },
            ].map((t) => (
              <div key={t.k} className="p-3 rounded-xl" style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#32699A" }}>{t.k}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0b1a2b", marginTop: 2 }}>{t.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wins grid */}
      <div className="mt-24">
        <SectionHeader eyebrow="Why reps love it" title="The boring problems, finally solved." />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {wins.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="p-6 rounded-2xl"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center" style={{ background: "rgba(31,78,121,0.08)", color: "#1F4E79" }}>
                  <Icon size={18} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#0b1a2b", marginBottom: 6 }}>{w.title}</div>
                <div style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6 }}>{w.body}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Smart alerts + Morning snapshot side by side */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(245,158,11,0.1)" }}>
            <ShieldCheck size={14} style={{ color: "#B45309" }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#B45309" }}>
              Smart Alerts
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 2.6vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0b1a2b", lineHeight: 1.2 }}>
            The five-day warning, not the morning-of phone call.
          </h2>
          <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.65, color: "#4b5563" }}>
            Every credential is cross-referenced against your case calendar. When something's about to bite, you hear about it days ahead — and you can fix it from the alert.
          </p>
        </motion.div>
        <div>
          <SmartAlertsStackMock />
        </div>
      </div>

      {/* Stats strip */}
      <div className="mt-20">
        <StatsStripMock />
      </div>

      {/* Case prep visual */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="md:order-2">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(31,78,121,0.08)" }}>
            <Calendar size={14} style={{ color: "#1F4E79" }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F4E79" }}>
              Case Prep
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 2.6vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0b1a2b", lineHeight: 1.2 }}>
            Surgeon prefs, tray pulls, and access — assembled the night before.
          </h2>
          <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.65, color: "#4b5563" }}>
            Walk in already knowing what's needed. Auto-pulled from prior cases, surgeon preference cards, and your access status — pushed to your phone by 6pm the day before.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Surgeon preferences", "Tray pull list", "Pre-clearance status", "Direct call & message"].map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full inline-flex items-center gap-1.5" style={{ background: "white", border: "1px solid rgba(0,0,0,0.08)", fontSize: 12, color: "#374151" }}>
                <Check size={12} style={{ color: "#10B981" }} /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="md:order-1">
          <CasePrepMock />
        </div>
      </div>

      {/* Morning snapshot side by side */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(16,185,129,0.1)" }}>
            <Clock size={14} style={{ color: "#059669" }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#059669" }}>
              Morning Snapshot
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 2.6vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0b1a2b", lineHeight: 1.2 }}>
            Your whole day, before your first sip of coffee.
          </h2>
          <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.65, color: "#4b5563" }}>
            Three cases, surgeon prep, access status, and any overnight changes — all in one glance. Tap to drill into any case. Nothing else competing for your attention.
          </p>
        </div>
        <div>
          <MorningSnapshotMock />
        </div>
      </div>

      {/* Included + CTA */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-2xl" style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#32699A" }}>
            What's included
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#0b1a2b", marginTop: 8, letterSpacing: "-0.01em" }}>
            Everything an individual rep needs.
          </div>
          <ul className="mt-5 flex flex-col gap-2.5">
            {[
              "Credential & document vault",
              "Hospital access tracking across 12 systems",
              "Two-way calendar sync (Outlook, Google)",
              "Mobile-first app for iOS and Android",
              "Smart expiration alerts",
              "Case prep notes & surgeon preferences",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5" style={{ fontSize: 14, color: "#374151" }}>
                <Check size={16} style={{ color: "#10B981", marginTop: 2, flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 rounded-2xl flex flex-col justify-between" style={{ background: "#0b1a2b", color: "white" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60A9E9" }}>
              Get started
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 10, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Try RepWallet free for 14 days.
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 12, lineHeight: 1.6 }}>
              No credit card. Cancel anytime. Bring your credentials and your case calendar — we'll do the rest.
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/pricing#rep"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg"
              style={{ background: "#60A9E9", color: "#0b1a2b", fontSize: 14, fontWeight: 600 }}
            >
              See Rep pricing <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg"
              style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.2)", fontSize: 14, fontWeight: 600 }}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
