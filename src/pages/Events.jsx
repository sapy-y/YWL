import PageHero from "../components/PageHero";
import { events } from "../data/events";
import Reveal from "../components/Reveal";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Events() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Événements"
        title="Nos rencontres"
        subtitle="Retrouve les prochaines rencontres YWL ainsi que l'historique de nos événements passés."
      />

      <section className="section">
        <h2 className="text-2xl font-bold text-ywl-black">À venir</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {upcoming.length === 0 && (
            <p className="text-ywl-black/60">Aucun événement annoncé pour le moment — reste connectée !</p>
          )}
          {upcoming.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08} as="div">
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-ywl-black">Événements passés</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {past.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.08} as="div">
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EventCard({ event }) {
  return (
    <article className="h-full overflow-hidden rounded-none border border-ywl-pink/15 bg-ywl-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {event.photo && (
        <div className="overflow-hidden">
          <img
            src={event.photo}
            alt={event.title}
            className="h-48 w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-7">
        <span
          className={`inline-block rounded-none px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            event.status === "upcoming" ? "bg-ywl-pink/15 text-ywl-pink" : "bg-ywl-black/10 text-ywl-black/70"
          }`}
        >
          {event.status === "upcoming" ? "À venir" : "Passé"}
        </span>
        <h3 className="mt-3 font-heading text-xl font-bold text-ywl-black">{event.title}</h3>
        <p className="mt-1 text-sm text-ywl-black/60">
          {formatDate(event.date) || event.dateLabel} {event.location && `· ${event.location}`}
        </p>
        <p className="mt-3 text-sm font-semibold text-ywl-purple">{event.topic}</p>
        <p className="mt-2 text-sm text-ywl-black/70">{event.description}</p>
        {event.program?.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm text-ywl-black/70">
            {event.program.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="text-ywl-pink">•</span>
                {step}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
