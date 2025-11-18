const coreSkills = [
  {
    title: "Design Systems",
    tools: ["Storybook", "Chromatic", "Figma Tokens"],
    summary:
      "Scaled multi-brand React + Angular component libraries with shared tokens and visual regression pipelines."
  },
  {
    title: "Data-Rich Interfaces",
    tools: ["TanStack Query", "RxJS", "D3.js"],
    summary:
      "Built adaptive dashboards with optimistic updates, skeleton loaders, and resilient offline support."
  },
  {
    title: "Experience Ops",
    tools: ["Playwright", "Lighthouse CI", "NRQL"],
    summary:
      "Instrumented UX quality metrics, automated accessibility gating, and traced performance regressions."
  }
];

function SkillHighlights() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
          Crafting reliable frontends for cross-functional teams
        </h2>
        <p className="max-w-3xl text-slate-300">
          Shipping React apps that embrace server-first strategies while keeping
          Angular platforms maintainable through modular architecture and
          rigorous tooling.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {coreSkills.map((skill) => (
          <article
            key={skill.title}
            className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg shadow-slate-900/50 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-slate-100">
              {skill.title}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-primary-200/80">
              {skill.tools.join(" · ")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {skill.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillHighlights;
