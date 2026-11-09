import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-ywl-purple-light/60 via-white to-ywl-pink/10">
      <div className="blob -left-24 -top-24 h-72 w-72 bg-ywl-pink/30" />
      <div className="blob -right-20 top-10 h-64 w-64 bg-ywl-purple/25" style={{ animationDelay: "-6s" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="section relative !py-14 text-center md:!py-20"
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="text-4xl font-extrabold tracking-tight text-ywl-black md:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base text-ywl-black/70 md:text-lg">{subtitle}</p>}
      </motion.div>
    </div>
  );
}
