import PageHero from "../components/PageHero";
import { guests } from "../data/guests";
import Reveal from "../components/Reveal";

export default function Guests() {
  return (
    <>
      <PageHero
        eyebrow="Nos Guest"
        title="Femmes inspirantes"
        subtitle="Découvre les femmes qui viennent partager leur parcours et leur expérience lors de nos rencontres."
      />

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guests.map((g, i) => (
            <Reveal
              key={g.name}
              delay={(i % 3) * 0.08}
              className="rounded-none border border-ywl-pink/15 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-none bg-ywl-purple-light text-3xl font-bold text-ywl-purple">
                {g.photo ? (
                  <img src={g.photo} alt={g.name} className="h-24 w-24 rounded-none object-cover" />
                ) : (
                  g.name.charAt(0)
                )}
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-ywl-black">{g.name}</h3>
              <p className="text-sm font-semibold text-ywl-pink">{g.role}</p>
              <p className="mt-2 text-sm text-ywl-black/70">{g.bio}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ywl-black/50">
          Cette section sera mise à jour au fil des rencontres avec de nouvelles invitées.
        </p>
      </section>
    </>
  );
}
