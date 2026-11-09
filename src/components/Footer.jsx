import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { InstagramIcon, TikTokIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ywl-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <img src={logo} alt="Young Women Leaders" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-heading text-lg font-bold">Young Women Leaders</span>
          </div>
          <p className="text-sm text-white/70">Ambition • Leadership • Impact</p>
          <p className="mt-3 text-sm text-white/60">
            Un espace dédié à aider les jeunes femmes à développer leur confiance en elles, leur leadership et
            leurs ambitions professionnelles.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-ywl-pink">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link className="hover:text-white" to="/a-propos">À propos</Link></li>
            <li><Link className="hover:text-white" to="/activites">Nos activités</Link></li>
            <li><Link className="hover:text-white" to="/evenements">Événements</Link></li>
            <li><Link className="hover:text-white" to="/agenda">Agenda</Link></li>
            <li><Link className="hover:text-white" to="/impact">YWL Impact</Link></li>
            <li><Link className="hover:text-white" to="/rejoindre">Rejoindre YWL</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-ywl-pink">
            Suivez-nous
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="https://www.instagram.com/young_womenleaders"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="https://www.tiktok.com/@youngwomenleaders225"
                target="_blank"
                rel="noreferrer"
              >
                <TikTokIcon className="h-4 w-4" /> TikTok
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-white" href="mailto:youngwomenleaders225@gmail.com">
                <MailIcon className="h-4 w-4" /> Email
              </a>
            </li>
            <li><Link className="hover:text-white" to="/contact">Nous contacter</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Young Women Leaders. Tous droits réservés.
      </div>
    </footer>
  );
}
