"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const roles = [
  "AI SaaS Platforms",
  "Analytics Infrastructure",
  "Fintech Dashboards",
  "SaaS Systems",
  "Automation Engines",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/40 text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for projects & consulting
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Gabriel Honorato
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-3 text-lg sm:text-xl text-slate-400 font-medium"
        >
          Senior Full-Stack Engineer
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-4 h-8 sm:h-10 flex items-center justify-center"
        >
          <span className="text-sm sm:text-base text-slate-500">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
              {roles[roleIndex]}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed"
        >
          AI SaaS &middot; Analytics Platforms &middot; Fintech Dashboards &middot; SaaS Infrastructure &middot; Automation Systems
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-sm hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-700/50 bg-slate-800/30 text-slate-300 font-medium text-sm hover:bg-slate-800/50 hover:text-white hover:border-slate-600/50 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "30+", label: "Projects Shipped" },
            { value: "15+", label: "SaaS Platforms" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}