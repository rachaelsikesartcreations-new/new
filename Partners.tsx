import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import {
  Building2,
  ShieldCheck,
  BarChart3,
  Lock,
  Check,
  ArrowRight,
  Users,
  Hospital,
  Factory,
  TrendingUp,
  Clock,
  FileCheck2,
  Sparkles,
  Quote,
  Activity,
  MapPin,
  CircleDot,
  Globe,
} from "lucide-react";
import { PageShell, SectionHeader } from "./PageShell";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { IMG } from "./images";

const partnerTypes = [
  {
    icon: Factory,
    label: "Distributors",
    headline: "Roll out one operational system across every region.",
    body: "Replace credentialing spreadsheets and one-off rep workflows with a single platform your whole distributorship runs on.",
    bullets: ["Multi-region team management", "Per-region credentialing visibility", "Onboarding in days, not weeks"],
    color: "#1F4E79",
  },
  {
    icon: Building2,
    label: "Manufacturers",
    headline: "Equip your field force with the tools hospitals expect.",
    body: "Give your reps and 1099 partners a credential wallet that meets every hospital system's policy — without your ops team chasing paperwork.",
    bullets: ["1099 + W2 unified", "Hospital-policy aware", "Brand-controlled rep app"],
    color: "#2E9E72",
  },
  {
    icon: Hospital,
    label: "Hospital Systems",
    headline: "Know who is in your OR before they arrive.",
    body: "Verify vendor credentials, training, and case schedules through one connection — no matter which credentialing platform a rep uses.",
    bullets: ["Joint Commission ready", "Live vendor visibility", "Reduces case bumps to near zero"],
    color: "#32699A",
  },
];

const outcomes = [
  { metric: "73%", label: "less time spent on credential admin", icon: Clock, color: "#1F4E79" },
  { metric: "12 hrs", label: "saved per rep, per month", icon: TrendingUp, color: "#2E9E72" },
  { metric: "98%", label: "first-attempt credential acceptance", icon: ShieldCheck, color: "#32699A" },
  { metric: "$0", label: "cases bumped due to credentials in 2025", icon: FileCheck2, color: "#E08A2B" },
];

const benefits = [
  {
    icon: Building2,
    title: "Roll out across the whole distributorship",
    body: "Multi-region team management, role-based access, and onboarding flows that take two days instead of three weeks.",
    color: "#1F4E79",
  },
  {
    icon: ShieldCheck,
    title: "Compliance as infrastructure",
    body: "Every rep, every hospital, every policy — surfaced live. Audits stop being a fire drill.",
    color: "#2E9E72",
  },
  {
    icon: BarChart3,
    title: "Reporting that matches your ops",
    body: "Custom dashboards, exports to your BI stack, and per-region credential and case visibility.",
    color: "#E08A2B",
  },
  {
    icon: Lock,
    title: "Enterprise-grade security",
    body: "SSO + SCIM, audit logs, SOC 2 Type II, HIPAA + BAA. Your IT team gets what they need.",
    color: "#32699A",
  },
];

const rollout = [
  { week: "Week 1", title: "Kickoff & data migration", body: "Dedicated CSM, credential and hospital data imported from your existing systems.", icon: Sparkles, color: "#1F4E79" },
  { week: "Week 2", title: "Pilot region live", body: "5–25 reps onboarded; we shadow the field for the first two weeks.", icon: Users, color: "#2E9E72" },
  { week: "Week 3–4", title: "Full rollout", body: "SSO connected, every region onboarded, reporting tuned to your ops cadence.", icon: Globe, color: "#32699A" },
  { week: "Ongoing", title: "Quarterly business review", body: "Compliance trends, integration health, and roadmap input from your team.", icon: Activity, color: "#E08A2B" },
];

const trustLogos = ["Vertex Ortho", "Cascade Medical", "Northstar Spine", "Helix Devices", "Atrium Surgical", "Meridian Health"];

export function Partners() {
  return (
    <PageShell
      eyebrow="For Partners"
      title="The operating layer for distributors, manufacturers, and hospital systems."
      subtitle="One platform for credentialing, case prep, and compliance — built so your ops team stops firefighting and your reps stop chasing paperwork."
      heroImage={IMG.teamMeeting}
    >
      {/* Quick CTAs above the fold */}
      <div className="-mt-6 mb-12 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
          style={{ background: "#1F4E79", color: "white", fontSize: 14, fontWeight: 700, boxShadow: "0 10px 30px -10px rgba(31,78,121,0.5)" }}
        >
          Talk to partnerships <ArrowRight size={14} />
        </Link>
        <Link
          to="/request-demo"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
          style={{ background: "white", color: "#1F4E79", border: "1.5px solid rgba(31,78,121,0.2)", fontSize: 14, fontWeight: 600 }}
        >
          Request a demo
        </Link>
      </div>

      {/* Outcome strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {outcomes.map((o, i) => {
          const Icon = o.icon;
          return (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="p-6 rounded-2xl"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}
            >
              <div
                className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                style={{ background: `${o.color}15`, color: o.color }}
              >
                <Icon size={18} />
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em", lineHeight: 1 }}>{o.metric}</div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 8, lineHeight: 1.5 }}>{o.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Who partners with us — interactive */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Who partners with RepWallet"
          title="One platform, three different operating models."
          subtitle="We work with the organizations who feel credentialing friction first — and have the most to gain from removing it."
          align="center"
        />
        <PartnerTypeSwitcher types={partnerTypes} />
      </div>

      {/* Live ops dashboard mock */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#32699A", marginBottom: 14 }}>
            Operations cockpit
          </div>
          <h3 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            Live visibility across every rep, region, and OR.
          </h3>
          <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.65, marginTop: 14 }}>
            See expiring credentials before they expire, case load by region, and integration health — all in one console your ops team actually opens every morning.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Per-region credential expiry alerts",
              "Hospital policy mismatch warnings",
              "BI-ready exports + Snowflake sync",
              "Role-based access for managers, leads, and CSMs",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3" style={{ fontSize: 14.5, color: "#0b1a2b" }}>
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#2E9E72", color: "white" }}
                >
                  <Check size={12} strokeWidth={3} />
                </div>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <OpsDashboardMock />
      </div>

      {/* Why RepWallet for ops */}
      <div className="mt-24">
        <SectionHeader eyebrow="Why ops teams switch" title="Compliance, security, and reporting — without the spreadsheet stack." align="center" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="p-7 rounded-2xl relative overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: b.color, color: "white" }}
                >
                  <Icon size={20} />
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#0b1a2b", letterSpacing: "-0.01em" }}>{b.title}</div>
                <div style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.6, marginTop: 8 }}>{b.body}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Partner testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-24 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-5"
        style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 30px 60px -25px rgba(11,26,43,0.2)" }}
      >
        <div className="md:col-span-3 p-10 md:p-12" style={{ background: "white" }}>
          <Quote size={32} style={{ color: "#1F4E79", opacity: 0.25 }} />
          <p style={{ fontSize: 20, lineHeight: 1.5, color: "#0b1a2b", marginTop: 16, letterSpacing: "-0.01em" }}>
            "We replaced four tools and a shared inbox with RepWallet. Our regional managers stopped chasing credentials and started focusing on growth. The first audit after rollout took 90 minutes instead of three weeks."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <ImageWithFallback
              src={IMG.portraitWoman}
              alt="Maya Reyes"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#0b1a2b" }}>Maya Reyes</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>VP Operations · Vertex Orthopedics (180 reps, 6 regions)</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 p-10 md:p-12 flex flex-col justify-center gap-5" style={{ background: "linear-gradient(135deg, #0b1a2b 0%, #1F4E79 100%)" }}>
          <div className="flex items-center gap-2" style={{ color: "#60A9E9", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            <Sparkles size={13} /> Results · 6 months
          </div>
          {[
            { k: "Credential admin time", v: "−73%" },
            { k: "Cases bumped (credentials)", v: "0" },
            { k: "Audit prep time", v: "90 min" },
          ].map((row) => (
            <div key={row.k} className="flex items-end justify-between gap-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>{row.k}</div>
              <div style={{ color: "white", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{row.v}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Logos */}
      <div className="mt-20">
        <div className="text-center" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>
          Trusted by operations teams across the country
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {trustLogos.map((name) => (
            <div
              key={name}
              className="text-center py-4 rounded-lg"
              style={{
                background: "rgba(31,78,121,0.04)",
                border: "1px solid rgba(31,78,121,0.08)",
                color: "#1F4E79",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Rollout timeline */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Rollout"
          title="Kickoff to full deployment in 4 weeks."
          subtitle="A predictable path from contract to live across every region — with a CSM walking it with you."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, #1F4E79 0%, #2E9E72 33%, #32699A 66%, #E08A2B 100%)", opacity: 0.2 }}
          />
          {rollout.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.week}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-7 rounded-2xl relative overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: r.color }}
                />
                <div
                  className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center relative z-10"
                  style={{
                    background: r.color,
                    color: "white",
                    boxShadow: `0 0 0 4px white, 0 0 0 5px ${r.color}33`,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: r.color,
                  }}
                >
                  {r.week}
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#0b1a2b", marginTop: 6, letterSpacing: "-0.01em" }}>
                  {r.title}
                </div>
                <div style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.6, marginTop: 8 }}>{r.body}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enterprise CTA */}
      <div
        className="mt-24 rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-5 gap-10 items-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1a2b 0%, #1F4E79 60%, #32699A 100%)", color: "white" }}
      >
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(96,169,233,0.25) 0%, transparent 70%)" }}
        />
        <div className="md:col-span-3 relative">
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#60A9E9" }}>
            Enterprise plan
          </div>
          <div style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, marginTop: 12, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            Built for 50+ reps, custom workflows, and IT security reviews.
          </div>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "SSO + SCIM provisioning",
              "Custom integrations",
              "Dedicated CSM",
              "Quarterly business reviews",
              "SOC 2 Type II report",
              "HIPAA + BAA",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5" style={{ fontSize: 14.5, color: "rgba(255,255,255,0.9)" }}>
                <Check size={16} style={{ color: "#60A9E9", marginTop: 2, flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 flex flex-col gap-3 relative">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl"
            style={{ background: "#60A9E9", color: "#0b1a2b", fontSize: 14, fontWeight: 700, boxShadow: "0 12px 30px -10px rgba(96,169,233,0.5)" }}
          >
            Talk to partnerships <ArrowRight size={14} />
          </Link>
          <Link
            to="/request-demo"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.2)", fontSize: 14, fontWeight: 600 }}
          >
            Request a demo
          </Link>
          <div className="mt-3 flex items-center gap-2" style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
            <ShieldCheck size={13} /> SOC 2 · HIPAA · BAA available
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function PartnerTypeSwitcher({ types }: { types: typeof partnerTypes }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView || prefersReduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % types.length), 4200);
    return () => clearInterval(t);
  }, [inView, prefersReduced, types.length]);

  const current = types[active];
  const CurIcon = current.icon;

  return (
    <div ref={ref} className="mt-12">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {types.map((t, i) => {
          const I = t.icon;
          const isActive = i === active;
          return (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full transition-all"
              style={{
                background: isActive ? t.color : "white",
                color: isActive ? "white" : "#0b1a2b",
                border: `1px solid ${isActive ? t.color : "rgba(0,0,0,0.08)"}`,
                fontSize: 14,
                fontWeight: 600,
                boxShadow: isActive ? `0 10px 30px -10px ${t.color}66` : "0 1px 3px rgba(0,0,0,0.03)",
              }}
            >
              <I size={16} /> {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: `${current.color}15`, color: current.color, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              <CurIcon size={13} /> {current.label}
            </div>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              {current.headline}
            </h3>
            <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.65, marginTop: 14, maxWidth: 520 }}>{current.body}</p>
            <ul className="mt-6 space-y-3">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3" style={{ fontSize: 14.5, color: "#0b1a2b" }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: current.color, color: "white" }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl pointer-events-none transition-all"
            style={{ background: `linear-gradient(135deg, ${current.color}22, ${current.color}05)` }}
          />
          <div
            className="relative rounded-2xl p-8 min-h-[380px]"
            style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 30px 60px -25px rgba(11,26,43,0.25)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                <PartnerVisual index={active} color={current.color} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerVisual({ index, color }: { index: number; color: string }) {
  if (index === 0) {
    // Distributors — multi-region map
    const regions = [
      { name: "Northeast", reps: 42, status: "Healthy", x: 78, y: 22 },
      { name: "Midwest", reps: 38, status: "Healthy", x: 52, y: 32 },
      { name: "South", reps: 51, status: "2 expiring", x: 60, y: 60 },
      { name: "West", reps: 47, status: "Healthy", x: 18, y: 40 },
    ];
    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Globe size={16} style={{ color }} />
            <div style={{ fontSize: 13, fontWeight: 700, color: "#0b1a2b" }}>Distributorship overview</div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: "rgba(46,158,114,0.12)", border: "1px solid rgba(46,158,114,0.3)" }}>
            <CircleDot size={10} style={{ color: "#2E9E72" }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: "#1f7a55" }}>Live</span>
          </div>
        </div>
        <div className="relative h-52 rounded-xl mb-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #f7fafc 0%, #eef4fb 100%)", border: "1px solid rgba(0,0,0,0.05)" }}>
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="absolute"
              style={{ left: `${r.x}%`, top: `${r.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: r.status === "Healthy" ? "#2E9E72" : "#E08A2B",
                  boxShadow: `0 0 0 6px ${r.status === "Healthy" ? "rgba(46,158,114,0.2)" : "rgba(224,138,43,0.2)"}`,
                }}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {regions.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between p-2.5 rounded-lg"
              style={{ background: "#f7fafc", border: "1px solid rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={11} style={{ color }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#0b1a2b" }}>{r.name}</span>
              </div>
              <span style={{ fontSize: 11, color: "#6b7280" }}>{r.reps} reps</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    // Manufacturers — branded rep app preview
    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Building2 size={16} style={{ color }} />
            <div style={{ fontSize: 13, fontWeight: 700, color: "#0b1a2b" }}>Branded rep wallet</div>
          </div>
          <span style={{ fontSize: 11, color: "#6b7280" }}>iPhone preview</span>
        </div>
        <div className="flex justify-center">
          <div
            className="rounded-3xl p-3"
            style={{ background: "#0b1a2b", width: 240, boxShadow: "0 20px 50px -15px rgba(11,26,43,0.4)" }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ background: "white" }}>
              <div className="p-4" style={{ background: color, color: "white" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.8 }}>
                  Vertex Orthopedics
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4, letterSpacing: "-0.01em" }}>Cameron Kincaide</div>
                <div style={{ fontSize: 11, marginTop: 2, opacity: 0.85 }}>Ortho · Region South</div>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { l: "Credentials", v: "12 active", c: "#2E9E72" },
                  { l: "Today's cases", v: "3", c: "#1F4E79" },
                  { l: "Hospital access", v: "47", c: "#32699A" },
                ].map((row) => (
                  <div key={row.l} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <div style={{ fontSize: 12, color: "#6b7280" }}>{row.l}</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: row.c }} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1a2b" }}>{row.v}</span>
                    </div>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-center gap-1.5" style={{ fontSize: 10, color: "#6b7280" }}>
                  <ShieldCheck size={10} style={{ color: "#2E9E72" }} />
                  TJC ready · synced 2 min ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hospital systems — vendor verification
  const arrivals = [
    { time: "07:30", name: "Cameron K.", vendor: "Vertex Ortho", status: "Verified" },
    { time: "09:15", name: "Stephan L.", vendor: "Helix Spine", status: "Verified" },
    { time: "10:00", name: "Priya N.", vendor: "Atrium Surgical", status: "Pending TB" },
    { time: "13:45", name: "Maya R.", vendor: "Cascade Med", status: "Verified" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Hospital size={16} style={{ color }} />
          <div style={{ fontSize: 13, fontWeight: 700, color: "#0b1a2b" }}>OR arrivals · Today</div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: "rgba(46,158,114,0.12)" }}>
          <Activity size={10} style={{ color: "#2E9E72" }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: "#1f7a55" }}>Live</span>
        </div>
      </div>
      <div className="space-y-2">
        {arrivals.map((a, i) => {
          const ok = a.status === "Verified";
          return (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-3 rounded-lg"
              style={{ background: "#f7fafc", border: "1px solid rgba(0,0,0,0.04)" }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color }} className="w-12">{a.time}</div>
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>{a.name}</div>
                <div style={{ fontSize: 11, color: "#6b7280" }}>{a.vendor}</div>
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full"
                style={{
                  background: ok ? "rgba(46,158,114,0.12)" : "rgba(224,138,43,0.12)",
                  border: `1px solid ${ok ? "rgba(46,158,114,0.3)" : "rgba(224,138,43,0.3)"}`,
                }}
              >
                {ok ? <Check size={10} style={{ color: "#2E9E72" }} strokeWidth={3} /> : <CircleDot size={10} style={{ color: "#E08A2B" }} />}
                <span style={{ fontSize: 11, fontWeight: 600, color: ok ? "#1f7a55" : "#a35e15" }}>{a.status}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function OpsDashboardMock() {
  const regions = [
    { name: "Northeast", reps: 42, pct: 96, color: "#2E9E72" },
    { name: "Midwest", reps: 38, pct: 92, color: "#2E9E72" },
    { name: "South", reps: 51, pct: 88, color: "#E08A2B" },
    { name: "West", reps: 47, pct: 94, color: "#2E9E72" },
  ];
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(31,78,121,0.15), rgba(96,169,233,0.05))" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 30px 60px -25px rgba(11,26,43,0.25)" }}
      >
        <div
          className="px-5 py-3.5 flex items-center justify-between"
          style={{ background: "#0b1a2b", color: "white" }}
        >
          <div className="flex items-center gap-2">
            <BarChart3 size={15} style={{ color: "#60A9E9" }} />
            <span style={{ fontSize: 13, fontWeight: 700 }}>Ops cockpit · Q2 2026</span>
          </div>
          <div className="inline-flex items-center gap-1.5" style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2E9E72" }} />
            Synced 1m ago
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { l: "Active reps", v: "178", c: "#1F4E79" },
              { l: "Hospital orgs", v: "340", c: "#32699A" },
              { l: "Expiring (30d)", v: "12", c: "#E08A2B" },
            ].map((s) => (
              <div key={s.l} className="p-3 rounded-xl" style={{ background: "#f7fafc", border: "1px solid rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280" }}>{s.l}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: s.c, letterSpacing: "-0.02em", marginTop: 4 }}>{s.v}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 10 }}>
            Region compliance
          </div>
          <div className="space-y-3">
            {regions.map((r, i) => (
              <div key={r.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin size={11} style={{ color: "#32699A" }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>{r.name}</span>
                    <span style={{ fontSize: 11, color: "#6b7280" }}>· {r.reps} reps</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: r.color }}>{r.pct}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.05)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.08 }}
                    className="h-full rounded-full"
                    style={{ background: r.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 flex items-center gap-3" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(224,138,43,0.12)", color: "#E08A2B" }}
            >
              <Users size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>3 reps expiring TJC in South</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>Auto-renewal initiated · ETA 2 days</div>
            </div>
            <ArrowRight size={14} style={{ color: "#6b7280" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
