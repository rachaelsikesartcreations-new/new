import { motion } from "motion/react";
import { Check } from "lucide-react";
import { PageShell, SectionHeader } from "./PageShell";
import { IMG } from "./images";

const tiers = [
  {
    name: "Rep",
    price: "$29",
    cadence: "/ rep / month",
    blurb: "For individual reps managing their own credentials and cases.",
    features: ["Credential vault", "Hospital access tracking", "Calendar sync", "Mobile app"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Team",
    price: "$79",
    cadence: "/ rep / month",
    blurb: "For distributors and regional teams that need shared visibility.",
    features: ["Everything in Rep", "Team dashboard", "AI assistant", "Salesforce / HubSpot sync", "Priority support"],
    cta: "Request a demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "For manufacturers and large distributors with custom workflows.",
    features: ["Everything in Team", "SSO + SCIM", "Custom integrations", "Dedicated CSM", "BAA + HIPAA"],
    cta: "Talk to sales",
    highlight: false,
  },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes — 14 days on the Rep plan, no credit card required." },
  { q: "Do you sign a BAA?", a: "Yes, on the Enterprise plan. SOC 2 Type II report available on request." },
  { q: "What credentialing systems do you support?", a: "Reptrax, symplr, Vendormate, GHX, IntelliCentrics, and 7 more out of the box." },
  { q: "Can we onboard a 200-rep team?", a: "Yes. Enterprise rollouts include a dedicated CSM and SSO from day one." },
];

const logos = ["Vertex Ortho", "Pacific Spine", "Coastline CV", "Atlas Med", "Northstar Devices", "Meridian Surgical"];

export function Pricing() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Simple plans that scale with your team."
      subtitle="Start with a single rep or roll out to your entire distributorship. Every plan includes the credential vault and hospital access engine."
      heroImage={IMG.corridorLight}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            id={t.name.toLowerCase()}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl p-7 flex flex-col relative"
            style={{
              scrollMarginTop: 80,
              background: t.highlight ? "#0b1a2b" : "white",
              color: t.highlight ? "white" : "#0b1a2b",
              border: t.highlight ? "1px solid #1F4E79" : "1px solid rgba(0,0,0,0.06)",
              boxShadow: t.highlight ? "0 25px 60px -20px rgba(31,78,121,0.55)" : "0 1px 2px rgba(0,0,0,0.03)",
              transform: t.highlight ? "translateY(-8px)" : "none",
            }}
          >
            {t.highlight && (
              <div
                className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full"
                style={{ background: "#60A9E9", color: "#0b1a2b", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Most popular
              </div>
            )}
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: t.highlight ? "#60A9E9" : "#32699A" }}>
              {t.name}
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em" }}>{t.price}</span>
              {t.cadence && (
                <span style={{ fontSize: 14, color: t.highlight ? "rgba(255,255,255,0.55)" : "#6b7280" }}>{t.cadence}</span>
              )}
            </div>
            <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: t.highlight ? "rgba(255,255,255,0.7)" : "#4b5563" }}>
              {t.blurb}
            </p>
            <ul className="mt-6 flex flex-col gap-3 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5" style={{ fontSize: 14 }}>
                  <Check size={16} style={{ color: t.highlight ? "#60A9E9" : "#10B981", marginTop: 2, flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-7 py-2.5 rounded-lg"
              style={{
                background: t.highlight ? "#60A9E9" : "#1F4E79",
                color: t.highlight ? "#0b1a2b" : "white",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {t.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <div className="text-center" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b7280", marginBottom: 24 }}>
          Trusted by distributorships across the U.S.
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="h-12 flex items-center justify-center rounded-lg"
              style={{ background: "rgba(11,26,43,0.04)", color: "#4b5563", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em" }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionHeader eyebrow="FAQ" title="Questions, answered." align="center" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {faqs.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#0b1a2b", marginBottom: 6 }}>{f.q}</div>
              <div style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
