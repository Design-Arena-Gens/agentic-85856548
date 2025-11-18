const caseStudies = [
  {
    name: "React · Live Collaboration Canvas",
    summary:
      "Engineered multiplayer whiteboard using shared worker presence, CRDT-backed state, and viewport-based rendering for smooth zoom interactions.",
    outcomes: [
      "Sub-70ms interaction latency with 50 concurrent users",
      "Reduced hydration cost 40% via RSC streaming",
      "Introduced session recording for QA triage"
    ]
  },
  {
    name: "Angular · Data Compliance cockpit",
    summary:
      "Delivered compliance automation platform with route-based code splitting, zone-less change detection via signals, and integrated audit logging.",
    outcomes: [
      "Cut manual review time by 60%",
      "Achieved 100% lighthouse accessibility score",
      "Rolled out step-by-step wizards with analytics funnel tracking"
    ]
  },
  {
    name: "Next.js · Experimentation runtime",
    summary:
      "Built experimentation hub integrating Edge Middleware for variant routing, visual editor, and feature flag governance UI.",
    outcomes: [
      "Empowered PMs to launch tests without dev support",
      "13% uplift in onboarding conversion",
      "Launched design QA workflow with Percy snapshots"
    ]
  }
];

function CaseStudies() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
          Selected builds that blend interaction and engineering rigor
        </h2>
        <p className="max-w-3xl text-slate-300">
          Each engagement pairs discovery workshops with rapid prototyping,
          backed by automated quality gates and developer experience tooling.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study) => (
          <article
            key={study.name}
            className="flex h-full flex-col rounded-2xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-primary-200">
              {study.name}
            </h3>
            <p className="mt-3 text-sm text-slate-300">{study.summary}</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              {study.outcomes.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
