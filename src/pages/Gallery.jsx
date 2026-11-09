import PageHero from "../components/PageHero";
import { galleryItems } from "../data/gallery";
import Reveal from "../components/Reveal";

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Photos & vidéos"
        subtitle="Les moments forts de nos rencontres et de nos événements."
      />

      <section className="section">
        {galleryItems.length === 0 ? (
          <div className="rounded-none border-2 border-dashed border-ywl-pink/30 bg-white p-16 text-center text-ywl-black/50">
            La galerie sera bientôt remplie de photos et vidéos de nos rencontres. Reviens vite !
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <Reveal
                key={i}
                as="figure"
                delay={(i % 3) * 0.08}
                className="overflow-hidden rounded-none border border-ywl-pink/15 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption || ""}
                    className="h-56 w-full object-cover transition duration-300 hover:scale-110"
                  />
                </div>
                {item.caption && (
                  <figcaption className="p-3 text-sm text-ywl-black/70">{item.caption}</figcaption>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
