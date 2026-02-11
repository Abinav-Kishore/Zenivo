"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import { SpotlightCard } from "@/components/spotlight-card";
import { SplineEmbed } from "@/components/spline-embed";

const splineScene =
  "https://prod.spline.design/geAUuE-ImIQdb6WC/scene.splinecode";
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const [sendState, setSendState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <span className="text-2xl text-orange-400">/</span>
            <span className="uppercase">
              <a href="/">zenivo</a>
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-white/70 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#work" className="hover:text-white">
              Our Work
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#team" className="hover:text-white">
              Team
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <HoverBorderGradient>
            <a href="#contact">Build With Us</a>
          </HoverBorderGradient>
        </div>
      </header>

      <main>
        <section className="section-padding bg-gradient-to-b from-black from-50% to-transparent backdrop-blur">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Digital product development team
              </p>
              <h1 className="text-4xl md:text-6xl">
                We build scalable digital products, apps, and automation
                systems.
              </h1>
              <p className="text-white/70">
                We help startups and businesses design, build, and scale modern
                digital solutions focused on performance, reliability, and
                measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <HoverBorderGradient>
                  <a href="#contact">Start a Project</a>
                </HoverBorderGradient>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  View Our Work
                </a>
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
                    Best for
                  </p>
                  <p className="text-white">Startups • Growing businesses</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Delivery
                  </p>
                  <p className="text-white">
                    Depends on scope — timelines from 2–8 weeks
                  </p>
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
              <div className="hidden sm:block">
                <SplineEmbed scene={splineScene} />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="offer" className="section-padding">
          <div className="mx-auto max-w-6xl">
            <div className="glass gradient-border rounded-3xl p-8">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    First client offer
                  </p>
                  <h2 className="text-3xl md:text-4xl">
                    Currently onboarding our first 3 client projects at a
                    discounted rate in exchange for testimonials.
                  </h2>
                  <p className="text-white/70">
                    If you need a reliable digital product built with modern
                    technology and a straightforward process, this is for you.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                  <p className="text-sm font-semibold text-white">Included</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    <li>Full-stack web or mobile application</li>
                    <li>Modern tech stack & architecture</li>
                    <li>Performance optimization</li>
                    <li>2–4 week delivery</li>
                    <li>Discounted project pricing</li>
                  </ul>
                  <div className="mt-6">
                    <HoverBorderGradient className="w-full">
                      <a href="#contact">Let's Talk</a>
                    </HoverBorderGradient>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-padding">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-4xl">Services</h2>
              <p className="text-white/70">
                We design and build products that scale — from customer-facing
                web apps to internal tools and automation that increase
                efficiency.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SpotlightCard
                title="Web Applications"
                description="Scalable web apps focused on performance, modular architecture, and growth-ready patterns."
              />
              <SpotlightCard
                title="Mobile Apps"
                description="Cross-platform mobile experiences with attention to speed, reliability, and retention metrics."
              />
              <SpotlightCard
                title="Automation & Workflow Systems"
                description="Automations that reduce manual work, speed up operations, and let your team focus on product growth."
              />
              <SpotlightCard
                title="Internal Tools & Dashboards"
                description="Efficient admin interfaces and dashboards that surface the right data for better decisions."
              />
              <SpotlightCard
                title="High-Performance Websites"
                description="Fast, accessible websites optimized for conversion and organic visibility."
              />
            </div>
          </div>
        </section>

        <section id="process" className="section-padding">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-4xl">A simple 3-step process</h2>
              <p className="text-white/70">
                Clear steps, quick feedback loops, and a product you can be
                proud to launch.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <SpotlightCard
                title="1. Discovery"
                description="Understand your business goals, audience, and what success looks like for your product."
              />
              <SpotlightCard
                title="2. Design & Build"
                description="Create a scalable, performant solution with clean architecture and modern development practices."
              />
              <SpotlightCard
                title="3. Launch"
                description="Deploy your product, run comprehensive tests, and ensure optimal performance in production."
              />
            </div>
          </div>
        </section>

        <section id="why" className="section-padding">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-4xl">Why Work With Us?</h2>
              <p className="text-white/70">
                You work directly with us — no handoffs, no confusion.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Clear communication",
                  text: "Simple updates, quick questions when needed, and no jargon unless you want it.",
                },
                {
                  title: "Fast turnaround",
                  text: "Tight timelines with a focused scope so your product ships without dragging on.",
                },
                {
                  title: "Modern tech stack",
                  text: "Built with proven technologies for speed, maintainability, and scalability.",
                },
                {
                  title: "Performance-first mindset",
                  text: "Mobile-friendly layouts, quick load times, and strong fundamentals that drive results.",
                },
                {
                  title: "Collaborative approach",
                  text: "You're not one of many accounts — we work closely with you through every phase.",
                },
                {
                  title: "Long-term partnership",
                  text: "We build systems designed to evolve with your business and support future growth.",
                },
              ].map((item) => (
                <div key={item.title} className="glass rounded-3xl p-6">
                  <h3 className="text-lg text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-padding">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-4xl">Case Studies</h2>
              <p className="text-white/70">
                A few projects that show how we think: problem → solution →
                focus.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Marketplace Web App",
                  client: "Retail partner",
                  year: "2025",
                  problem:
                    "The client needed a scalable platform to list products, manage inventory, and accept payments while keeping mobile checkout friction low.",
                  solution:
                    "We delivered a performant marketplace with server-side rendering, optimized checkout flows, and reliable payments integration.",
                  tech: ["Next.js", "Postgres", "Stripe"],
                  focus:
                    "Scalability, checkout conversions, mobile performance",
                  impact:
                    "Improved conversion paths and prepared the platform for increased traffic during peak periods.",
                },
                {
                  title: "Analytics Dashboard",
                  client: "SaaS company",
                  year: "2025",
                  problem:
                    "Product teams lacked quick insights into user engagement and key metrics, slowing decision-making.",
                  solution:
                    "We built an internal dashboard surfacing KPIs, exports, and interactive charts with role-based access.",
                  tech: ["React", "D3.js", "Firebase"],
                  focus:
                    "Information clarity, developer ergonomics, performance",
                  impact:
                    "Enabled faster product decisions and reduced time-to-insight for the analytics team.",
                },
                {
                  title: "Mobile Order App",
                  client: "Logistics startup",
                  year: "2024",
                  problem:
                    "Drivers needed a reliable mobile experience for pickups and deliveries in areas with poor connectivity.",
                  solution:
                    "Delivered an offline-capable mobile app with queued sync, simplified forms, and clear status flows.",
                  tech: ["React Native", "Node.js", "MongoDB"],
                  focus: "Reliability, offline UX, operational efficiency",
                  impact:
                    "Reduced delivery errors and improved on-time rates for the client’s operations.",
                },
                {
                  title: "Marketing Landing + Automation",
                  client: "Startup launch",
                  year: "2024",
                  problem:
                    "The company needed a fast landing page and automated lead routing to support early customer acquisition.",
                  solution:
                    "Built a conversion-focused landing, integrated form submission automations, and routed leads to CRM.",
                  tech: ["Next.js", "Zapier", "Sanity"],
                  focus: "Conversions, lead automation, speed",
                  impact:
                    "Increased sign-ups and reduced manual lead handling for the founders.",
                },
              ].map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-orange-400/20 to-cyan-400/20 blur-3xl opacity-70 transition-opacity group-hover:opacity-100" />
                  <div className="relative space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50">
                          {project.client}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                        {project.year}
                      </span>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40">
                          Problem
                        </p>
                        <p className="mt-2 text-white/70">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40">
                          Solution
                        </p>
                        <p className="mt-2 text-white/70">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40">
                          Tech Stack
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40">
                          Key Focus
                        </p>
                        <p className="mt-2 text-white/70">{project.focus}</p>
                      </div>
                      {project.impact && (
                        <div>
                          <p className="text-xs uppercase tracking-widest text-white/40">
                            Impact
                          </p>
                          <p className="mt-2 text-white/70">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section-padding">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">About</h2>
                <p className="text-white/70">
                  We are a collaborative team with combined experience across
                  development, systems, and product strategy. We work closely
                  with startups and growing businesses to deliver reliable,
                  scalable digital products.
                </p>
                <p className="text-white/70">
                  Our focus is long-term partnerships — building systems that
                  support growth, reduce operational friction, and drive value
                  over time.
                </p>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="text-lg text-white">What to expect</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li>Collaborative planning and clear roadmaps</li>
                  <li>Practical engineering decisions for scale and speed</li>
                  <li>Operational improvements through automation</li>
                  <li>Ongoing partnership and support as you grow</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl">Start your project</h2>
              <p className="text-white/70">
                Tell us what you’re building and what you need. We’ll reply
                within 24–48 hours with a clear next step.
              </p>
              <div className="grid gap-4 text-sm text-white/70">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Email
                  </p>
                  <p className="text-white">care.zenivo@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Phone
                  </p>
                  <p className="text-white">+91 93604 32078</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Location
                  </p>
                  <p className="text-white">Remote • Worldwide</p>
                </div>
              </div>
            </div>

            <form
              className="glass rounded-3xl p-8"
              onSubmit={async (e) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const formData = new FormData(target);
                const payload = Object.fromEntries(formData.entries());
                setSendState("sending");

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  if (res.ok) {
                    setSendState("sent");
                    target.reset();
                    setTimeout(() => setSendState("idle"), 3000);
                  } else {
                    setSendState("error");
                    setTimeout(() => setSendState("idle"), 3000);
                  }
                } catch (err) {
                  setSendState("error");
                  setTimeout(() => setSendState("idle"), 3000);
                }
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">
                    Full name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                    placeholder="+91 99999-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">
                    Service
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                  >
                    <option>Web Applications</option>
                    <option>Mobile Apps</option>
                    <option>Automation & Workflow Systems</option>
                    <option>Internal Tools & Dashboards</option>
                    <option>High-Performance Websites</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  Budget Range
                </label>
                <input
                  name="budget"
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                  placeholder="e.g., 5,000 - 15,000"
                />
              </div>
              <div className="mt-4 space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">
                  Project details
                </label>
                <textarea
                  name="details"
                  className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
                  placeholder="Tell us about your business, what the site needs to do, and your ideal timeline."
                />
              </div>
              <button
                type="submit"
                disabled={sendState === "sending" || sendState === "sent"}
                aria-busy={sendState === "sending"}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-300 px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
              >
                {sendState === "sending"
                  ? "Sending…"
                  : sendState === "sent"
                    ? "Sent"
                    : "Launch Your Product"}
              </button>
            </form>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/60">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row">
            <div>
              <p className="text-white">zenivo</p>
              <p>Digital product development team — design, build, scale.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#work" className="hover:text-white">
                Our Work
              </a>
              <a href="#process" className="hover:text-white">
                Process
              </a>
              <a href="#team" className="hover:text-white">
                Team
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
            <p>© 2026 zenivo. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
