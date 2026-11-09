import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import outreachGroupe from "../assets/gallery/outreach-groupe.jpg";

const values = [
  { title: "Confiance en soi", text: "Aider chaque jeune femme à croire en ses capacités." },
  { title: "Leadership", text: "Développer l'esprit d'initiative et la prise de décision." },
  { title: "Communauté", text: "Créer un espace bienveillant pour échanger et apprendre ensemble." },
  { title: "Impact", text: "Agir concrètement à travers des actions solidaires." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Qui sommes-nous ?"
        subtitle="Young Women Leaders est un espace dédié à aider les jeunes femmes à développer leur confiance en elles, leur leadership et leurs ambitions professionnelles."
      />

      <section className="section">
        <Reveal className="overflow-hidden rounded-none">
          <img
            src={outreachGroupe}
            alt="L'équipe Young Women Leaders réunie"
            className="h-64 w-full object-cover transition duration-500 hover:scale-105 md:h-96"
          />
        </Reveal>
      </section>

      <section className="section !pt-0">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold text-ywl-black">Notre mission</h2>
            <p className="mt-4 text-ywl-black/70">
              Aujourd'hui, de nombreuses jeunes femmes ont des ambitions et des idées, mais elles manquent parfois
              d'espaces pour échanger, apprendre et développer leur confiance en elles. Young Women Leaders
              souhaite créer un environnement où les jeunes femmes peuvent développer leur confiance en elles,
              apprendre sur le business, l'entrepreneuriat et d'autres domaines, rencontrer d'autres jeunes femmes
              ambitieuses, et partager leurs expériences et leurs idées.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold text-ywl-black">Notre vision</h2>
            <p className="mt-4 text-ywl-black/70">
              Notre objectif est de créer une communauté où les jeunes femmes peuvent échanger des idées, apprendre
              les unes des autres et s'inspirer mutuellement. Ce projet vise à encourager les jeunes femmes à
              croire en leurs capacités et à construire leur avenir.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="text-3xl font-bold text-ywl-black">Ce qui nous guide</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="rounded-none border border-ywl-pink/15 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-bold text-ywl-pink">{v.title}</h3>
                <p className="mt-2 text-sm text-ywl-black/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="div" className="section text-center">
        <h2 className="text-2xl font-bold text-ywl-black">Envie de nous rejoindre ?</h2>
        <Link to="/rejoindre" className="btn-primary mt-5 inline-block">Rejoindre YWL</Link>
      </Reveal>
    </>
  );
}
