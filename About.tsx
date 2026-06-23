import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import {
  Compass,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Quote,
  ArrowRight,
  Linkedin,
  Mail,
  Stethoscope,
  Users,
  UserCheck,
  Wallet,
  Plug,
  FileCheck2,
  Handshake,
  Pause,
  Play,
  Check,
  Briefcase,
  ArrowRightLeft,
  Download,
  Building,
} from "lucide-react";
import { PageShell, SectionHeader } from "./PageShell";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { IMG } from "./images";
import stephenPhoto from "../../imports/1725546819629.jpg";
import cameronPhoto from "../../imports/1755449235510.jpg";

const values = [
  {
    icon: Compass,
    title: "Field-first",
    body: "We design for the person standing in the OR parking lot at 6:45am — not the analyst at HQ.",
    color: "#1F4E79",
  },
  {
    icon: ShieldCheck,
    title: "Boring is good",
    body: "Compliance work should be invisible. The best feature is the one that never pages you.",
    color: "#2E9E72",
  },
  {
    icon: HeartHandshake,
    title: "Earned trust",
    body: "Hospitals, manufacturers, and reps all depend on the same source of truth. We don't break it.",
    color: "#E08A2B",
  },
];

const stats = [
  { k: "2,400+", v: "Reps on platform" },
  { k: "340+", v: "Hospitals connected" },
  { k: "12", v: "Credentialing systems" },
  { k: "$0", v: "Cases bumped for compliance" },
];

const reasons = [
  {
    icon: UserCheck,
    title: "Built by working reps",
    body: "Designed by reps with active distributorships, not platform vendors.",
    color: "#1F4E79",
  },
  {
    icon: Wallet,
    title: "Yours, not your employer's",
    body: "Credentials follow you across every job change.",
    color: "#2E9E72",
  },
  {
    icon: Plug,
    title: "Works with every platform you use",
    body: "RepWallet sits alongside the platforms your hospitals use, right in your pocket.",
    color: "#32699A",
  },
  {
    icon: FileCheck2,
    title: "Joint Commission ready",
    body: "Every facility entry writes a forge-proof, append-only audit log. Pulls a CSV export in one click.",
    color: "#E08A2B",
  },
  {
    icon: Handshake,
    title: "Built for partnership distribution",
    body: "Reps onboarded through your platform get a RepWallet tier built around your credentialing rules and your hospitals. You distribute, we deliver.",
    color: "#60A9E9",
  },
];

const leaders = [
  {
    name: "Cameron Kincaide",
    role: "Founder",
    img: cameronPhoto,
    linkedin: "https://www.linkedin.com/in/cameron-kincaide-5a401512/",
    bio: "Spent a decade in medical device sales watching reps lose cases to paperwork. Started RepWallet to fix it.",
  },
  {
    name: "Stephen Lapp",
    role: "CTO",
    img: stephenPhoto,
    linkedin: "https://www.linkedin.com/in/stephenlapp",
    bio: "Built credentialing and scheduling infrastructure at two healthtech companies. Loves systems that quietly work.",
  },
];

const investors = [
  "Founders Field",
  "Mercy Ventures",
  "Atlas Health",
  "Tenfold",
  "Cedar Capital",
  "Northwind",
];

const locations = [
  { city: "San Antonio, TX", role: "HQ · Product & Engineering" },
  { city: "Remote · US", role: "Field & Sales" },
];

export function About() {
  return (
    <PageShell
      eyebrow="Company"
      title="Built by people who've lived the rep life."
      subtitle="RepWallet started in an OR parking lot, on hold with a credentialing portal, ten minutes before a case. We've been building the tool we wished we had ever since."
      heroImage={IMG.teamLaptops}
    >
      {/* Mission split with stat callouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#32699A",
              marginBottom: 14,
            }}
          >
            Our mission
          </div>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#0b1a2b",
              lineHeight: 1.15,
            }}
          >
            Move the cases that move medicine forward.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4b5563", marginTop: 18 }}>
            Medical reps move the cases that move medicine forward. We're building the
            infrastructure that lets them do that work without drowning in credential
            paperwork, vendor portals, and last-minute compliance scrambles.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4b5563", marginTop: 14 }}>
            Headquartered in San Antonio, with reps and partners using RepWallet across the
            United States. Backed by operators from the medical device and healthtech worlds.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div
            className="absolute -inset-4 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(96,169,233,0.18), rgba(31,78,121,0.04))",
            }}
          />
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 30px 60px -25px rgba(11,26,43,0.35)",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-3 flex items-center justify-between"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: "#fafbfc" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{ background: "#1F4E79", color: "white" }}
                >
                  <Stethoscope size={12} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#0b1a2b" }}>
                  Cases moved · Q1 2026
                </span>
              </div>
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(46,158,114,0.12)",
                  color: "#10B981",
                  fontSize: 10.5,
                  fontWeight: 600,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
                Live
              </span>
            </div>

            <div className="p-6">
              {/* Big number + sparkline */}
              <div className="flex items-end justify-between gap-4 mb-5">
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#6b7280",
                    }}
                  >
                    Cases supported
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <div
                      style={{
                        fontSize: 38,
                        fontWeight: 700,
                        color: "#0b1a2b",
                        letterSpacing: "-0.025em",
                        lineHeight: 1,
                      }}
                    >
                      12,847
                    </div>
                    <div
                      className="inline-flex items-center gap-0.5"
                      style={{ fontSize: 12, color: "#10B981", fontWeight: 600 }}
                    >
                      ↑ 18%
                    </div>
                  </div>
                </div>
                <svg
                  width="120"
                  height="48"
                  viewBox="0 0 120 48"
                  style={{ flexShrink: 0 }}
                >
                  <defs>
                    <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60A9E9" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#60A9E9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    d="M2 38 L18 30 L34 33 L50 22 L66 24 L82 15 L98 18 L118 6"
                    fill="none"
                    stroke="#1F4E79"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 38 L18 30 L34 33 L50 22 L66 24 L82 15 L98 18 L118 6 L118 46 L2 46 Z"
                    fill="url(#spark-fill)"
                  />
                </svg>
              </div>

              {/* Specialty breakdown */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { name: "Orthopedic", pct: 38, color: "#1F4E79" },
                  { name: "Spine", pct: 24, color: "#32699A" },
                  { name: "Cardio", pct: 21, color: "#60A9E9" },
                  { name: "Neuro", pct: 17, color: "#2E9E72" },
                ].map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                    className="p-2.5 rounded-lg"
                    style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#0b1a2b" }}>
                        {s.name}
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: s.color }}>
                        {s.pct}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(0,0,0,0.05)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct * 2.2}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: s.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent moves */}
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  marginBottom: 8,
                }}
              >
                Recent
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { t: "07:30a", c: "TKA · Cedar Memorial", s: "#1F4E79" },
                  { t: "09:15a", c: "Spine fusion · St. Anne's", s: "#32699A" },
                  { t: "01:45p", c: "Hip revision · Pacific NW", s: "#60A9E9" },
                ].map((c, i) => (
                  <motion.div
                    key={c.c}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.3 + i * 0.06 }}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg"
                    style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#0b1a2b", width: 44 }}>
                      {c.t}
                    </span>
                    <span className="w-0.5 h-5 rounded-full" style={{ background: c.s }} />
                    <span
                      style={{ fontSize: 12, color: "#0b1a2b" }}
                      className="flex-1 truncate"
                    >
                      {c.c}
                    </span>
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: "#10B981", color: "white" }}
                    >
                      <Check size={9} strokeWidth={3} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Credential badge footer */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-5 px-4 py-3 rounded-xl flex items-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31,78,121,0.06), rgba(96,169,233,0.08))",
                  border: "1px solid rgba(31,78,121,0.1)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#1F4E79", color: "white" }}
                >
                  <Stethoscope size={16} />
                </div>
                <div className="min-w-0">
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0b1a2b" }}>
                    20+ years combined OR experience
                  </div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>
                    Reps, surgeons, and credentialing leaders
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Origin story quote card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-24 relative rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0b1a2b 0%, #1F4E79 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(96,169,233,0.25), transparent 50%)",
          }}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 p-8 md:p-12 items-center">
          <div className="md:col-span-3">
            <Quote size={32} style={{ color: "#60A9E9", opacity: 0.7 }} />
            <p
              style={{
                fontSize: "clamp(20px, 2.2vw, 26px)",
                fontWeight: 500,
                color: "white",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                marginTop: 14,
              }}
            >
              We were sitting in a hospital parking lot at 6:43am, on hold with a credentialing
              portal, watching a case we'd prepped for six weeks slip away. That's the moment we
              decided someone had to build this. So we did.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full overflow-hidden"
                style={{ border: "2px solid rgba(255,255,255,0.2)" }}
              >
                <ImageWithFallback
                  src={IMG.portraitMan}
                  alt="Cameron Kincaide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "white" }}>
                  Cameron Kincaide
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                  Founder, RepWallet
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {[
              { k: "2021", v: "Founded" },
              { k: "$28M", v: "Raised to date" },
              { k: "47", v: "Team members" },
              { k: "100%", v: "Customer retention" },
            ].map((s) => (
              <div
                key={s.v}
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.k}
                </div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why RepWallet */}
      <WhyRepWallet reasons={reasons} />

      {/* Values with icons */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="How we work"
          title="The principles we keep coming back to."
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-7 rounded-2xl relative overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="relative w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: v.color, color: "white" }}
                >
                  <Icon size={20} />
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#0b1a2b",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </div>
                <div style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.65 }}>{v.body}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Leadership */}
      <div className="mt-24">
        <SectionHeader
          eyebrow="Leadership"
          title="The people behind the platform."
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {leaders.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden group"
              style={{
                background: "white",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(11,26,43,0.6))",
                  }}
                />
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  <a
                    href={p.linkedin ?? "#"}
                    target={p.linkedin ? "_blank" : undefined}
                    rel={p.linkedin ? "noopener noreferrer" : undefined}
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      color: "#1F4E79",
                    }}
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      color: "#1F4E79",
                    }}
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <div style={{ fontSize: 16, fontWeight: 600, color: "#0b1a2b", letterSpacing: "-0.01em" }}>
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#32699A",
                    marginTop: 3,
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.role}
                </div>
                <div style={{ fontSize: 13, color: "#4b5563", marginTop: 10, lineHeight: 1.55 }}>
                  {p.bio}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hiring callout */}
        {false && <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 p-5 md:p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #eef4fb 100%)",
            border: "1px solid rgba(31,78,121,0.1)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#1F4E79", color: "white" }}
            >
              <Users size={18} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#0b1a2b" }}>
                We're hiring across engineering, design, and field ops.
              </div>
              <div style={{ fontSize: 13, color: "#4b5563", marginTop: 2 }}>
                Remote-friendly. Healthcare and device experience encouraged but not required.
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg flex-shrink-0"
            style={{
              background: "#1F4E79",
              color: "white",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            See open roles <ArrowRight size={13} />
          </Link>
        </motion.div>}
      </div>

      {/* Stats banner */}
      <div className="mt-20 relative rounded-3xl overflow-hidden">
        <ImageWithFallback
          src={IMG.surgeryWide}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,26,43,0.92) 0%, rgba(31,78,121,0.88) 100%)",
          }}
        />
        <div className="relative px-8 py-14 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#60A9E9",
              }}
            >
              By the numbers
            </div>
            <h3
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
                marginTop: 10,
              }}
            >
              What we've built so far.
            </h3>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.k}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations + investors */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div
          className="lg:col-span-2 p-7 rounded-2xl"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#32699A",
              marginBottom: 14,
            }}
          >
            Where we are
          </div>
          <div className="flex flex-col gap-3.5">
            {locations.map((l) => (
              <div key={l.city} className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(31,78,121,0.08)", color: "#1F4E79" }}
                >
                  <MapPin size={15} />
                </div>
                <div>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: "#0b1a2b" }}>
                    {l.city}
                  </div>
                  <div style={{ fontSize: 12.5, color: "#6b7280", marginTop: 1 }}>{l.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="lg:col-span-3 p-7 rounded-2xl"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#32699A",
              marginBottom: 14,
            }}
          >
            Backed by
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {investors.map((inv) => (
              <div
                key={inv}
                className="px-3 py-3 rounded-xl text-center"
                style={{
                  background: "#f8fafc",
                  border: "1px solid rgba(0,0,0,0.04)",
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: "#374151",
                  letterSpacing: "-0.01em",
                }}
              >
                {inv}
              </div>
            ))}
          </div>
          <div
            style={{ fontSize: 12, color: "#9ca3af", marginTop: 14, lineHeight: 1.55 }}
          >
            Plus operators and angels from medical device, healthtech, and surgical
            ecosystems.
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 p-8 md:p-12 rounded-3xl relative overflow-hidden"
        style={{ background: "#0b1a2b" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 30%, rgba(96,169,233,0.22), transparent 55%)",
          }}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3
              style={{
                fontSize: "clamp(24px, 2.8vw, 32px)",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Want to see what we're building?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                marginTop: 12,
                lineHeight: 1.6,
                maxWidth: 480,
              }}
            >
              30-minute walkthrough on your portals, your hospitals, your CRM. No slide
              decks — just the platform doing the work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/request-demo"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg"
              style={{
                background: "#60A9E9",
                color: "#0b1a2b",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Request a Demo <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg"
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </motion.div>
    </PageShell>
  );
}

type Reason = {
  icon: typeof UserCheck;
  title: string;
  body: string;
  color: string;
};

const ADVANCE_MS = 3800;

function WhyRepWallet({ reasons }: { reasons: Reason[] }) {
  const tabReasons = reasons.slice(0, 4);
  const partnership = reasons[4];
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || prefersReduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % tabReasons.length), ADVANCE_MS);
    return () => clearInterval(t);
  }, [inView, paused, prefersReduced, tabReasons.length]);

  const current = tabReasons[active];
  const CurrentIcon = current.icon;

  return (
    <div ref={sectionRef} className="mt-24">
      <SectionHeader
        eyebrow="Why RepWallet"
        title="Reasons reps are switching."
        subtitle="Every decision in the product comes back to one principle: the rep is the customer, not the credentialing platform."
        align="center"
      />

      {/* Status pill */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: paused ? "rgba(31,78,121,0.08)" : "rgba(46,158,114,0.12)",
            border: `1px solid ${paused ? "rgba(31,78,121,0.2)" : "rgba(46,158,114,0.3)"}`,
            color: paused ? "#1F4E79" : "#1f7a55",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: paused ? "#1F4E79" : "#2E9E72",
              animation: paused ? "none" : "why-pulse 1.6s ease-in-out infinite",
            }}
          />
          {paused ? (
            <>
              <Play size={11} /> Paused — click to resume
            </>
          ) : (
            <>
              <Pause size={11} /> Auto-cycling · click to pause
            </>
          )}
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
        {/* Left rail: reason tabs */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {tabReasons.map((r, i) => {
            const Icon = r.icon;
            const isActive = i === active;
            return (
              <button
                key={r.title}
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className="text-left rounded-2xl p-6 relative overflow-hidden transition-all"
                style={{
                  background: "white",
                  border: `1px solid ${isActive ? r.color : "rgba(0,0,0,0.06)"}`,
                  boxShadow: isActive
                    ? `0 14px 40px -16px ${r.color}55`
                    : "0 1px 3px rgba(0,0,0,0.03)",
                  transform: isActive ? "translateX(4px)" : "none",
                }}
              >
                {/* Progress bar */}
                {isActive && !paused && !prefersReduced && (
                  <motion.div
                    key={`p-${active}`}
                    className="absolute bottom-0 left-0 h-[3px]"
                    style={{ background: r.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: ADVANCE_MS / 1000, ease: "linear" }}
                  />
                )}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive ? r.color : `${r.color}15`,
                      color: isActive ? "white" : r.color,
                      transition: "background 0.3s, color 0.3s",
                    }}
                  >
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      style={{
                        fontSize: 15.5,
                        fontWeight: 600,
                        color: "#0b1a2b",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {r.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#6b7280",
                        marginTop: 4,
                        lineHeight: 1.5,
                      }}
                    >
                      {r.body}
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: r.color, color: "white" }}
                    >
                      <Check size={11} strokeWidth={3} />
                    </motion.div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: active reason visual */}
        <div className="lg:col-span-3 relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${current.color}22, ${current.color}05)`,
              transition: "background 0.5s",
            }}
          />
          <div
            className="relative rounded-2xl overflow-hidden h-full min-h-[500px] p-9 md:p-12 flex flex-col"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 30px 60px -25px rgba(11,26,43,0.25)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: current.color, color: "white" }}
                  >
                    <CurrentIcon size={20} />
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: current.color,
                    }}
                  >
                    Reason {active + 1} of {tabReasons.length}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#0b1a2b",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {current.title}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#4b5563",
                    marginTop: 12,
                    lineHeight: 1.6,
                    maxWidth: 520,
                  }}
                >
                  {current.body}
                </div>

                <div className="mt-8 flex-1 flex items-center">
                  <ReasonVisual index={active} color={current.color} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Partnership distribution — anchor card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mt-8 p-10 md:p-12 rounded-2xl relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0b1a2b 0%, #1F4E79 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full"
          style={{ background: `${partnership.color}30` }}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <div
              className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: partnership.color,
                border: `1px solid ${partnership.color}50`,
              }}
            >
              <Handshake size={20} />
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              {partnership.title}
            </div>
            <div
              style={{
                fontSize: 14.5,
                color: "rgba(255,255,255,0.75)",
                marginTop: 10,
                lineHeight: 1.65,
                maxWidth: 540,
              }}
            >
              {partnership.body}
            </div>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-lg"
              style={{
                background: partnership.color,
                color: "#0b1a2b",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              See partnership program <ArrowRight size={13} />
            </Link>
          </div>

          {/* Distribution diagram */}
          <div className="md:col-span-2">
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="px-3 py-2 rounded-lg mb-3 inline-flex items-center gap-2"
                style={{
                  background: "rgba(96,169,233,0.18)",
                  border: "1px solid rgba(96,169,233,0.3)",
                }}
              >
                <Building size={13} style={{ color: "#60A9E9" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "white" }}>
                  Partner platform
                </span>
              </div>

              {/* Flow */}
              <div className="flex flex-col gap-1.5">
                {["Onboard a rep", "Apply your rules", "Deliver RepWallet"].map((step, si) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + si * 0.1 }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{
                        background: partnership.color,
                        color: "#0b1a2b",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      {si + 1}
                    </div>
                    <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.85)" }}>
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes why-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}

function ReasonVisual({ index, color }: { index: number; color: string }) {
  if (index === 0) {
    // Built by working reps — rep profile stack
    const reps = [
      { name: "Cameron K.", role: "Ortho · 12 yrs", img: IMG.portraitMan },
      { name: "Stephan L.", role: "Spine · 8 yrs", img: IMG.portraitDoctor },
      { name: "Maya R.", role: "Cardio · 10 yrs", img: IMG.portraitWoman },
    ];
    return (
      <div className="w-full flex flex-col gap-2">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-start"
          style={{ background: `${color}10`, border: `1px solid ${color}30` }}
        >
          <Briefcase size={12} style={{ color }} />
          <span style={{ fontSize: 11, fontWeight: 600, color, letterSpacing: "0.04em" }}>
            ACTIVE DISTRIBUTORSHIPS
          </span>
        </div>
        {reps.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.04)" }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <ImageWithFallback src={r.img} alt={r.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1a2b" }}>{r.name}</div>
              <div style={{ fontSize: 11.5, color: "#6b7280" }}>{r.role}</div>
            </div>
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(46,158,114,0.12)",
                color: "#10B981",
                fontSize: 10.5,
                fontWeight: 600,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
              Active
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (index === 1) {
    // Yours not your employer's — credential card moves between jobs
    return (
      <div className="w-full flex flex-col items-center gap-4">
        <div className="grid grid-cols-3 gap-3 w-full items-center">
          <div
            className="p-3 rounded-xl text-center"
            style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.06)" }}
          >
            <Briefcase size={16} style={{ color: "#9ca3af", margin: "0 auto" }} />
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 6, fontWeight: 600 }}>
              Job A
            </div>
            <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>2018–2024</div>
          </div>
          <div className="flex justify-center">
            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: color, color: "white" }}
            >
              <ArrowRightLeft size={16} />
            </motion.div>
          </div>
          <div
            className="p-3 rounded-xl text-center"
            style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.06)" }}
          >
            <Briefcase size={16} style={{ color: "#1F4E79", margin: "0 auto" }} />
            <div style={{ fontSize: 11, color: "#0b1a2b", marginTop: 6, fontWeight: 600 }}>
              Job B
            </div>
            <div style={{ fontSize: 10, color: "#10B981", marginTop: 2, fontWeight: 600 }}>
              2024 — now
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-xs rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0b1a2b 0%, #1F4E79 100%)",
            boxShadow: "0 20px 40px -15px rgba(11,26,43,0.4)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full"
            style={{ background: `${color}30` }}
          />
          <div className="relative">
            <Wallet size={20} style={{ color: "#60A9E9" }} />
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.6)",
                marginTop: 14,
              }}
            >
              REP CREDENTIAL
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginTop: 4 }}>
              Cameron Kincaide
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(46,158,114,0.2)",
                  color: "#34d399",
                  fontSize: 10.5,
                  fontWeight: 600,
                }}
              >
                Portable · Yours
              </span>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>
                ★★★★★
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    // Works with every platform — integration grid with packets
    const items = [
      { name: "symplr", color: "#1F4E79" },
      { name: "Reptrax", color: "#32699A" },
      { name: "Vendormate", color: "#60A9E9" },
      { name: "HealthTrust", color: "#2E9E72" },
      { name: "ORtrax", color: "#E08A2B" },
      { name: "IntelliCentrics", color: "#7A5BD1" },
    ];
    return (
      <div className="w-full">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
          style={{ background: `${color}10`, border: `1px solid ${color}30` }}
        >
          <Plug size={12} style={{ color }} />
          <span style={{ fontSize: 11, fontWeight: 600, color, letterSpacing: "0.04em" }}>
            LIVE CONNECTIONS
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
              className="p-3 rounded-xl flex items-center gap-2 relative overflow-hidden"
              style={{ background: "#f8fafc", border: `1px solid ${it.color}30` }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: `${it.color}18`, color: it.color }}
              >
                <Plug size={13} />
              </div>
              <span
                style={{ fontSize: 12, fontWeight: 600, color: "#0b1a2b" }}
                className="truncate"
              >
                {it.name}
              </span>
              <span
                className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#10B981", animation: "why-pulse 1.6s ease-in-out infinite" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // index === 3: Joint Commission ready — audit log + CSV export
  const entries = [
    { time: "08:14a", action: "Sign-in · Cedar Memorial OR 4", hash: "0x7a2…f1" },
    { time: "08:46a", action: "Vendor badge scanned", hash: "0xb8c…e2" },
    { time: "10:02a", action: "Sign-out · post-case", hash: "0x91e…a4" },
    { time: "10:14a", action: "Credential re-verified", hash: "0x4d2…77" },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: `${color}10`, border: `1px solid ${color}30` }}
        >
          <FileCheck2 size={12} style={{ color }} />
          <span style={{ fontSize: 11, fontWeight: 600, color, letterSpacing: "0.04em" }}>
            APPEND-ONLY AUDIT LOG
          </span>
        </div>
        <button
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
          style={{ background: "#0b1a2b", color: "white", fontSize: 11.5, fontWeight: 600 }}
        >
          <Download size={11} /> CSV
        </button>
      </div>
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: "#0b1a2b", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}
      >
        {entries.map((e, i) => (
          <motion.div
            key={e.hash}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.05 + i * 0.06 }}
            className="flex items-center gap-3 px-4 py-2.5"
            style={{
              borderBottom:
                i === entries.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: 11, color: "#60A9E9", fontWeight: 600, width: 56 }}>
              {e.time}
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }} className="flex-1 truncate">
              {e.action}
            </span>
            <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.4)" }}>{e.hash}</span>
            <Check size={12} style={{ color: "#10B981" }} />
          </motion.div>
        ))}
      </div>
      <div className="mt-2 text-right" style={{ fontSize: 11, color: "#9ca3af" }}>
        Forge-proof · hash-chained · TJC compliant
      </div>
    </div>
  );
}
