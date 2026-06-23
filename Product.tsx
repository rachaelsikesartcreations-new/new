import { motion } from "motion/react";
import { ShieldCheck, Hospital, Calendar, Sparkles, BarChart3, Plug, FileText, Mail, MessageSquare, Workflow as WorkflowIcon } from "lucide-react";
import { PageShell, SectionHeader } from "./PageShell";
import { IMG } from "./images";
import { CredentialVaultMock, DocumentVaultMock, HospitalAccessMock, SchedulingMock, AIAssistantMock } from "./ProductMocks";

import salesforceLogo from "../../imports/idEbbqNvv9_1780593147671.jpeg";
import hubspotLogo from "../../imports/id_J1lk9xr_1780593348177.jpeg";
import outlookLogo from "../../imports/idbSMOAo8S_1780593362847.png";
import googleLogo from "../../imports/id10XnGpc-_logos.jpeg";
import symplrLogo from "../../imports/id06v2D81R_1780593293449.png";
import ghxLogo from "../../imports/idx_o2NMff_1780593176426.jpeg";
import oktaLogo from "../../imports/id34gx1cW6_1780593392780.jpeg";
import slackLogo from "../../imports/Icon__2_.jpeg";
import docusignLogo from "../../imports/Icon__1_.jpeg";
import intellicentricsLogo from "../../imports/id8of-tYqb_1780593420163.jpeg";

const featureRows = [
  {
    id: "credentials",
    icon: ShieldCheck,
    eyebrow: "Credential Dashboard",
    title: "Every license, vaccination, and training — always current.",
    body: "Auto-renewal reminders, expiration tracking, and one-tap submission to every credentialing system your hospitals use. No more spreadsheet of PDFs.",
    bullets: ["Auto-renewal reminders 60/30/7 days out", "Live status across credentialing systems", "Audit-ready compliance log"],
    mock: <CredentialVaultMock />,
    flip: false,
  },
  {
    id: "document-vault",
    icon: FileText,
    eyebrow: "Document Vault",
    title: "Every document, organized and encrypted.",
    body: "Licenses, immunizations, training certs, and insurance — uploaded once, OCR-parsed, and routed to the right credentialing portals automatically. Versioned and audit-logged.",
    bullets: ["OCR auto-tagging of expiration dates", "HIPAA-compliant encrypted storage", "Version history and audit log"],
    mock: <DocumentVaultMock />,
    flip: true,
  },
  {
    id: "access",
    icon: Hospital,
    eyebrow: "Hospital Access",
    title: "One source of truth across Reptrax, symplr, Vendormate.",
    body: "Pre-clearance, vendor credentialing, and on-site check-in unified into one workflow. Reps know exactly what's needed before they leave the car.",
    bullets: ["Live status across 12 systems", "Mobile check-in", "Hospital-specific requirements"],
    mock: <HospitalAccessMock />,
    flip: false,
  },
  {
    id: "scheduling",
    icon: Calendar,
    eyebrow: "Smart Scheduling",
    title: "Cases, ORs, and reps — in sync.",
    body: "Two-way calendar sync with OR schedules, surgeon offices, and your team's availability. Conflicts surface before they cost you a case.",
    bullets: ["Two-way Outlook & Google sync", "OR block visibility", "Coverage handoff workflows"],
    mock: <SchedulingMock />,
    flip: true,
  },
  {
    id: "ai-assistant",
    icon: Sparkles,
    eyebrow: "AI Assistant",
    title: "A copilot that prepares the night before.",
    body: "Drafts case prep emails, surfaces surgeon preferences, and flags missing credentials before they bite. It's like an extra teammate who never sleeps.",
    bullets: ["Case prep summaries", "Email & message drafting", "Credential gap alerts"],
    mock: <AIAssistantMock />,
    flip: false,
  },
];

const quickFeatures = [
  { icon: BarChart3, title: "Compliance Dashboard", body: "Live status across every rep, hospital, and policy." },
  { icon: WorkflowIcon, title: "Case Workflows", body: "Configurable case prep, pull lists, and post-op checklists." },
  { icon: ShieldCheck, title: "SOC 2 + HIPAA", body: "Enterprise-grade security, BAAs available." },
];

const integrations: { name: string; category: string; mark?: string; color?: string; logo?: string }[] = [
  { name: "Salesforce", category: "CRM", logo: salesforceLogo },
  { name: "HubSpot", category: "CRM", logo: hubspotLogo },
  { name: "Outlook", category: "Calendar & Email", logo: outlookLogo },
  { name: "Google Workspace", category: "Calendar & Email", logo: googleLogo },
  { name: "Reptrax", category: "Credentialing" },
  { name: "symplr", category: "Credentialing", logo: symplrLogo },
  { name: "Vendormate", category: "Credentialing" },
  { name: "GHX", category: "Credentialing", logo: ghxLogo },
  { name: "IntelliCentrics", category: "Credentialing", logo: intellicentricsLogo },
  { name: "Slack", category: "Messaging", logo: slackLogo },
  { name: "DocuSign", category: "Documents", logo: docusignLogo },
  { name: "Okta", category: "Identity", logo: oktaLogo },
];

export function Product() {
  return (
    <PageShell
      eyebrow="Platform"
      title="The operating system for medical sales reps."
      subtitle="RepWallet unifies credentials, hospital access, scheduling, and AI assistance — so your team stops chasing paperwork and starts closing cases."
      heroImage={IMG.surgeryTeam}
    >
      <div id="features" style={{ scrollMarginTop: 80 }} className="flex flex-col gap-24">
        {featureRows.map((row, i) => {
          const Icon = row.icon;
          return (
            <motion.div
              key={row.eyebrow}
              id={row.id}
              style={{ scrollMarginTop: 80 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${row.flip ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full" style={{ background: "rgba(31,78,121,0.08)" }}>
                  <Icon size={14} style={{ color: "#1F4E79" }} />
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1F4E79" }}>
                    {row.eyebrow}
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#0b1a2b" }}>
                  {row.title}
                </h2>
                <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.65, color: "#4b5563" }}>{row.body}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {row.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10B981" }} />
                      <span style={{ fontSize: 14, color: "#374151" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl"
                  style={{ background: "linear-gradient(135deg, rgba(96,169,233,0.18), rgba(31,78,121,0.05))" }}
                />
                <div className="relative">{row.mock}</div>
              </div>
            </motion.div>
          );
        })}

        <div>
          <SectionHeader
            eyebrow="And more"
            title="Everything the field actually needs."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {quickFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-6 rounded-2xl"
                  style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                    style={{ background: "rgba(31,78,121,0.08)", color: "#1F4E79" }}
                  >
                    <Icon size={18} />
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "#0b1a2b", marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6 }}>{f.body}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="integrations" style={{ scrollMarginTop: 80 }}>
          <SectionHeader
            eyebrow="Integrations"
            title="Plugs into the tools your team already uses."
            subtitle="Connect RepWallet to the CRM, calendar, credentialing, and identity systems your team already depends on."
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {integrations.map((it, i) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="p-4 rounded-xl flex items-center gap-3"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{
                    background: it.logo
                      ? "white"
                      : it.mark
                      ? it.color ?? "rgba(31,78,121,0.08)"
                      : "rgba(31,78,121,0.08)",
                    color: it.mark ? "white" : "#1F4E79",
                    fontWeight: 800,
                    fontSize: it.mark && it.mark.length >= 3 ? 10 : 13,
                    letterSpacing: "-0.02em",
                    border: it.logo ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  {it.logo ? (
                    <img src={it.logo} alt={`${it.name} logo`} className="w-full h-full object-contain" />
                  ) : it.mark ? (
                    it.mark
                  ) : (
                    <Plug size={15} />
                  )}
                </div>
                <div className="min-w-0">
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0b1a2b" }} className="truncate">{it.name}</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>{it.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
