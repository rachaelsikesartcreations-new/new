import { PageShell } from "./PageShell";

const sections = [
  {
    heading: "1. Introduction",
    body: [
      "RepWallet, Inc. (\"RepWallet\", \"we\", \"our\", or \"us\") respects your privacy. This Privacy Policy describes the types of information we collect from and about you when you visit our website, use our mobile and web applications, or interact with our services (collectively, the \"Services\"), and how we use, share, and safeguard that information.",
      "By using the Services, you agree to the collection and use of information in accordance with this Policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "We collect information you provide directly to us, information we collect automatically when you use the Services, and information from third parties.",
    ],
    list: [
      "Account information: name, email, phone number, employer, role, and credential identifiers.",
      "Credential and access data: licenses, vaccinations, training certifications, and hospital access records you upload or that flow through integrations you authorize.",
      "Usage data: pages viewed, features used, device identifiers, IP address, and approximate location.",
      "Communications: messages you send to us or through the Services, including support inquiries and feedback.",
    ],
  },
  {
    heading: "3. How We Use Information",
    body: ["We use the information we collect to:"],
    list: [
      "Provide, operate, and maintain the Services.",
      "Authenticate users and secure accounts.",
      "Sync credentials with hospital credentialing systems you connect.",
      "Send service notifications, expiration reminders, and product updates.",
      "Improve the Services, develop new features, and conduct analytics.",
      "Comply with legal obligations and enforce our agreements.",
    ],
  },
  {
    heading: "4. How We Share Information",
    body: [
      "We do not sell your personal information. We share information only as described below:",
    ],
    list: [
      "With your employer or organization if you use RepWallet on their behalf.",
      "With hospitals, credentialing systems, and integration partners you authorize.",
      "With service providers who perform services on our behalf under contractual confidentiality obligations.",
      "To comply with law, legal process, or government requests; to protect our rights, property, or safety; or in connection with a merger, acquisition, or sale of assets.",
    ],
  },
  {
    heading: "5. Data Security",
    body: [
      "RepWallet maintains administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, use, alteration, and disclosure. We encrypt data in transit and at rest, maintain SOC 2 controls, and offer Business Associate Agreements (BAAs) for HIPAA-covered relationships.",
    ],
  },
  {
    heading: "6. Data Retention",
    body: [
      "We retain personal information for as long as your account is active or as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce agreements. You may request deletion of your information at any time, subject to legal retention requirements.",
    ],
  },
  {
    heading: "7. Your Rights and Choices",
    body: [
      "Depending on where you live, you may have rights to access, correct, delete, restrict, or port your personal information, and to object to certain processing. You can exercise these rights by contacting us at privacy@repwallet.com.",
    ],
  },
  {
    heading: "8. Children's Privacy",
    body: [
      "The Services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    heading: "9. International Users",
    body: [
      "The Services are operated in the United States. If you access the Services from outside the U.S., you consent to the transfer and processing of your information in the United States.",
    ],
  },
  {
    heading: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will post the updated Policy on this page and update the \"Last updated\" date. Material changes will be communicated to account holders by email or in-product notice.",
    ],
  },
  {
    heading: "11. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or our privacy practices, contact us at privacy@repwallet.com or by mail at RepWallet, Inc., Attn: Privacy, San Antonio, TX.",
    ],
  },
];

export function Privacy() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How RepWallet collects, uses, and protects your information."
    >
      <LegalBody lastUpdated="June 6, 2026" sections={sections} />
    </PageShell>
  );
}

export function LegalBody({
  lastUpdated,
  sections,
}: {
  lastUpdated: string;
  sections: { heading: string; body?: string[]; list?: string[] }[];
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#6b7280",
          marginBottom: 28,
        }}
      >
        Last updated · {lastUpdated}
      </div>
      <div className="flex flex-col gap-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#0b1a2b",
                letterSpacing: "-0.01em",
                marginBottom: 12,
              }}
            >
              {s.heading}
            </h2>
            {s.body?.map((p, i) => (
              <p
                key={i}
                style={{ fontSize: 15, lineHeight: 1.7, color: "#374151", marginBottom: 10 }}
              >
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="flex flex-col gap-2 mt-2">
                {s.list.map((li) => (
                  <li key={li} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#1F4E79" }}
                    />
                    <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.7 }}>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <div
        className="mt-14 p-5 rounded-xl"
        style={{
          background: "rgba(31,78,121,0.04)",
          border: "1px solid rgba(31,78,121,0.1)",
        }}
      >
        <div style={{ fontSize: 12, color: "#4b5563", lineHeight: 1.6 }}>
          This document is provided for general informational purposes and does not constitute legal advice. Customers and partners should review with their own counsel before relying on it.
        </div>
      </div>
    </div>
  );
}
