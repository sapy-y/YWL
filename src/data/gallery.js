// Ajoute les photos/vidéos des rencontres ici au fur et à mesure.
// Place les fichiers dans src/assets/gallery/ et importe-les, ou utilise une URL externe.

import outreachVan from "../assets/gallery/outreach-van.jpg";
import outreachGroupe from "../assets/gallery/outreach-groupe.jpg";
import outreachInterieur from "../assets/gallery/outreach-interieur.jpg";
import outreachEnfants from "../assets/gallery/outreach-enfants.jpg";
import outreachBench from "../assets/gallery/outreach-bench.jpg";

export const galleryItems = [
  { type: "image", src: outreachVan, caption: "Départ pour une action de terrain avec l'équipe YWL" },
  { type: "image", src: outreachGroupe, caption: "L'équipe Young Women Leaders réunie" },
  { type: "image", src: outreachInterieur, caption: "Rencontre avec la communauté lors d'une action solidaire" },
  { type: "image", src: outreachEnfants, caption: "Les enfants de la communauté, heureux de nous accueillir" },
  { type: "image", src: outreachBench, caption: "Un moment de complicité entre membres de YWL" },
];
