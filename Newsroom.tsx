import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { articles } from "../pages/articles";

export function Newsroom() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      ref={ref}
      className="py-28"
      style={{ background: "#f8f9fb", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1F4E79",
                marginBottom: 8,
              }}
            >
              NEWSROOM
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 600,
                color: "#0d1f35",
                letterSpacing: "-0.02em",
              }}
            >
              Latest from RepWallet.
            </h2>
          </div>
          <Link
            to="/newsroom"
            className="inline-flex items-center gap-1.5 text-sm group shrink-0"
            style={{ color: "#1F4E79", fontWeight: 600 }}
          >
            View all
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-md"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <Link to={`/newsroom/${article.slug}`} className="flex flex-col flex-1" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ height: 4, background: article.tagColor }} />
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-semibold"
                    style={{ background: `${article.tagColor}14`, color: article.tagColor }}
                  >
                    {article.tag}
                  </span>
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>{article.date}</span>
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#0d1f35",
                    lineHeight: 1.3,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{article.sub}</p>
                <div
                  className="inline-flex items-center gap-1.5 mt-4 text-sm group-hover:gap-2 transition-all duration-150"
                  style={{ color: article.tagColor, fontWeight: 600 }}
                >
                  Read more
                  <ArrowRight size={13} />
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#0d1f35", marginBottom: 4 }}>
              Stay updated with RepWallet.
            </div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>
              Product updates, insights, and resources—delivered to your inbox.
            </div>
          </div>
          {submitted ? (
            <div className="flex items-center gap-2 shrink-0" style={{ color: "#2E9E72", fontWeight: 600, fontSize: 14 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#2E9E72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              You're subscribed
            </div>
          ) : (
            <form
              className="flex gap-2 shrink-0 w-full sm:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="px-3 py-2 rounded-lg text-sm outline-none transition-colors duration-150"
                style={{
                  border: "1.5px solid rgba(0,0,0,0.1)",
                  color: "#111",
                  background: "#f9f9f9",
                  fontSize: 13,
                  minWidth: 200,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#1F4E79")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-sm transition-all duration-150"
                style={{ background: "#1F4E79", color: "white", fontWeight: 600 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#163a5e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1F4E79")}
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
