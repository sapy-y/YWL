import PageHero from "../components/PageHero";
import { impactActions } from "../data/impact";
import { Link } from "react-router-dom";
import { CheckIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Nos actions"
        title="YWL Impact"
        subtitle="Chez Young Women Leaders, nous croyons que la solidarité est l'une des plus belles façons d'avoir un impact."
      />

      <section className="section space-y-10">
        {impactActions.map((action) => (
          <Reveal
            key={action.title}
            className="grid gap-8 rounded-none border border-ywl-pink/15 bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg md:grid-cols-2 md:p-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-ywl-black">{action.title}</h2>
              <p className="mt-4 text-ywl-black/70">{action.description}</p>
              <p className="mt-4 text-sm font-semibold text-ywl-pink">{action.cta}</p>
              <Link to="/contact" className="btn-primary mt-6 inline-block">Participer / en savoir plus</Link>
            </div>
            <div className="rounded-none bg-ywl-cream p-6">
              <h3 className="font-heading text-lg font-bold text-ywl-black">Contenu du kit</h3>
              <ul className="mt-4 space-y-2 text-sm text-ywl-black/70">
                {action.kitContents.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon className="h-5 w-5 shrink-0 text-ywl-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
