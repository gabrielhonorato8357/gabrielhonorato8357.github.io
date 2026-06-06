import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Gabriel Honorato`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Gabriel Honorato`,
      description: project.summary,
      images: project.screenshot
        ? [
            {
              url: project.screenshot,
              width: 1600,
              height: 1000,
              alt: `${project.title} dashboard screenshot`,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Back nav */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/50 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </div>

      {/* Hero section */}
      <section className="relative pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400">
              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
              {project.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-400">
              {project.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product screenshot */}
      <section className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[16/10] shadow-2xl shadow-black/40">
            {project.screenshot ? (
              <>
                <Image
                  src={project.screenshot}
                  alt={`${project.title} dashboard screenshot`}
                  width={1600}
                  height={1000}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </>
            ) : (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`} />
                <div className="absolute inset-0" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs sm:text-sm text-slate-600">Product screenshot placeholder</p>
                </div>
              </>
            )}
              </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram Placeholder */}
      <section className="py-16 sm:py-20 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            System Architecture
          </h2>

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[16/7] mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5" />
            <div className="absolute inset-0" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4 opacity-30">🏗️</div>
                <p className="text-xs sm:text-sm text-slate-600">Architecture diagram placeholder</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.architecture.map((comp) => (
              <div key={comp.name} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <div className="text-xl mb-2">{comp.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{comp.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Key Technical Decisions
          </h2>
          <div className="space-y-6">
            {project.technicalDecisions.map((decision) => (
              <div
                key={decision.title}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {decision.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">{decision.description}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {decision.outcome}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Outcomes */}
      <section className="py-16 sm:py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-amber-400">⚡</span>
                Engineering Challenges
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-amber-400/70 mt-0.5 shrink-0">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-emerald-400">📈</span>
                Business Outcomes
              </h3>
              <ul className="space-y-3">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-emerald-400/70 mt-0.5 shrink-0">•</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-12 border-t border-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Projects
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </section>
    </div>
  );
}
