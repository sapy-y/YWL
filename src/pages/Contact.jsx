import { useState } from "react";
import PageHero from "../components/PageHero";
import { sendForm, FormNotActivatedError, FORMS_ENABLED } from "../lib/formsubmit";
import { InstagramIcon, TikTokIcon, MailIcon, WhatsAppIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

const initialForm = { nom: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!FORMS_ENABLED) return;
    setStatus("sending");
    try {
      await sendForm(
        { Nom: form.nom, "E-mail": form.email, Message: form.message },
        { subject: `Nouveau message de ${form.nom} (site YWL)`, replyTo: form.email }
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus(err instanceof FormNotActivatedError ? "activation" : "error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contacte l'équipe YWL"
        subtitle="Une question, une proposition de partenariat ou une envie d'intervenir lors d'une rencontre ? Écris-nous !"
      />

      <section className="section grid gap-10 md:grid-cols-2">
        <Reveal className="rounded-none border border-ywl-pink/15 bg-white p-8 shadow-sm">
          {!FORMS_ENABLED && (
            <p className="mb-6 rounded-none bg-ywl-purple-light/50 p-4 text-sm text-ywl-purple">
              Le formulaire de contact sera bientôt disponible. En attendant, écris-nous par e-mail ou sur nos réseaux.
            </p>
          )}
          <form onSubmit={handleSubmit} className="grid gap-5">
            <fieldset disabled={!FORMS_ENABLED} className="contents">
            <label>
              <span className="mb-1.5 block text-sm font-semibold text-ywl-black">Nom</span>
              <input
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full rounded-none border border-ywl-pink/25 px-4 py-3 text-sm outline-none focus:border-ywl-pink"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold text-ywl-black">Adresse e-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-none border border-ywl-pink/25 px-4 py-3 text-sm outline-none focus:border-ywl-pink"
              />
            </label>
            <label>
              <span className="mb-1.5 block text-sm font-semibold text-ywl-black">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full rounded-none border border-ywl-pink/25 px-4 py-3 text-sm outline-none focus:border-ywl-pink"
              />
            </label>
            <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>
            </fieldset>
            {status === "success" && (
              <p className="text-sm font-semibold text-green-600">Merci, ton message a bien été envoyé !</p>
            )}
            {status === "activation" && (
              <p className="text-sm font-semibold text-ywl-purple">
                Le formulaire doit d'abord être activé : un e-mail « Activate Form » vient d'être envoyé à
                l'équipe YWL. Réessaie un peu plus tard ou contacte-nous sur nos réseaux.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-semibold text-red-500">
                Une erreur est survenue. Réessaie ou contacte-nous sur nos réseaux.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1} className="rounded-none bg-gradient-to-br from-ywl-pink to-ywl-purple p-8 text-white shadow-sm">
          <h3 className="font-heading text-xl font-bold">Retrouve-nous aussi ici</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <InstagramIcon className="h-5 w-5 shrink-0" />
              <a
                href="https://www.instagram.com/young_womenleaders"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram — @young_womenleaders
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <TikTokIcon className="h-5 w-5 shrink-0" />
              <a
                href="https://www.tiktok.com/@youngwomenleaders225"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                TikTok — @youngwomenleaders225
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-5 w-5 shrink-0" />
              <a href="mailto:youngwomenleaders225@gmail.com" className="hover:underline">
                youngwomenleaders225@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Groupe WhatsApp de la communauté
            </li>
          </ul>
        </Reveal>
      </section>
    </>
  );
}
