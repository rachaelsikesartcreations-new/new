import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Quote,
  TrendingUp,
  ShieldCheck,
  Clock,
  FileCheck2,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Heart,
  Activity,
  Bone,
  Building2,
  Check,
  MapPin,
  CircleDot,
} from "lucide-react";
import { PageShell, SectionHeader } from "./PageShell";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { IMG } from "./images";

const outcomes = [
  { metric: "73%", label: "less time on credential admin", icon: Clock, color: "#1F4E79" },
  { metric: "12 hrs", label: "saved per rep, per month", icon: TrendingUp, color: "#2E9E72" },
  { metric: "98%", label: "first-attempt acceptance", icon: ShieldCheck, color: "#32699A" },
  { metric: "$0", label: "cases bumped due to credentials", icon: FileCheck2, color: "#E08A2B" },
];

const featured = {
  company: "Vertex Orthopedics",
  region: "180 reps · 6 regions · Ortho",
  metric: "98%",
  metricLabel: "credential compliance across 24 reps and 60+ hospitals",
  quote:
    "We went from chasing credential renewals across email threads to a single dashboard. Cases stopped getting bumped, and our reps finally got their evenings back.",
  person: "Maria Chen",
  role: "VP Sales Ops · Vertex Orthopedics",
  portrait: IMG.portraitWoman,
  results: [
    { k: "Credential admin time", v: "−73%" },
    { k: "Cases bumped (credentials)", v: "0" },
    { k: "Audit prep time", v: "90 min" },
  ],
};

const stories = [
  {
    company: "Pacific Spine Distributors",
    specialty: "Spine",
    icon: Bone,
    color: "#1F4E79",
    quote:
      "Our reps cover six states. RepWallet is the only way we keep hospital access current without a full-time admin.",
    person: "Jordan Reyes",
    role: "President",
    metric: "12 hrs",
    metricLabel: "saved / rep / month",
    portrait: IMG.portraitMan,
    bullets: ["6 states covered", "1 dashboard", "0 admin hires"],
  },
  {
    company: "Coastline Cardiovascular",
    specialty: "Cardio",
    icon: Heart,
    color: "#2E9E72",
    quote:
      "The AI assistant drafts case prep and flags missing items the night before. It feels like an extra teammate.",
    person: "Priya Shah",
    role: "Director of Field Sales",
    metric: "3×",
    metricLabel: "faster case prep",
    portrait: IMG.portraitDoctor,
    bullets: ["AI case briefs", "Night-before alerts", "Surgeon prefs synced"],
  },
  {
    company: "Atlas Med Devices",
    specialty: "Multi-line",
    icon: Activity,
    color: "#E08A2B",
    quote:
      "Onboarding a new rep used to take three weeks of paperwork. Now it's two days and a single dashboard.",
    person: "Devon Patel",
    role: "Head of Operations",
    metric: "2 days",
    metricLabel: "to onboard a new rep",
    portrait: IMG.portraitDoctor,
    bullets: ["Bulk provisioning", "SSO + SCIM", "Auto credential import"],
  },
];

const segments = [
  { name: "Orthopedic", icon: Bone, count: "640+", color: "#1F4E79" },
  { name: "Spine", icon: Stethoscope, count: "420+", color: "#32699A" },
  { name: "Cardio", icon: Heart, count: "380+", color: "#2E9E72" },
  { name: "Neuro", icon: Activity, count: "210+", color: "#E08A2B" },
];

const logos = [
  { name: "Vertex Ortho", mark: "VO", color: "#1F4E79" },
  { name: "Pacific Spine", mark: "PS", color: "#32699A" },
  { name: "Coastline Cardio", mark: "CC", color: "#2E9E72" },
  { name: "Atlas Med", mark: "AM", color: "#E08A2B" },
  { name: "Northstar Spine", mark: "NS", color: "#60A9E9" },
  { name: "Helix Devices", mark: "HX", color: "#1F4E79" },
  { name: "Atrium Surgical", mark: "AS", color: "#2E9E72" },
  { name: "Meridian Health", mark: "MH", color: "#32699A" },
];

const stats = [
  { k: "2,400+", v: "Reps on platform" },
  { k: "340+", v: "Hospitals connected" },
  { k: "98%", v: "Compliance rate" },
  { k: "0", v: "Cases bumped" },
];

export function Customers() {
  return (
    <PageShell
      eyebrow="Customers"
      title="Teams that ship cases on time, every time."
      subtitle="From single-rep startups to national distributorships, RepWallet is the operating layer keeping the field — and the OR — running."
      heroImage={IMG.medicalProfessionals}
    >
      {/* Hero visual hook — live customer activity */}
      <CustomerActivityMock />

      {/* Above-the-fold CTAs */}
      <div className="-mt-6 mb-12 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/request-demo"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
          style={{ background: "#1F4E79", color: "white", fontSize: 14, fontWeight: 700, boxShadow: "0 10px 30px -10px rgba(31,78,121,0.5)" }}
        >
          Request a demo <ArrowRight size={14} />
        </Link>
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
          style={{ background: "white", color: "#1F4E79", border: "1.5px solid rgba(31,78,121,0.2)", fontSize: 14, fontWeight: 600 }}
        >
          Talk to partnerships
        </Link>
      </div>

      {/* Outcome strip — matches Partners */}
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
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}
            >
              <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: o.color }} />
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

      {/* Featured customer — clean, light, single-card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 rounded-3xl overflow-hidden relative"
        style={{
          background: "white",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 30px 60px -25px rgba(11,26,43,0.15)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-[4px] z-10"
          style={{ background: "linear-gradient(90deg, #1F4E79 0%, #32699A 50%, #60A9E9 100%)" }}
        />

        {/* Banner image with overlay */}
        <div className="relative h-44 md:h-52 overflow-hidden">
          <ImageWithFallback
            src={IMG.surgeryTeam}
            alt={featured.company}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,26,43,0.85) 0%, rgba(31,78,121,0.65) 50%, rgba(11,26,43,0.5) 100%)",
            }}
          />
          <div className="relative h-full flex items-end p-8 md:p-10">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                style={{
                  background: "rgba(96,169,233,0.15)",
                  border: "1px solid rgba(96,169,233,0.35)",
                  color: "#60A9E9",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Sparkles size={12} /> Featured customer
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {featured.company}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>{featured.region}</div>
            </div>
          </div>

          {/* Floating headline metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block absolute top-6 right-6 rounded-2xl px-5 py-4"
            style={{
              background: "white",
              boxShadow: "0 20px 40px -12px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2E9E72" }}>
              Compliance
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.025em", lineHeight: 1, marginTop: 4 }}>
              {featured.metric}
            </div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4, maxWidth: 160, lineHeight: 1.4 }}>
              across 24 reps · 60+ hospitals
            </div>
          </motion.div>
        </div>

        <div className="p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <Quote size={32} style={{ color: "#60A9E9", opacity: 0.5 }} />
            <p style={{ fontSize: 22, lineHeight: 1.5, color: "#0b1a2b", marginTop: 14, letterSpacing: "-0.015em", fontWeight: 500 }}>
              "{featured.quote}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <ImageWithFallback
                src={featured.portrait}
                alt={featured.person}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0b1a2b" }}>{featured.person}</div>
                <div style={{ fontSize: 13, color: "#6b7280" }}>{featured.role}</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            {featured.results.map((row, i) => {
              const accent = ["#1F4E79", "#2E9E72", "#E08A2B"][i % 3];
              return (
                <div
                  key={row.k}
                  className="p-4 rounded-2xl flex items-baseline justify-between gap-3"
                  style={{
                    background: `${accent}08`,
                    border: `1px solid ${accent}22`,
                  }}
                >
                  <span style={{ fontSize: 13, color: "#4b5563" }}>{row.k}</span>
                  <span style={{ fontSize: 22, fontWeight: 700, color: accent, letterSpacing: "-0.02em" }}>{row.v}</span>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </motion.div>

      {/* Customer stories — cohesive color-coded cards */}
      <div id="stories" style={{ scrollMarginTop: 80 }} className="mt-24">
        <SectionHeader
          eyebrow="Stories"
          title="Teams running on RepWallet."
          subtitle="Three operating models, one platform — and the results their teams shipped."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                }}
              >
                <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: s.color }} />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: s.color, color: "white" }}
                  >
                    <Icon size={19} />
                  </div>
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: s.color,
                    }}
                  >
                    {s.specialty}
                  </span>
                </div>

                <div style={{ fontSize: 40, fontWeight: 700, color: s.color, letterSpacing: "-0.025em", lineHeight: 1 }}>
                  {s.metric}
                </div>
                <div style={{ fontSize: 12.5, color: "#6b7280", marginTop: 6, lineHeight: 1.5 }}>{s.metricLabel}</div>

                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#0b1a2b", marginTop: 20 }}>"{s.quote}"</p>

                <div className="mt-auto pt-6 flex items-center gap-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: 24 }}>
                  <ImageWithFallback
                    src={s.portrait}
                    alt={s.person}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0b1a2b" }} className="truncate">
                      {s.person}
                    </div>
                    <div style={{ fontSize: 12, color: "#6b7280" }} className="truncate">
                      {s.role} · {s.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Specialty segments */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="By specialty"
          title="Built for every line in the OR."
          subtitle="Specialty-aware workflows for the teams shipping cases today."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {segments.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="p-6 rounded-2xl relative overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: s.color, color: "white" }}
                >
                  <Icon size={20} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0b1a2b" }}>{s.name}</div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: s.color,
                    marginTop: 4,
                  }}
                >
                  {s.count} reps
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Logos strip */}
      <div className="mt-20">
        <div className="text-center" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280" }}>
          Trusted by teams across the country
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 items-center">
          {logos.map((l) => (
            <div
              key={l.name}
              className="text-center py-4 px-3 rounded-lg truncate"
              style={{
                background: "rgba(31,78,121,0.04)",
                border: "1px solid rgba(31,78,121,0.08)",
                color: "#0b1a2b",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {l.name}
            </div>
          ))}
        </div>
      </div>

      {/* Platform stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.v}
            className="p-7 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, #f7fafc 0%, #eef4fb 100%)",
              border: "1px solid rgba(31,78,121,0.1)",
            }}
          >
            <div style={{ fontSize: 36, fontWeight: 700, color: "#1F4E79", letterSpacing: "-0.025em", lineHeight: 1 }}>{s.k}</div>
            <div style={{ fontSize: 13, color: "#4b5563", marginTop: 8 }}>{s.v}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
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
            Join them
          </div>
          <div style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, marginTop: 12, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            See what RepWallet does for your team.
          </div>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginTop: 12, maxWidth: 520 }}>
            30 minutes, tailored to your stack. We'll show you exactly where the friction lives and how to remove it.
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-3 relative">
          <Link
            to="/request-demo"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl"
            style={{ background: "#60A9E9", color: "#0b1a2b", fontSize: 14, fontWeight: 700, boxShadow: "0 12px 30px -10px rgba(96,169,233,0.5)" }}
          >
            Request a demo <ArrowRight size={14} />
          </Link>
          <Link
            to="/partners"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.2)", fontSize: 14, fontWeight: 600 }}
          >
            Talk to partnerships
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

function CustomerActivityMock() {
  const rows = [
    { team: "Vertex Orthopedics", region: "Northeast", action: "12 credentials renewed", time: "2m ago", color: "#1F4E79" },
    { team: "Pacific Spine", region: "West", action: "Case prep complete · 3 ORs", time: "8m ago", color: "#2E9E72" },
    { team: "Coastline Cardio", region: "South", action: "Hospital access verified", time: "14m ago", color: "#32699A" },
    { team: "Atlas Med Devices", region: "Midwest", action: "New rep onboarded · 2 days", time: "32m ago", color: "#E08A2B" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="-mt-8 mb-14 rounded-2xl relative overflow-hidden"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 30px 60px -25px rgba(11,26,43,0.2)",
      }}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[4px]"
        style={{ background: "linear-gradient(90deg, #1F4E79 0%, #2E9E72 33%, #32699A 66%, #E08A2B 100%)" }}
      />
      <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="flex items-center gap-2">
          <Activity size={15} style={{ color: "#1F4E79" }} />
          <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0b1a2b" }}>Customer activity · live</div>
        </div>
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
          style={{ background: "rgba(46,158,114,0.1)", border: "1px solid rgba(46,158,114,0.25)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#2E9E72", animation: "why-pulse 1.6s ease-in-out infinite" }}
          />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#1f7a55", letterSpacing: "0.04em" }}>
            2,400+ reps online
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {rows.map((r, i) => (
          <motion.div
            key={r.team}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
            className="p-5 flex items-start gap-3"
            style={{
              borderRight: "1px solid rgba(0,0,0,0.05)",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${r.color}15`, color: r.color }}
            >
              <CircleDot size={15} />
            </div>
            <div className="min-w-0 flex-1">
              <div style={{ fontSize: 13, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.01em" }} className="truncate">
                {r.team}
              </div>
              <div style={{ fontSize: 12, color: "#4b5563", marginTop: 2, lineHeight: 1.4 }} className="truncate">
                {r.action}
              </div>
              <div className="mt-1.5 flex items-center gap-2" style={{ fontSize: 11, color: "#9ca3af" }}>
                <MapPin size={10} /> {r.region}
                <span>·</span>
                <Clock size={10} /> {r.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
