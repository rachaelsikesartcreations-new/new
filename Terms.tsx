import { PageShell } from "./PageShell";
import { LegalBody } from "./Privacy";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of the RepWallet website, mobile applications, and services (collectively, the \"Services\") provided by RepWallet, Inc. (\"RepWallet\", \"we\", \"us\"). By accessing or using the Services, you agree to be bound by these Terms.",
      "If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.",
    ],
  },
  {
    heading: "2. Eligibility and Accounts",
    body: [
      "You must be at least 18 years old and capable of forming a binding contract to use the Services. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
    ],
  },
  {
    heading: "3. Subscription and Fees",
    body: [
      "Access to certain features of the Services requires a paid subscription. Fees, billing terms, and renewal terms are set forth in the order form or subscription page applicable to your plan. Unless otherwise stated, fees are non-refundable.",
    ],
  },
  {
    heading: "4. Customer Data",
    body: [
      "You retain all rights in the data you submit to the Services (\"Customer Data\"). You grant RepWallet a limited license to host, process, and transmit Customer Data solely to provide and improve the Services. You are responsible for the accuracy and legality of Customer Data and for obtaining all necessary consents.",
    ],
  },
  {
    heading: "5. Acceptable Use",
    body: ["You agree not to:"],
    list: [
      "Use the Services in violation of any law or regulation.",
      "Upload malicious code or attempt to disrupt the Services.",
      "Reverse engineer, decompile, or attempt to extract source code from the Services.",
      "Resell, sublicense, or provide the Services to third parties except as expressly permitted.",
      "Use the Services to harass, harm, or defraud any person.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    body: [
      "The Services, including all software, content, trademarks, and other intellectual property, are owned by RepWallet or its licensors and are protected by applicable laws. Except for the limited rights expressly granted to you, no rights are granted by implication, estoppel, or otherwise.",
    ],
  },
  {
    heading: "7. Third-Party Services and Integrations",
    body: [
      "The Services may interoperate with third-party products or services. RepWallet is not responsible for the availability, content, or practices of any third-party service. Your use of third-party services is governed by the applicable third-party terms.",
    ],
  },
  {
    heading: "8. Confidentiality",
    body: [
      "Each party agrees to protect the other's confidential information with at least the same degree of care it uses to protect its own confidential information, and in no event less than reasonable care.",
    ],
  },
  {
    heading: "9. Disclaimers",
    body: [
      "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. REPWALLET DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
    ],
  },
  {
    heading: "10. Limitation of Liability",
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, REPWALLET WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES. REPWALLET'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO REPWALLET IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
    ],
  },
  {
    heading: "11. Termination",
    body: [
      "Either party may terminate these Terms for material breach that is not cured within 30 days of written notice. Upon termination, your right to access the Services will cease, and RepWallet may delete your data after a reasonable transition period.",
    ],
  },
  {
    heading: "12. Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws principles. Any disputes arising under these Terms will be resolved in the state or federal courts located in Bexar County, Texas.",
    ],
  },
  {
    heading: "13. Changes to Terms",
    body: [
      "We may modify these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website or by other reasonable means. Continued use of the Services after the effective date constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "14. Contact Us",
    body: [
      "Questions about these Terms? Contact us at legal@repwallet.com or by mail at RepWallet, Inc., Attn: Legal, San Antonio, TX.",
    ],
  },
];

export function Terms() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The terms that govern your use of the RepWallet platform."
    >
      <LegalBody lastUpdated="June 6, 2026" sections={sections} />
    </PageShell>
  );
}
