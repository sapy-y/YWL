import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/activites", label: "Nos activités" },
  { to: "/evenements", label: "Événements" },
  { to: "/agenda", label: "Agenda" },
  { to: "/impact", label: "YWL Impact" },
  { to: "/guests", label: "Nos Guest" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg transition-all ${
        scrolled ? "border-ywl-pink/20 shadow-sm" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Young Women Leaders"
            className={`rounded-full object-cover transition-all ${scrolled ? "h-10 w-10" : "h-12 w-12"}`}
          />
          <span className="font-heading text-lg font-bold tracking-tight text-ywl-black">
            Young Women <span className="text-gradient">Leaders</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 text-sm font-semibold transition hover:text-ywl-pink ${
                  isActive ? "text-ywl-pink" : "text-ywl-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-none bg-ywl-pink"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink to="/rejoindre" className="btn-primary text-sm">
            Rejoindre YWL
          </NavLink>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Ouvrir le menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 origin-center bg-ywl-black"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-6 bg-ywl-black"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 origin-center bg-ywl-black"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1 overflow-hidden border-t border-ywl-pink/20 bg-white px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-none px-3 py-2 text-sm font-semibold transition ${
                      isActive ? "bg-ywl-pink/10 text-ywl-pink" : "text-ywl-black"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/rejoindre"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 text-center text-sm"
              >
                Rejoindre YWL
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
