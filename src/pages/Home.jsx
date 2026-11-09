import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import { activities } from "../data/activities";
import { events } from "../data/events";
import { galleryItems } from "../data/gallery";
import Reveal from "../components/Reveal";
import {
  CalendarIcon,
  LightbulbIcon,
  TrendingUpIcon,
  SparklesIcon,
  BuildingIcon,
  GamepadIcon,
  HandshakeIcon,
  ChatIcon,
} from "../components/Icons";

const iconMap = {
  calendar: CalendarIcon,
  lightbulb: LightbulbIcon,
  trendingUp: TrendingUpIcon,
  sparkles: SparklesIcon,
  building: BuildingIcon,
  gamepad: GamepadIcon,
  handshake: HandshakeIcon,
  chat: ChatIcon,
};

export default function Home() {
  const nextEvent = events.find((e) => e.status === "upcoming") || events[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ywl-purple-light/50 via-white to-ywl-pink/10">
        <div className="blob -left-24 -top-32 h-96 w-96 bg-ywl-pink/30" />
        <div className="blob -right-24 top-0 h-80 w-80 bg-ywl-purple/25" style={{ animationDelay: "-5s" }} />
        <div className="blob bottom-0 left-1/3 h-72 w-72 bg-ywl-magenta/15" style={{ animationDelay: "-10s" }} />

        <div className="section relative grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <span className="eyebrow">Ambition • Leadership • Impact</span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ywl-black md:text-5xl">
              Bienvenue chez <span className="text-gradient">Young Women Leaders</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ywl-black/70 md:mx-0">
              Un espace dédié à aider les jeunes femmes à développer leur confiance en elles, leur leadership et
              leurs ambitions professionnelles.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link to="/rejoindre" className="btn-primary">Rejoindre YWL</Link>
              <Link to="/a-propos" className="btn-outline">En savoir plus</Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <motion.img
              src={logo}
              alt="Young Women Leaders"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 rounded-full shadow-xl ring-4 ring-white md:w-80"
            />
          </motion.div>
        </div>
      </section>

      {/* À propos preview */}
      <Reveal as="div" className="section text-center">
        <span className="eyebrow">À propos de YWL</span>
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-ywl-black md:text-4xl">
          Créer une communauté où les jeunes femmes s'inspirent mutuellement
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-ywl-black/70">
          À travers différentes activités, rencontres et discussions, nous encourageons les jeunes femmes à
          prendre des initiatives, partager leurs expériences et développer leur potentiel.
        </p>
        <Link to="/a-propos" className="mt-6 inline-block font-semibold text-ywl-pink hover:underline">
          Découvrir notre mission →
        </Link>
      </Reveal>

      {/* Activités preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <span className="eyebrow">Nos activités</span>
            <h2 className="text-3xl font-bold text-ywl-black md:text-4xl">Ce que nous proposons</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.slice(0, 4).map((a, i) => {
              const Icon = iconMap[a.icon];
              return (
                <Reveal
                  key={a.title}
                  delay={i * 0.08}
                  className="rounded-none border border-ywl-pink/15 bg-ywl-cream p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-none bg-ywl-pink/10 text-ywl-pink">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-bold text-ywl-black">{a.title}</h3>
                  <p className="mt-2 text-sm text-ywl-black/70">{a.description}</p>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/activites" className="btn-outline">Voir toutes les activités</Link>
          </div>
        </div>
      </section>

      {/* Prochain événement */}
      {nextEvent && (
        <Reveal as="div" className="section">
          <div className="grid items-center gap-10 rounded-none bg-gradient-to-br from-ywl-pink to-ywl-purple p-10 text-white shadow-xl md:grid-cols-2 md:p-14">
            <div>
              <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-white/80">
                {nextEvent.status === "upcoming" ? "Prochain événement" : "Notre dernière rencontre"}
              </span>
              <h2 className="text-3xl font-bold">{nextEvent.title}</h2>
              <p className="mt-3 text-white/90">{nextEvent.description}</p>
              <Link
                to="/evenements"
                className="mt-6 inline-block rounded-none bg-white px-7 py-3 font-semibold text-ywl-pink shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-ywl-cream hover:shadow-lg active:scale-95"
              >
                Voir tous les événements
              </Link>
            </div>
            <div className="rounded-none bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">Sujet du jour</p>
              <p className="mt-2 text-xl font-semibold">{nextEvent.topic}</p>
              <p className="mt-4 text-sm text-white/80">{nextEvent.dateLabel}</p>
            </div>
          </div>
        </Reveal>
      )}

      {/* Aperçu galerie */}
      {galleryItems.length > 0 && (
        <section className="section">
          <Reveal className="text-center">
            <span className="eyebrow">En images</span>
            <h2 className="text-3xl font-bold text-ywl-black md:text-4xl">Nos rencontres et actions</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.slice(0, 4).map((item, i) => (
              <Reveal key={i} delay={i * 0.08} className="overflow-hidden rounded-none shadow-sm">
                <img
                  src={item.src}
                  alt={item.caption || ""}
                  className="h-48 w-full object-cover transition duration-300 hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/galerie" className="btn-outline">Voir toute la galerie</Link>
          </div>
        </section>
      )}

      {/* CTA final */}
      <Reveal as="div" className="section text-center">
        <h2 className="text-3xl font-bold text-ywl-black md:text-4xl">Prête à rejoindre la communauté ?</h2>
        <p className="mx-auto mt-4 max-w-xl text-ywl-black/70">
          Développe ta confiance, ton leadership et rencontre d'autres jeunes femmes ambitieuses.
        </p>
        <Link to="/rejoindre" className="btn-primary mt-6 inline-block">Rejoindre YWL</Link>
      </Reveal>
    </>
  );
}
