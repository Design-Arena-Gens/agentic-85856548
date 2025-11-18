const timeline = [
  {
    role: "Frontend Developer",
    company: "PulseMetrics",
    period: "2023 — Present",
    impact: [
      "Led migration to Next.js App Router with granular data fetching strategies and React Server Components.",
      "Integrated design tokens pipeline shared with Angular microfrontends through Style Dictionary."
    ]
  },
  {
    role: "UI Engineer",
    company: "Magnetar Labs",
    period: "2022 — 2023",
    impact: [
      "Delivered observability dashboards blending React Query and RxJS bridges to legacy Angular modules.",
      "Created accessibility scorecards automated with Playwright axe audits in CI."
    ]
  },
  {
    role: "Frontend Apprentice",
    company: "Orbit Apps",
    period: "2021 — 2022",
    impact: [
      "Developed component library parity between React and Angular build targets.",
      "Introduced performance budgets and bundle analyzer guardrails."
    ]
  }
];

function ExperienceTimeline() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-8 shadow-xl shadow-slate-900/40 backdrop-blur"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2
            id="experience-heading"
            className="text-2xl font-semibold text-slate-100"
          >
            React-first delivery, Angular-ready foundation
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Threading collaboration with product, design, and backend teams
            every release.
          </p>
        </div>
      </div>
      <ol className="mt-8 space-y-8 border-l border-slate-800/60 pl-6">
        {timeline.map((entry) => (
          <li key={entry.company} className="relative">
            <span className="absolute -left-[17px] top-1 h-3 w-3 rounded-full border border-primary-400 bg-primary-500 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  {entry.role}
                </h3>
                <span className="text-sm text-primary-200/80">
                  {entry.company}
                </span>
                <span className="ml-auto text-xs uppercase tracking-[0.22em] text-slate-500">
                  {entry.period}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {entry.impact.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ExperienceTimeline;
