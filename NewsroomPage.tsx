import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageShell } from "./PageShell";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { articles } from "./articles";
import { IMG } from "./images";
import { ArticleCover } from "./ArticleCovers";

const HAS_COVER = new Set(["smart-expiration-alerts", "hidden-cost-of-credentialing-friction", "why-were-building-repwallet"]);

export function NewsroomPage() {
  const [feature, ...rest] = articles;

  return (
    <PageShell
      eyebrow="Newsroom"
      title="Product updates, ideas, and stories from the field."
      subtitle="What we're shipping, what we're learning, and how the medical-rep job is changing."
      heroImage={IMG.corridor}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to={`/newsroom/${feature.slug}`}
          className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden group"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", textDecoration: "none", color: "inherit" }}
        >
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px]">
            {HAS_COVER.has(feature.slug) ? (
              <ArticleCover slug={feature.slug} variant="hero" />
            ) : (
              <ImageWithFallback src={feature.cover} alt={feature.title} className="absolute inset-0 w-full h-full object-cover" />
            )}
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2.5 py-1 rounded text-xs"
                style={{ background: `${feature.tagColor}14`, color: feature.tagColor, fontWeight: 600 }}
              >
                {feature.tag}
              </span>
              <span className="inline-flex items-center gap-1.5" style={{ fontSize: 12, color: "#6b7280" }}>
                <Calendar size={12} /> {feature.date}
              </span>
              <span className="inline-flex items-center gap-1.5" style={{ fontSize: 12, color: "#6b7280" }}>
                <Clock size={12} /> {feature.readTime}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              {feature.title}
            </h2>
            <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: "#4b5563" }}>{feature.sub}</p>
            <div className="mt-6 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all" style={{ color: feature.tagColor, fontWeight: 600, fontSize: 14 }}>
              Read article <ArrowRight size={14} />
            </div>
          </div>
        </Link>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((a, i) => (
          <motion.div
            key={a.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              to={`/newsroom/${a.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden h-full"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", textDecoration: "none", color: "inherit" }}
            >
              <div className="relative aspect-[16/9]">
                {HAS_COVER.has(a.slug) ? (
                  <ArticleCover slug={a.slug} variant="card" />
                ) : (
                  <ImageWithFallback src={a.cover} alt={a.title} className="absolute inset-0 w-full h-full object-cover" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 rounded text-xs"
                    style={{ background: `${a.tagColor}14`, color: a.tagColor, fontWeight: 600 }}
                  >
                    {a.tag}
                  </span>
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>{a.date}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#0b1a2b", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginTop: 8, flex: 1 }}>{a.sub}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all" style={{ color: a.tagColor, fontWeight: 600, fontSize: 13 }}>
                  Read more <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
