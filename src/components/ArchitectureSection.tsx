"use client";

import { motion } from "framer-motion";

const focuses = [
  {
    title: "Systems Architecture",
    description: "Designing distributed systems that scale from prototype to production. I focus on clear separation of concerns, event-driven patterns, and building for observability from day one.",
    highlights: ["Event-driven microservices", "CQRS & event sourcing", "Multi-tenant isolation", "API-first design"],
    icon: "🏗️",
  },
  {
    title: "Product Engineering",
    description: "Bridging the gap between technical execution and product outcomes. I work closely with product teams to translate business requirements into well-architected systems.",
    highlights: ["Technical strategy & planning", "System design reviews", "Performance optimization", "Developer experience"],
    icon: "🎯",
  },
  {
    title: "AI & Data Infrastructure",
    description: "Building the data pipelines, AI serving layers, and analytics infrastructure that power intelligent products at scale — from real-time streaming to batch processing.",
    highlights: ["Real-time data pipelines", "RAG & LLM serving", "Analytics engineering", "ML infrastructure"],
    icon: "🧠",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Engineering Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How I Build
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Architecture-first engineering with a product mindset — delivering systems that are scalable, maintainable, and impactful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focuses.map((focus, index) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-slate-800/50 bg-slate-900/40 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="text-3xl mb-4">{focus.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {focus.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {focus.description}
              </p>
              <div className="space-y-2">
                {focus.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}