import { useState } from "react";
import PageHero from "../components/PageHero";
import { sendForm, FormNotActivatedError, FORMS_ENABLED } from "../lib/formsubmit";
import { CheckCircleIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

const initialForm = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  ville: "",
  domaine: "",
  motivation: "",
};

export default function Join() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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
        {
          Prénom: form.prenom,
          Nom: form.nom,
          "E-mail": form.email,
          Téléphone: form.telephone,
          "Ville / pays": form.ville,
          Domaine: form.domaine,
          Motivation: form.motivation,
        },
        {
          subject: `Nouvelle candidature YWL : ${form.prenom} ${form.nom}`,
          replyTo: form.email,
        }
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
        eyebrow="Rejoindre YWL"
        title="Deviens membre de la communauté"
        subtitle="Remplis le formulaire ci-dessous pour rejoindre Young Women Leaders. On a hâte de te compter parmi nous !"
      />

      <section className="section">
        <Reveal className="mx-auto max-w-2xl rounded-none border border-ywl-pink/15 bg-white p-8 shadow-sm md:p-10">
          {!FORMS_ENABLED && (
            <p className="mb-6 rounded-none bg-ywl-purple-light/50 p-4 text-sm text-ywl-purple">
              Les inscriptions en ligne seront bientôt ouvertes. En attendant, contacte-nous sur nos réseaux pour rejoindre YWL.
            </p>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <fieldset disabled={!FORMS_ENABLED} className="contents">
            <Field label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} required />
            <Field label="Nom" name="nom" value={form.nom} onChange={handleChange} required />
            <Field label="Adresse e-mail" name="email" type="email" value={form.email} onChange={handleChange} required className="sm:col-span-2" />
            <Field label="Numéro de téléphone" name="telephone" type="tel" value={form.telephone} onChange={handleChange} />
            <Field label="Ville / pays" name="ville" value={form.ville} onChange={handleChange} />
            <Field label="Domaine d'études ou d'activité" name="domaine" value={form.domaine} onChange={handleChange} className="sm:col-span-2" />

            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-ywl-black">Pourquoi veux-tu rejoindre YWL ?</span>
              <textarea
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                rows={4}
                required
                className="w-full rounded-none border border-ywl-pink/25 px-4 py-3 text-sm outline-none focus:border-ywl-pink"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary sm:col-span-2 disabled:opacity-60"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer ma candidature"}
            </button>
            </fieldset>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-semibold text-green-600 sm:col-span-2">
                <CheckCircleIcon className="h-5 w-5 shrink-0" />
                Merci ! Ta demande a bien été envoyée, on te recontacte très vite.
              </p>
            )}
            {status === "activation" && (
              <p className="text-sm font-semibold text-ywl-purple sm:col-span-2">
                Le formulaire doit d'abord être activé : un e-mail « Activate Form » vient d'être envoyé à
                l'équipe YWL. Réessaie un peu plus tard ou écris-nous sur nos réseaux.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-semibold text-red-500 sm:col-span-2">
                Une erreur est survenue lors de l'envoi. Réessaie ou écris-nous directement.
              </p>
            )}
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <label className={className}>
      <span className="mb-1.5 block text-sm font-semibold text-ywl-black">{label}</span>
      <input
        {...props}
        className="w-full rounded-none border border-ywl-pink/25 px-4 py-3 text-sm outline-none focus:border-ywl-pink"
      />
    </label>
  );
}
