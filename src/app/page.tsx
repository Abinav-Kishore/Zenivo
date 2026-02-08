"use client";

import { motion } from "framer-motion";
import { FlowSection } from "@/components/flow-section";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { SpotlightCard } from "@/components/spotlight-card";
import { SplineEmbed } from "@/components/spline-embed";

const splineScene = "https://prod.spline.design/bOW2v8OYWMfojjQy/scene.splinecode";
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <span className="text-2xl text-orange-400">/</span>
            <span className="uppercase"><a href="/">zenivo</a></span>
          </div>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-white/70 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#flow" className="hover:text-white">Flow</a>
            <a href="#requirements" className="hover:text-white">Requirements</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <HoverBorderGradient>
            <a href="#contact">Start a Project</a>
          </HoverBorderGradient>
        </div>
      </header>

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Bold digital craft for ambitious teams
            </p>
            <h1 className="text-4xl md:text-6xl">
              App, Web, and Landing Page builds that launch fast and look sharp.
            </h1>
            <p className="text-white/70">
              zenivo is a creative dev studio. You get a senior team, crisp
              execution, and a design-first system that keeps every release
              polished.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg">
                <a href="#contact">Get a Quote</a>
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80">
                <a href="#services" className="hover:text-white">View Services</a>
              </button>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Response
                </p>
                <p className="text-white">24–48 hrs</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Clients
                </p>
                <p className="text-white">Startups • Agencies • Founders</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Location
                </p>
                <p className="text-white">Remote • Worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-orange-500/40 blur-2xl" />
            <div className="absolute bottom-6 right-8 h-20 w-20 rounded-full bg-cyan-400/40 blur-2xl" />
            <div className="absolute bottom-6 right-8 h-20 w-20 rounded-full bg-cyan-400/40 blur-2xl" />
            <SplineEmbed scene={splineScene} />
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-4xl">Services built for momentum</h2>
            <p className="text-white/70">
              We cover strategy, design, and engineering so your launch feels
              cohesive and fast.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <SpotlightCard
              title="App Development"
              description="Native-like mobile apps, MVPs, and production-grade platforms with reliable delivery cycles."
            />
            <SpotlightCard
              title="Web Development"
              description="High-performance websites and web apps with a bold visual layer and scalable code."
            />
            <SpotlightCard
              title="Landing Pages"
              description="Conversion-focused launches with crisp messaging, rapid iteration, and analytics readiness."
            />
            <SpotlightCard
              title="Product Strategy"
              description="Scope clarity, roadmap alignment, and feature prioritization to reduce waste."
            />
          </div>
        </div>
      </section>

      <section id="flow" className="section-padding">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-4xl">Node-based onboarding flow</h2>
            <p className="text-white/70">
              We visualize the plan so every milestone is clear. Drag the nodes
              and explore the flow.
            </p>
          </div>
          <FlowSection />
        </div>
      </section>

      <section id="requirements" className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-4xl">What we need from you</h2>
            <p className="text-white/70">
              Bring these and we can move fast, stay aligned, and ship with
              confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Project Goal",
                text: "What outcome matters most? Launch, conversions, funding, or revenue.",
              },
              {
                title: "Scope & Features",
                text: "Your must-haves vs nice-to-haves. We'll help sharpen it.",
              },
              {
                title: "Brand Assets",
                text: "Logos, copy, reference sites, and any design direction.",
              },
              {
                title: "Timeline",
                text: "Ideal launch date plus any fixed milestones or deadlines.",
              },
              {
                title: "Budget Range",
                text: "So we can recommend the best build path without waste.",
              },
              {
                title: "Decision Makers",
                text: "Who signs off and how we keep approvals fast and clean.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass rounded-3xl p-6 text-sm text-white/70"
              >
                <h3 className="text-lg text-white">{item.title}</h3>
                <p className="mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl">Let’s build something sharp.</h2>
            <p className="text-white/70">
              Tell us about your project. We respond within 24–48 hours with a
              clear next step.
            </p>
            <div className="grid gap-4 text-sm text-white/70">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Email
                </p>
                <p className="text-white">hello@zenivo.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Phone
                </p>
                <p className="text-white">+1 (555) 123-9876</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Location
                </p>
                <p className="text-white">Remote • Worldwide</p>
              </div>
            </div>
          </div>

          <form className="glass rounded-3xl p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  Full name
                </label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  Email
                </label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  Service
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white">
                  <option>App Development</option>
                  <option>Web Development</option>
                  <option>Landing Page</option>
                  <option>Product Strategy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  Budget
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white">
                  <option>$2k–$5k</option>
                  <option>$5k–$15k</option>
                  <option>$15k–$35k</option>
                  <option>$35k+</option>
                </select>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">
                Project details
              </label>
              <textarea
                className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                placeholder="Tell us about goals, scope, and timeline."
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-300 px-6 py-3 text-sm font-semibold text-black"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="text-white">zenivo</p>
            <p>Bold development for ambitious teams.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#flow" className="hover:text-white">Flow</a>
            <a href="#requirements" className="hover:text-white">Requirements</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <p>© 2026 zenivo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
