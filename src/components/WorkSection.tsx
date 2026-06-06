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
            End-to-end platform engineering — from architecture and infrastructure to UI and deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <div className="h-full p-5 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col">
                  {/* Screenshot placeholder */}
                  <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-slate-800 aspect-[16/10] mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`} />
                    <div className="absolute inset-0" style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }} />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-1.5 py-0.5 text-[9px] font-medium rounded-full bg-white/5 text-slate-400 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50">
                      {project.category.split(" ")[0]}
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2 flex-grow">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800/50 mt-auto">
                    <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                      Case study
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-slate-600 hover:text-white transition-colors ml-auto"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}