import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "#0d1f35", fontFamily: "Inter, sans-serif" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 60%, rgba(31,78,121,0.5) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Ready before every case?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
              marginBottom: 36,
              maxWidth: 440,
              margin: "0 auto 36px",
            }}
          >
            Join reps who've replaced credential chaos with one operational system built for the way they actually work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/request-demo"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm transition-all duration-150"
              style={{ background: "white", color: "#1F4E79", fontWeight: 700 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f0f4f8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}
            >
              Request a Demo
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm transition-all duration-150"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                border: "1.5px solid rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
              }}
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
