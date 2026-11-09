// Envoi des formulaires par e-mail via FormSubmit (https://formsubmit.co) :
// pas de compte, pas de clé, pas de base de données.
// Au tout premier envoi, FormSubmit envoie un e-mail « Activate Form » à cette adresse :
// il suffit de cliquer sur le lien une fois pour activer le formulaire.
// Astuce : après activation, FormSubmit fournit un alias (chaîne aléatoire) que tu peux
// mettre ici à la place de l'adresse, pour ne plus l'afficher dans le code du site.
export const FORM_RECIPIENT = "youngwomenleaders225@gmail.com";

// Interrupteur : false = formulaires visibles mais désactivés (« bientôt disponible »).
// Passe à true pour réactiver l'envoi.
export const FORMS_ENABLED = false;

export class FormNotActivatedError extends Error {}

/**
 * Envoie les champs du formulaire par e-mail.
 * @param {object} fields  champs à transmettre (ils apparaissent dans l'e-mail)
 * @param {object} options { subject, replyTo } — replyTo = e-mail du visiteur
 */
export async function sendForm(fields, { subject, replyTo } = {}) {
  const res = await fetch(`https://formsubmit.co/ajax/${FORM_RECIPIENT}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _replyto: replyTo, // « Répondre » dans Gmail écrit directement au visiteur
      _template: "table",
      _captcha: "false",
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (res.ok && String(data.success) === "true") return data;

  if (/activat/i.test(data.message || "")) {
    throw new FormNotActivatedError(data.message);
  }
  throw new Error(data.message || `Erreur d'envoi (${res.status})`);
}
