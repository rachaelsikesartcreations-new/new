import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };
    if (!tryScroll()) {
      const t = setTimeout(tryScroll, 80);
      return () => clearTimeout(t);
    }
  }, [hash, pathname]);
  return null;
}

export function Root() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="min-h-screen">
      <Nav />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration getKey={(location) => location.pathname} />
      <ScrollToHash />
    </div>
  );
}
