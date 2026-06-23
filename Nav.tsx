import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, NavLink } from "react-router";
import logoUrl from "../../imports/Frame.svg";

const links = [
  { label: "Product", to: "/product" },
  { label: "For Reps", to: "/reps" },
  { label: "For Partners", to: "/partners" },
  { label: "Newsroom", to: "/newsroom" },
  { label: "About", to: "/about" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: "Inter, sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoUrl} alt="RepWallet logo" className="w-8 h-8" />
          <span
            className="text-base tracking-tight"
            style={{ color: "#1F4E79", fontWeight: 700, fontFamily: "Inter, sans-serif" }}
          >
            RepWallet
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-sm transition-colors duration-150"
              style={({ isActive }) => ({
                color: isActive ? "#1F4E79" : "#374151",
                fontWeight: isActive ? 600 : 500,
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm transition-colors duration-150"
            style={{ color: "#374151", fontWeight: 500 }}
          >
            Log in
          </Link>
          <Link
            to="/request-demo"
            className="text-sm px-4 py-2 rounded-lg transition-all duration-150"
            style={{ background: "#1F4E79", color: "white", fontWeight: 600 }}
          >
            Request a Demo
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "#1F4E79" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-black/[0.06] bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm"
                  style={({ isActive }) => ({
                    color: isActive ? "#1F4E79" : "#374151",
                    fontWeight: isActive ? 600 : 500,
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2 border-t border-black/[0.06] flex flex-col gap-3">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="text-sm" style={{ color: "#374151", fontWeight: 500 }}>
                  Log in
                </Link>
                <Link
                  to="/request-demo"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm px-4 py-2.5 rounded-lg text-center"
                  style={{ background: "#1F4E79", color: "white", fontWeight: 600 }}
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
