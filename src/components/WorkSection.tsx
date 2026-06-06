"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function WorkSection() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Products I've Built
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            End-to-end platform engineering — from architecture and infrastructure to UI and deployment. Each project solves real product challenges at scale.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Screenshot placeholder */}
                <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[16/10] transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/5">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                      <div className="absolute inset-0" style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }} />
                      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/5 text-slate-400 border border-white/10">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/5 text-slate-500 border border-white/10">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1">{project.subtitle}</p>
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-20">
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-t-transparent border-r-white/5" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {project.category}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.summary}
                    </p>

                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-500">
                          <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.architecture.slice(0, 4).map((comp) => (
                        <span key={comp.name} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg bg-slate-800/40 text-slate-400 border border-slate-700/50">
                          {comp.icon} {comp.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View case study
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}