import { PageShell } from "./PageShell";
import { LegalBody } from "./Privacy";

const sections = [
  {
    heading: "1. Purpose",
    body: [
      "RepWallet, Inc. (\"RepWallet\") is committed to safeguarding the privacy and security of Protected Health Information (\"PHI\") that may be processed through its services. This Notice describes how RepWallet handles PHI in its role as a Business Associate under the Health Insurance Portability and Accountability Act of 1996, as amended (\"HIPAA\"), and the Health Information Technology for Economic and Clinical Health Act (\"HITECH\").",
    ],
  },
  {
    heading: "2. Our Role",
    body: [
      "RepWallet is not a Covered Entity. We act as a Business Associate when our customers (which may include hospitals, health systems, or device manufacturers) provide PHI to us in connection with the services. In that role, we use and disclose PHI only as permitted by HIPAA and by our Business Associate Agreement (\"BAA\") with each customer.",
    ],
  },
  {
    heading: "3. What PHI We May Process",
    body: [
      "Depending on customer configuration, PHI processed through the Services may include:",
    ],
    list: [
      "Demographic and contact information of individuals associated with a case.",
      "Case schedules, surgeon names, and facility information.",
      "Credentialing data tied to specific facilities, where that data relates to an identified individual.",
      "Communications referencing case-level details.",
    ],
  },
  {
    heading: "4. Permitted Uses and Disclosures",
    body: [
      "We use and disclose PHI only as necessary to (a) perform the services described in the applicable customer agreement, (b) comply with our obligations under HIPAA, or (c) as required by law. We do not sell PHI and we do not use PHI for marketing without authorization.",
    ],
  },
  {
    heading: "5. Safeguards",
    body: [
      "RepWallet maintains administrative, physical, and technical safeguards designed to protect the confidentiality, integrity, and availability of PHI. These include encryption in transit and at rest, role-based access controls, audit logging, workforce training, vendor risk management, and a documented incident response program. We undergo periodic independent assessments, including SOC 2 Type II audits.",
    ],
  },
  {
    heading: "6. Subcontractors",
    body: [
      "Where RepWallet engages subcontractors that may access PHI on its behalf, it enters into written agreements requiring those subcontractors to comply with substantially the same restrictions and conditions that apply to RepWallet under HIPAA and the applicable BAA.",
    ],
  },
  {
    heading: "7. Breach Notification",
    body: [
      "In the event of a Breach of Unsecured PHI, RepWallet will notify the affected customer without unreasonable delay and in accordance with the timelines required by HIPAA and the applicable BAA. We will cooperate with the customer to investigate the incident, mitigate harm, and provide the information necessary for the customer to fulfill any notification obligations.",
    ],
  },
  {
    heading: "8. Individual Rights",
    body: [
      "Requests from individuals seeking to exercise rights under HIPAA (such as access, amendment, accounting of disclosures, or restrictions) should generally be directed to the Covered Entity. RepWallet will support its customers in responding to those requests as set forth in the applicable BAA.",
    ],
  },
  {
    heading: "9. Business Associate Agreement",
    body: [
      "RepWallet will execute a Business Associate Agreement with any customer that requires one to comply with HIPAA. To request a BAA, contact baa@repwallet.com.",
    ],
  },
  {
    heading: "10. Changes to This Notice",
    body: [
      "RepWallet may update this Notice from time to time. Material changes will be posted on this page and reflected in the \"Last updated\" date below.",
    ],
  },
  {
    heading: "11. Contact",
    body: [
      "Questions about RepWallet's HIPAA practices may be directed to our Privacy Officer at hipaa@repwallet.com, or by mail at RepWallet, Inc., Attn: Privacy Officer, San Antonio, TX.",
    ],
  },
];

export function HipaaNotice() {
  return (
    <PageShell
      eyebrow="Compliance"
      title="HIPAA Notice"
      subtitle="How RepWallet handles Protected Health Information as a Business Associate."
    >
      <LegalBody lastUpdated="June 6, 2026" sections={sections} />
    </PageShell>
  );
}
