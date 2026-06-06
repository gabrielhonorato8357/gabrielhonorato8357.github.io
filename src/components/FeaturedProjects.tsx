"use client";

import { motion } from "framer-motion";
import { projects, liveSites, featuredRepos, socialLinks } from "@/lib/data";
import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

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
            Featured Projects I've Built
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Products I've Built
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            End-to-end platform engineering — from architecture and infrastructure to UI and deployment.
          </p>
        </motion.div>

        {/* Live Sites - top row with screenshots */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate-500 font-medium tracking-wider uppercase mb-6 text-center"
          >
            Live Sites
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveSites.map((site, index) => (
              <motion.a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group block"
              >
                <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
                  {/* Screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${site.gradient} opacity-20`} />
                    <div className="absolute inset-0" style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                        {index === 0 ? "⚡" : index === 1 ? "🔔" : "💰"}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex flex-wrap gap-1.5">
                        {site.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-black/60 text-slate-300 border border-white/10 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {site.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {site.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                      Visit site
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Top Repos */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate-500 font-medium tracking-wider uppercase mb-6 text-center"
          >
            Top Repositories
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRepos.map((repo, index) => {
              const project = featuredProjects[index];
              return (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={project ? `/projects/${project.slug}` : repo.url} className="block h-full">
                    <div className="h-full p-5 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${repo.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                          {repo.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                            {repo.name}
                          </h4>
                          <span className="text-[10px] text-slate-600 font-mono">
                            {project?.category || "Repository"}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                        {repo.description}
                      </p>
                      <div className="mt-3 pt-3 border-t border-slate-800/50 flex items-center justify-between">
                        <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                          {project ? "Case study →" : "View repo →"}
                        </span>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-slate-600 hover:text-white transition-colors"
                        >
                          GitHub ↗
                        </a>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View More button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700/50 bg-slate-800/30 text-sm text-slate-300 font-medium hover:bg-slate-800/50 hover:text-white hover:border-slate-600/50 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all repositories on GitHub
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}