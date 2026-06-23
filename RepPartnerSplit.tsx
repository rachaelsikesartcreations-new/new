import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function RepPartnerSplit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20"
      style={{ background: "white", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* For Reps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-10"
            style={{ background: "#f4f7fb", border: "1px solid rgba(31,78,121,0.08)" }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#32699A",
                marginBottom: 14,
              }}
            >
              FOR REPS
            </p>
            <h3
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 600,
                color: "#0d1f35",
                lineHeight: 1.2,
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Stay organized.
              <br />
              Save time. Win more.
            </h3>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.6, marginBottom: 20 }}>
              RepWallet helps you eliminate busywork, stay prepared, and show up ready for every case.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Everything before every case, in one app",
                "Less admin, more time with customers",
                "Stay compliant and case-ready, always",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "#2E9E72" }}
                  >
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/reps"
              className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150 group"
              style={{ color: "#1F4E79", fontWeight: 600 }}
            >
              Learn more for reps
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </motion.div>

          {/* For Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-10"
            style={{ background: "#0d1f35", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#60A9E9",
                marginBottom: 14,
              }}
            >
              FOR PARTNERS
            </p>
            <h3
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 600,
                color: "white",
                lineHeight: 1.2,
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Stronger compliance.
              <br />
              Better outcomes.
            </h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 20 }}>
              RepWallet helps healthcare organizations streamline access, ensure compliance, and improve operational efficiency.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Real-time visibility and control",
                "Interoperable and easy to integrate",
                "Built for healthcare compliance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "#32699A" }}
                  >
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/partners"
              className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150 group"
              style={{ color: "#60A9E9", fontWeight: 600 }}
            >
              Learn more for partners
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
