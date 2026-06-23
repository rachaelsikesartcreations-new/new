import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { articles, getArticle } from "./articles";
import { NotFound } from "./NotFound";
import { ArticleCover } from "./ArticleCovers";

const HAS_COVER = new Set(["smart-expiration-alerts", "hidden-cost-of-credentialing-friction", "why-were-building-repwallet"]);

export function Article() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;
  if (!article) return <NotFound />;

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <section className="relative" style={{ background: "#0b1a2b" }}>
        <ImageWithFallback
          src={article.cover}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,26,43,0.55) 0%, rgba(11,26,43,0.92) 100%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28">
          <Link
            to="/newsroom"
            className="inline-flex items-center gap-1.5 mb-8"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500 }}
          >
            <ArrowLeft size={14} />
            Back to Newsroom
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-2.5 py-1 rounded text-xs"
              style={{ background: `${article.tagColor}30`, color: "white", fontWeight: 600, letterSpacing: "0.04em" }}
            >
              {article.tag}
            </span>
            <span className="inline-flex items-center gap-1.5" style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
              <Calendar size={12} /> {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5" style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
              <Clock size={12} /> {article.readTime}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "clamp(34px, 4.5vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              color: "white",
            }}
          >
            {article.title}
          </motion.h1>
          <p
            style={{
              marginTop: 18,
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {article.sub}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "white", fontWeight: 600, fontSize: 14 }}
            >
              {article.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{article.author.name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{article.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col gap-6">
          {article.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#0b1a2b",
                    letterSpacing: "-0.015em",
                    marginTop: 16,
                  }}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-4 pl-6"
                  style={{
                    borderLeft: "3px solid #60A9E9",
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "#0b1a2b",
                  }}
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="flex flex-col gap-2.5 pl-1">
                  {block.items?.map((it) => (
                    <li key={it} className="flex items-start gap-3" style={{ fontSize: 16, lineHeight: 1.65, color: "#374151" }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: article.tagColor }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} style={{ fontSize: 17, lineHeight: 1.7, color: "#374151" }}>
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      <section style={{ background: "#f8f9fb", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#32699A", marginBottom: 8 }}>
                Keep reading
              </div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#0b1a2b", letterSpacing: "-0.02em" }}>More from the Newsroom</h2>
            </div>
            <Link to="/newsroom" className="inline-flex items-center gap-1.5" style={{ color: "#1F4E79", fontWeight: 600, fontSize: 14 }}>
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/newsroom/${r.slug}`}
                className="group rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", textDecoration: "none" }}
              >
                <div className="relative aspect-[16/9]">
                  {HAS_COVER.has(r.slug) ? (
                    <ArticleCover slug={r.slug} variant="card" />
                  ) : (
                    <ImageWithFallback src={r.cover} alt={r.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ background: `${r.tagColor}14`, color: r.tagColor, fontWeight: 600 }}
                    >
                      {r.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>{r.date}</span>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "#0b1a2b", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                    {r.title}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all" style={{ color: r.tagColor, fontWeight: 600, fontSize: 13 }}>
                    Read more <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
