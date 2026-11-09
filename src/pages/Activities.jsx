import PageHero from "../components/PageHero";
import { activities } from "../data/activities";
import Reveal from "../components/Reveal";
import {
  CalendarIcon,
  LightbulbIcon,
  TrendingUpIcon,
  SparklesIcon,
  BuildingIcon,
  GamepadIcon,
  HandshakeIcon,
  ChatIcon,
} from "../components/Icons";

const iconMap = {
  calendar: CalendarIcon,
  lightbulb: LightbulbIcon,
  trendingUp: TrendingUpIcon,
  sparkles: SparklesIcon,
  building: BuildingIcon,
  gamepad: GamepadIcon,
  handshake: HandshakeIcon,
  chat: ChatIcon,
};

export default function Activities() {
  return (
    <>
      <PageHero
        eyebrow="Nos activités"
        title="Apprendre, échanger, développer nos idées"
        subtitle="Young Women Leaders propose différentes activités pour nous permettre d'apprendre, d'échanger et de développer nos idées."
      />

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <Reveal
                key={a.title}
                delay={(i % 3) * 0.08}
                className="rounded-none border border-ywl-pink/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-ywl-pink/10 text-ywl-pink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-ywl-black">{a.title}</h3>
                <p className="mt-2 text-sm text-ywl-black/70">{a.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
