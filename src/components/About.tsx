import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Building scalable systems that drive business impact"
        />

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-300 leading-relaxed text-center">
            With over 8 years of experience building scalable web applications,
            backend systems, AI integrations, and data-heavy platforms, I
            specialize in transforming complex technical challenges into
            polished, performant solutions. My expertise spans the full stack
            — from React and Next.js on the frontend to Python, FastAPI,
            Django, and Node.js on the backend, with PostgreSQL, AWS, and
            Docker powering the infrastructure.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Years Experience", value: "8+" },
              { label: "Projects Delivered", value: "30+" },
              { label: "Technologies", value: "20+" },
              { label: "GitHub Repos", value: "15+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700/50"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}