import { ReactNode } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroOverlay,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroOverlay?: boolean;
  children?: ReactNode;
}) {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            heroImage
              ? "#0b1a2b"
              : "linear-gradient(180deg, #f7fafc 0%, #ffffff 100%)",
          borderBottom: heroImage ? "none" : "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {heroImage && (
          <>
            <ImageWithFallback
              src={heroImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: heroOverlay === false ? 1 : 0.45 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,26,43,0.55) 0%, rgba(11,26,43,0.85) 100%)",
              }}
            />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {eyebrow && (
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: heroImage ? "#60A9E9" : "#32699A",
                  marginBottom: 18,
                }}
              >
                {eyebrow}
              </div>
            )}
            <h1
              style={{
                fontSize: "clamp(38px, 5.5vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.02,
                color: heroImage ? "white" : "#0b1a2b",
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  marginTop: 22,
                  fontSize: 19,
                  lineHeight: 1.55,
                  color: heroImage ? "rgba(255,255,255,0.78)" : "#4b5563",
                  maxWidth: 680,
                }}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">{children}</section>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#32699A",
            marginBottom: 12,
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0b1a2b", lineHeight: 1.15 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: "#4b5563" }}>{subtitle}</p>
      )}
    </div>
  );
}
