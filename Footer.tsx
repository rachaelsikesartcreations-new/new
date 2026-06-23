import { Link } from "react-router";
import logoUrl from "../../imports/Frame.svg";

export function Footer() {
  const navLinks: Record<string, { label: string; to: string }[]> = {
    Platform: [
      { label: "Features", to: "/product#features" },
      { label: "Credential Dashboard", to: "/product#credentials" },
      { label: "Document Vault", to: "/product#document-vault" },
      { label: "AI Assistant", to: "/product#ai-assistant" },
      { label: "Integrations", to: "/product#integrations" },
    ],
    "For Reps": [
      { label: "Overview", to: "/reps" },
      { label: "Pricing", to: "/pricing" },
      { label: "Customers", to: "/customers" },
    ],
    "For Partners": [
      { label: "Overview", to: "/partners" },
      { label: "Enterprise", to: "/pricing#enterprise" },
      { label: "Contact Sales", to: "/contact" },
    ],
    Resources: [
      { label: "Newsroom", to: "/newsroom" },
      { label: "Customer Stories", to: "/customers#stories" },
    ],
    Company: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Log in", to: "/login" },
    ],
  };

  return (
    <footer
      style={{
        background: "#080e1a",
        fontFamily: "Inter, sans-serif",
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white">
                <img src={logoUrl} alt="RepWallet logo" className="w-7 h-7" />
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "white" }}>RepWallet</span>
            </Link>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              The operational system for medical device reps.
            </p>
          </div>

          {Object.entries(navLinks).map(([section, links]) => (
            <div key={section}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 12,
                }}
              >
                {section}
              </div>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={`${section}-${link.label}`}>
                    <Link
                      to={link.to}
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{
            borderTopWidth: 1,
            borderTopStyle: "solid",
            borderTopColor: "rgba(255,255,255,0.06)",
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © 2026 RepWallet. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "HIPAA Notice", to: "/hipaa" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
