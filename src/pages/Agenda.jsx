import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import { agenda, agendaMonth, agendaNext } from "../data/agenda";

const CITIES = ["Toutes", "Paris", "Lyon", "Nantes", "Abidjan", "Maryland", "En ligne"];

export default function Agenda() {
  const [city, setCity] = useState("Toutes");
  const [starOnly, setStarOnly] = useState(false);
  const [freeOnly, setFreeOnly] = useState(false);

  const events = useMemo(
    () =>
      agenda.filter(
        (e) =>
          (city === "Toutes" || e.city === city) && (!starOnly || e.star) && (!freeOnly || e.free)
      ),
    [city, starOnly, freeOnly]
  );

  const countFor = (c) => (c === "Toutes" ? agenda.length : agenda.filter((e) => e.city === c).length);

  return (
    <>
      <PageHero
        eyebrow="Agenda de la team"
        title={agendaMonth.title}
        subtitle="Salons d'orientation, conférences, ateliers sur le leadership et l'entrepreneuriat : tout ce qui se passe à Paris, Lyon, Nantes, Abidjan et dans le Maryland, expliqué simplement."
      />

      <section className="section !pt-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {/* Légende */}
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="flex items-center gap-2 border border-ywl-pink/20 bg-white px-3 py-2">
              <span className="bg-ywl-pink-dark px-2 py-0.5 text-xs font-bold tracking-wide text-white">
                COUP DE CŒUR YWL
              </span>
              le plus adapté aux filles de la team
            </span>
            <span className="flex items-center gap-2 border border-ywl-pink/20 bg-white px-3 py-2">
              <span className="bg-amber-200 px-2 py-0.5 text-xs font-bold tracking-wide text-amber-900">
                À VÉRIFIER
              </span>
              info à confirmer avant d'y aller
            </span>
          </div>

          {/* Filtres */}
          <div className="flex flex-col gap-3" aria-label="Filtres">
            <p className="text-sm font-bold text-ywl-black">Choisis ta ville :</p>
            <div className="flex flex-wrap gap-2.5">
              {CITIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={city === c}
                  onClick={() => setCity(c)}
                  className={`min-h-11 border-2 border-ywl-purple px-4 py-2 text-sm font-bold transition ${
                    city === c ? "bg-ywl-purple text-white" : "bg-white text-ywl-purple hover:bg-ywl-purple-light/50"
                  }`}
                >
                  {c} ({countFor(c)})
                </button>
              ))}
            </div>

            <p className="mt-2 text-sm font-bold text-ywl-black">Affiner :</p>
            <div className="flex flex-wrap gap-2.5">
              <Toggle pressed={starOnly} onClick={() => setStarOnly((v) => !v)}>
                Coups de cœur YWL seulement
              </Toggle>
              <Toggle pressed={freeOnly} onClick={() => setFreeOnly((v) => !v)}>
                Gratuit seulement
              </Toggle>
            </div>

            <p className="text-sm text-ywl-black/70" aria-live="polite">
              {events.length} {events.length > 1 ? "activités" : "activité"}
              {city === "Toutes" ? " au total" : ` · ${city}`}, classées par date.
            </p>
          </div>

          {/* Liste */}
          <div className="flex flex-col gap-4">
            {events.length === 0 && (
              <p className="border border-ywl-pink/20 bg-white p-4 text-sm">
                Aucune activité ne correspond à ces filtres. Essaie une autre ville ou retire un filtre.
              </p>
            )}
            {events.map((e) => (
              <AgendaCard key={e.id} event={e} />
            ))}
          </div>

          {/* Mois suivant */}
          <div className="flex flex-col gap-4 bg-ywl-purple p-6 text-white md:p-8">
            <h2 className="font-heading text-2xl font-bold">{agendaNext.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {agendaNext.items.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 bg-white p-5 text-ywl-black">
                  <span className="text-xs font-bold uppercase tracking-wide text-ywl-pink-dark">{item.date}</span>
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-ywl-black/80">{item.what}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start py-1 text-sm font-bold text-ywl-purple hover:text-ywl-pink-dark"
                  >
                    En savoir plus →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Conseils */}
          <div className="flex flex-col gap-3 border border-ywl-pink/20 bg-white p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-ywl-black">Avant d'y aller</h2>
            <ul className="list-disc space-y-2 pl-5 text-ywl-black/80">
              <li>
                Vérifie la date, l'heure et le lieu sur le site de l'organisateur : ces infos ont été trouvées en
                ligne et peuvent changer.
              </li>
              <li>
                Beaucoup de salons sont gratuits mais demandent une inscription : télécharge ton invitation (souvent un
                QR code) à l'avance.
              </li>
              <li>
                Pour le Maryland, les horaires sont en heure locale (6 h de moins qu'à Abidjan, 7 h de moins qu'en
                France).
              </li>
              <li>Tu y vas ? Préviens la team sur le groupe WhatsApp pour qu'on s'y retrouve à plusieurs.</li>
            </ul>
          </div>

          <p className="text-xs text-ywl-black/60">
            Agenda mis à jour le {agendaMonth.updated} par Young Women Leaders.
          </p>
        </div>
      </section>
    </>
  );
}

function Toggle({ pressed, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 border-2 border-ywl-pink-dark px-4 py-2 text-sm font-bold transition ${
        pressed ? "bg-ywl-pink-dark text-white" : "bg-white text-ywl-pink-dark hover:bg-ywl-pink/10"
      }`}
    >
      {children}
    </button>
  );
}

function AgendaCard({ event: e }) {
  return (
    <article className="flex flex-col border border-ywl-pink/20 bg-white sm:flex-row">
      <div className="flex shrink-0 items-center justify-center gap-3 border-b border-ywl-pink/20 bg-ywl-cream px-4 py-3 sm:w-32 sm:flex-col sm:gap-0.5 sm:border-b-0 sm:border-r sm:py-5">
        <span className="text-xs font-bold uppercase tracking-wider text-ywl-pink-dark">{e.weekday}</span>
        <span className="font-heading text-4xl font-extrabold leading-none text-ywl-purple">{e.day}</span>
        <span className="text-xs font-bold uppercase tracking-wider text-ywl-purple">{e.month}</span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-ywl-black px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
            {e.city}
          </span>
          {e.star && (
            <span className="bg-ywl-pink-dark px-2.5 py-0.5 text-xs font-bold tracking-wide text-white">
              COUP DE CŒUR YWL
            </span>
          )}
          {e.free && (
            <span className="bg-green-100 px-2.5 py-0.5 text-xs font-bold tracking-wide text-green-900">GRATUIT</span>
          )}
          <span className="text-sm font-semibold text-ywl-black/70">{e.when}</span>
        </div>

        <h2 className="font-heading text-xl font-bold leading-snug text-ywl-black">{e.title}</h2>
        <p className="text-ywl-black/80">{e.what}</p>

        <dl className="mt-1 grid gap-3 sm:grid-cols-3">
          <Info label="Où" value={e.where} />
          <Info label="Pour qui" value={e.who} />
          <Info label="Prix" value={e.price} />
        </dl>

        {e.warn && (
          <p className="bg-amber-100 px-3 py-2 text-sm text-amber-900">
            <strong>À vérifier :</strong> {e.warn}
          </p>
        )}

        <a
          href={e.url}
          target="_blank"
          rel="noreferrer"
          className="self-start py-1 text-sm font-bold text-ywl-purple hover:text-ywl-pink-dark"
        >
          Voir le site de l'organisateur →
        </a>
      </div>
    </article>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs font-bold uppercase tracking-wide text-ywl-black/60">{label}</dt>
      <dd className="text-sm font-semibold">{value}</dd>
    </div>
  );
}
