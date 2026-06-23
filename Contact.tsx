import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  LifeBuoy,
  Newspaper,
  MapPin,
  Building2,
  User,
  Users,
  MessageSquare,
  Check,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { PageShell } from "./PageShell";
import { IMG } from "./images";

const channels = [
  {
    icon: Mail,
    label: "Sales",
    value: "sales@repwallet.com",
    href: "mailto:sales@repwallet.com",
    color: "#1F4E79",
    body: "Pricing, demos, and partnership questions.",
  },
  {
    icon: LifeBuoy,
    label: "Support",
    value: "support@repwallet.com",
    href: "mailto:support@repwallet.com",
    color: "#2E9E72",
    body: "Existing customers — we reply in under an hour during business days.",
  },
  {
    icon: Newspaper,
    label: "Press",
    value: "press@repwallet.com",
    href: "mailto:press@repwallet.com",
    color: "#E08A2B",
    body: "Media inquiries, interviews, and review embargoes.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "San Antonio, TX",
    color: "#32699A",
    body: "HQ in San Antonio, with a remote field team across the country.",
  },
];

const reasons = [
  "30-minute live walkthrough",
  "Tailored to your stack",
  "No prep required",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow="Contact"
      title="Talk to the RepWallet team."
      subtitle="Tell us how you run cases today and we'll show you how RepWallet fits. One business day reply, every time."
      heroImage={IMG.teamSofa}
    >
      {/* Response time pill */}
      <div className="-mt-6 mb-10 flex justify-start">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full"
          style={{
            background: "rgba(46,158,114,0.1)",
            border: "1px solid rgba(46,158,114,0.25)",
            color: "#1f7a55",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#2E9E72", animation: "why-pulse 1.6s ease-in-out infinite" }}
          />
          <Clock size={13} /> Avg reply time · under 1 business day
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Left rail — channels */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#32699A",
                marginBottom: 12,
              }}
            >
              Direct channels
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Reach the right team faster.
            </h2>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            {channels.map((c, i) => {
              const Icon = c.icon;
              const Wrap: any = c.href ? "a" : "div";
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Wrap
                    href={c.href}
                    className="flex items-start gap-4 p-5 rounded-2xl relative overflow-hidden block transition-all"
                    style={{
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div
                      aria-hidden
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: c.color }}
                    />
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: c.color, color: "white" }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: c.color,
                        }}
                      >
                        {c.label}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "#0b1a2b", marginTop: 4, letterSpacing: "-0.01em" }}>
                        {c.value}
                      </div>
                      <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, lineHeight: 1.5 }}>{c.body}</div>
                    </div>
                  </Wrap>
                </motion.div>
              );
            })}
          </div>

          {/* Trust card */}
          <div
            className="mt-2 p-5 rounded-2xl flex items-start gap-3"
            style={{
              background: "linear-gradient(135deg, #f7fafc 0%, #eef4fb 100%)",
              border: "1px solid rgba(31,78,121,0.1)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "#1F4E79", color: "white" }}
            >
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0b1a2b" }}>SOC 2 · HIPAA · BAA</div>
              <div style={{ fontSize: 12.5, color: "#6b7280", marginTop: 4, lineHeight: 1.55 }}>
                Security questionnaire, pen test, and trust center available on request.
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 rounded-2xl relative overflow-hidden"
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 30px 60px -25px rgba(11,26,43,0.25)",
          }}
        >
          <div
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[4px]"
            style={{ background: "linear-gradient(90deg, #1F4E79 0%, #32699A 50%, #60A9E9 100%)" }}
          />

          {sent ? (
            <div className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: "#2E9E72", color: "white", boxShadow: "0 20px 40px -10px rgba(46,158,114,0.5)" }}
              >
                <Check size={28} strokeWidth={3} />
              </motion.div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em" }}>
                Message received.
              </div>
              <div style={{ fontSize: 15, color: "#4b5563", marginTop: 10, lineHeight: 1.55, maxWidth: 380, margin: "10px auto 0" }}>
                We'll be in touch within one business day. In the meantime, you can browse our newsroom or request a live demo.
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/request-demo"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
                  style={{ background: "#1F4E79", color: "white", fontSize: 14, fontWeight: 700 }}
                >
                  Request a demo <ArrowRight size={14} />
                </Link>
                <Link
                  to="/newsroom"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
                  style={{ background: "transparent", color: "#1F4E79", border: "1.5px solid rgba(31,78,121,0.2)", fontSize: 14, fontWeight: 600 }}
                >
                  Read the newsroom
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(31,78,121,0.1)", color: "#1F4E79" }}
                >
                  <Sparkles size={16} />
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#32699A",
                  }}
                >
                  Get in touch
                </div>
              </div>
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#0b1a2b",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Tell us about your team.
              </h2>
              <p style={{ fontSize: 14.5, color: "#4b5563", marginTop: 8, lineHeight: 1.55 }}>
                One business day reply — tailored to how you actually run cases.
              </p>

              {/* What you'll get */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {reasons.map((r) => (
                  <li
                    key={r}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(46,158,114,0.08)",
                      border: "1px solid rgba(46,158,114,0.2)",
                      color: "#1f7a55",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    <Check size={11} strokeWidth={3} /> {r}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Name" type="text" required icon={User} />
                  <Field label="Work email" type="email" required icon={Mail} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Company" type="text" icon={Building2} />
                  <Field label="Team size" type="text" placeholder="e.g. 1–10, 25, 100+" icon={Users} />
                </div>
                <Field label="How can we help?" textarea icon={MessageSquare} placeholder="What does your credentialing workflow look like today?" />

                <button
                  type="submit"
                  className="mt-3 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: "#1F4E79",
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                    boxShadow: "0 12px 30px -10px rgba(31,78,121,0.5)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#163d61")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1F4E79")}
                >
                  Send message <ArrowRight size={14} />
                </button>
                <div className="text-center" style={{ fontSize: 12, color: "#6b7280" }}>
                  We never share your info. Replies come from a real human at RepWallet.
                </div>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  type = "text",
  required,
  textarea,
  placeholder,
  icon: Icon,
}: {
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  icon?: any;
}) {
  const shared = {
    style: {
      width: "100%",
      padding: Icon && !textarea ? "12px 14px 12px 40px" : "12px 14px",
      borderRadius: 10,
      border: "1px solid rgba(0,0,0,0.1)",
      fontSize: 14,
      fontFamily: "inherit",
      color: "#0b1a2b",
      background: "#fafbfc",
      outline: "none",
      transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s",
    } as React.CSSProperties,
    required,
    placeholder,
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "#1F4E79";
      e.currentTarget.style.background = "white";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(31,78,121,0.12)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
      e.currentTarget.style.background = "#fafbfc";
      e.currentTarget.style.boxShadow = "none";
    },
  };
  return (
    <label className="flex flex-col gap-1.5">
      <span style={{ fontSize: 12.5, fontWeight: 600, color: "#374151", letterSpacing: "0.01em" }}>{label}</span>
      <div className="relative">
        {Icon && !textarea && (
          <Icon
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "#6b7280" }}
          />
        )}
        {textarea ? <textarea rows={4} {...shared} /> : <input type={type} {...shared} />}
      </div>
    </label>
  );
}
