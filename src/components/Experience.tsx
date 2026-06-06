import { experienceCards } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience Focus"
          subtitle="Deep expertise across key engineering domains"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}